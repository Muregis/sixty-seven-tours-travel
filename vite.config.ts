import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    // Keep newest lines (from end) that fit within 60% of maxSize
    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore trim errors */
  }
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (entries.length === 0) return;

  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);

  // Format entries with timestamps
  const lines = entries.map((entry) => {
    const ts = new Date().toISOString();
    return `[${ts}] ${JSON.stringify(entry)}`;
  });

  // Append to log file
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");

  // Trim if exceeds max size
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/**
 * Vite plugin to collect browser debug logs
 * - POST /__manus__/logs: Browser sends logs, written directly to files
 * - Files: browserConsole.log, networkRequests.log, sessionReplay.log
 * - Auto-trimmed when exceeding 1MB (keeps newest entries)
 */
function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") {
        return html;
      }
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      // POST /__manus__/logs: Browser sends logs (written directly to files)
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        const handlePayload = (payload: any) => {
          // Write logs directly to files
          if (payload.consoleLogs?.length > 0) {
            writeToLogFile("browserConsole", payload.consoleLogs);
          }
          if (payload.networkRequests?.length > 0) {
            writeToLogFile("networkRequests", payload.networkRequests);
          }
          if (payload.sessionEvents?.length > 0) {
            writeToLogFile("sessionReplay", payload.sessionEvents);
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        };

        const reqBody = (req as { body?: unknown }).body;
        if (reqBody && typeof reqBody === "object") {
          try {
            handlePayload(reqBody);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            handlePayload(payload);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });

      server.middlewares.use("/__manus__/debug-collector.js", (req, res) => {
        if (req.method !== "GET") {
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
          return;
        }

        const debugCollectorScript = `(function () {
  "use strict";
  if (window.__MANUS_DEBUG_COLLECTOR__) return;

  const CONFIG = {
    reportEndpoint: "/__manus__/logs",
    reportInterval: 2000,
  };

  const store = {
    consoleLogs: [],
    networkRequests: [],
    uiEvents: [],
  };

  function sanitizeValue(value, depth) {
    if (depth === void 0) depth = 0;
    if (depth > 3) return "[Max Depth]";
    if (value === null || value === undefined) return value;
    if (typeof value === "string") return value.length > 500 ? value.slice(0, 500) + "..." : value;
    if (typeof value !== "object") return value;
    if (Array.isArray(value)) return value.slice(0, 50).map(function (v) { return sanitizeValue(v, depth + 1); });
    var out = {};
    for (var k in value) {
      if (Object.prototype.hasOwnProperty.call(value, k)) {
        out[k] = sanitizeValue(value[k], depth + 1);
      }
    }
    return out;
  }

  function formatArgs(args) {
    var result = [];
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      try {
        if (arg instanceof Error) result.push({ type: "Error", message: arg.message, stack: arg.stack });
        else if (typeof arg === "object") result.push(sanitizeValue(arg));
        else result.push(String(arg));
      } catch (e) { result.push("[Unserializable]"); }
    }
    return result;
  }

  var originalConsole = {
    log: console.log.bind(console),
    debug: console.debug.bind(console),
    info: console.info.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
  };

  ["log", "debug", "info", "warn", "error"].forEach(function (method) {
    console[method] = function () {
      var args = Array.prototype.slice.call(arguments);
      store.consoleLogs.push({
        timestamp: Date.now(),
        level: method.toUpperCase(),
        args: formatArgs(args),
        stack: method === "error" ? new Error().stack : null,
      });
      originalConsole[method].apply(console, args);
    };
  });

  window.addEventListener("error", function (event) {
    store.consoleLogs.push({
      timestamp: Date.now(),
      level: "ERROR",
      args: [{ type: "UncaughtError", message: event.message, filename: event.filename, lineno: event.lineno }],
    });
  });

  window.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    store.consoleLogs.push({
      timestamp: Date.now(),
      level: "ERROR",
      args: [{ type: "UnhandledRejection", reason: reason && reason.message ? reason.message : String(reason) }],
    });
  });

  var originalFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    init = init || {};
    var startTime = Date.now();
    var url = typeof input === "string" ? input : (input && (input.url || String(input))) || "";
    var method = init.method || (input && input.method) || "GET";
    if (url.indexOf("/__manus__/") === 0) return originalFetch(input, init);
    return originalFetch(input, init).then(function (response) {
      store.networkRequests.push({
        timestamp: startTime,
        type: "fetch",
        method: method.toUpperCase(),
        url: url,
        response: { status: response.status, statusText: response.statusText },
        duration: Date.now() - startTime,
      });
      return response;
    }).catch(function (error) {
      store.networkRequests.push({
        timestamp: startTime,
        type: "fetch",
        method: method.toUpperCase(),
        url: url,
        duration: Date.now() - startTime,
        error: { message: error.message },
      });
      throw error;
    });
  };

  var originalXHROpen = XMLHttpRequest.prototype.open;
  var originalXHRSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this._manusData = { method: (method || "GET").toUpperCase(), url: url, startTime: null };
    return originalXHROpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    var xhr = this;
    if (xhr._manusData && xhr._manusData.url && xhr._manusData.url.indexOf("/__manus__/") !== 0) {
      xhr._manusData.startTime = Date.now();
      xhr.addEventListener("load", function () {
        store.networkRequests.push({
          timestamp: xhr._manusData.startTime,
          type: "xhr",
          method: xhr._manusData.method,
          url: xhr._manusData.url,
          response: { status: xhr.status, statusText: xhr.statusText },
          duration: Date.now() - xhr._manusData.startTime,
        });
      });
      xhr.addEventListener("error", function () {
        store.networkRequests.push({
          timestamp: xhr._manusData.startTime,
          type: "xhr",
          method: xhr._manusData.method,
          url: xhr._manusData.url,
          duration: Date.now() - xhr._manusData.startTime,
          error: { message: "Network error" },
        });
      });
    }
    return originalXHRSend.apply(this, arguments);
  };

  function reportLogs() {
    var consoleLogs = store.consoleLogs.splice(0);
    var networkRequests = store.networkRequests.splice(0);
    var uiEvents = store.uiEvents.splice(0);
    if (consoleLogs.length === 0 && networkRequests.length === 0 && uiEvents.length === 0) return;
    var payload = {
      timestamp: Date.now(),
      consoleLogs: consoleLogs,
      networkRequests: networkRequests,
      sessionEvents: uiEvents,
      uiEvents: uiEvents,
    };
    originalFetch(CONFIG.reportEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(function () {
      store.consoleLogs = store.consoleLogs.concat(consoleLogs).slice(-500);
      store.networkRequests = store.networkRequests.concat(networkRequests).slice(-200);
      store.uiEvents = store.uiEvents.concat(uiEvents).slice(-500);
    });
  }

  setInterval(reportLogs, CONFIG.reportInterval);

  window.addEventListener("beforeunload", function () {
    if (store.consoleLogs.length === 0 && store.networkRequests.length === 0 && store.uiEvents.length === 0) return;
    var payload = {
      timestamp: Date.now(),
      consoleLogs: store.consoleLogs.slice(-50),
      networkRequests: store.networkRequests.slice(-20),
      sessionEvents: store.uiEvents.slice(-100),
      uiEvents: store.uiEvents.slice(-100),
    };
    if (navigator.sendBeacon) {
      try { navigator.sendBeacon(CONFIG.reportEndpoint, JSON.stringify(payload)); } catch (e) {}
    }
  });

  window.__MANUS_DEBUG_COLLECTOR__ = { version: "2.0-inline", store: store, forceReport: reportLogs };
})();`;

        res.writeHead(200, {
          "Content-Type": "text/javascript",
          "Cache-Control": "no-store",
        });
        res.end(debugCollectorScript);
      });
    },
  };
}

