// Design note: Field Notes Modernism — every route shares one calm editorial shell and one primary action: Request a quote.

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteShell } from "./components/SiteShell";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Ngo from "./pages/Ngo";
import SafariCoast from "./pages/SafariCoast";
import HowWeWork from "./pages/HowWeWork";
import Contact from "./pages/Contact";

function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/ngo" component={Ngo} />
        <Route path="/safari-coast" component={SafariCoast} />
        <Route path="/how-we-work" component={HowWeWork} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