function vitePluginStorageProxy(): Plugin {
  return {
    name: "manus-storage-proxy",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/manus-storage", async (req, res) => {
        const key = req.url?.replace(/^\//, "");
        if (!key) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing storage key");
          return;
        }

        const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
        const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

        if (!forgeBaseUrl || !forgeKey) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Storage proxy not configured");
          return;
        }

        try {
          const forgeUrl = new URL("v1/storage/presign/get", forgeBaseUrl + "/");
          forgeUrl.searchParams.set("path", key);

          const forgeResp = await fetch(forgeUrl, {
            headers: { Authorization: `Bearer ${forgeKey}` },
          });

          if (!forgeResp.ok) {
            res.writeHead(502, { "Content-Type": "text/plain" });
            res.end("Storage backend error");
            return;
          }

          const { url } = (await forgeResp.json()) as { url: string };
          if (!url) {
            res.writeHead(502, { "Content-Type": "text/plain" });
            res.end("Empty signed URL");
            return;
          }

          res.writeHead(307, { Location: url, "Cache-Control": "no-store" });
          res.end();
        } catch {
          res.writeHead(502, { "Content-Type": "text/plain" });
          res.end("Storage proxy error");
        }
      });
    },
  };
}

const isProduction = process.env.NODE_ENV === 'production';
const plugins = [
  react(),
  tailwindcss(),
  ...(isProduction ? [] : [
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector(),
    vitePluginStorageProxy()
  ])
];

export default defineConfig({
  base: "/",
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'radix-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
