// Design note: Field Notes Modernism — left-anchored editorial rail, route ticks, paper warmth, and a single orange action signal.

import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { imageUrls, navItems, footerGroups } from "@/lib/siteData";
import { localBusinessSchema } from "@/lib/schema";

export function SiteMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`site-mark ${compact ? "site-mark--compact" : ""}`} aria-label="67 Tours & Travel home">
      <span className="site-mark__seal">
        <img src={imageUrls.mark} alt="" aria-hidden="true" />
      </span>
      <span className="site-mark__words">
        <span>67</span>
        <small>TOURS &amp; TRAVEL</small>
      </span>
    </Link>
  );
}

export function RouteTick({ label, number }: { label: string; number?: string }) {
  return (
    <div className="route-tick">
      <span className="route-tick__line" />
      {number && <span className="route-tick__number">{number}</span>}
      <span>{label}</span>
    </div>
  );
}

export function SectionIntro({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "right" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <RouteTick label={eyebrow} />
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    // Add local business schema to all pages
    let existingScript = document.getElementById('local-business-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('local-business-schema');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="site-frame">
      <header className={`site-header ${open ? "site-header--open" : ""}`}>
        <div className="site-header__inner">
          <SiteMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="site-header__actions">
            <Link href="/contact" className="header-cta">
              Request a quote <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
            <button className="mobile-menu-button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className="mobile-nav" aria-hidden={!open}>
          <span className="mobile-nav__label">Navigate the site</span>
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}>
              <span>0{index + 1}</span>{item.label}<ChevronDown size={15} />
            </Link>
          ))}
          <Link href="/contact" className="mobile-nav__quote">Request a route-specific quote <ArrowUpRight size={16} /></Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <SiteMark compact />
            <p>Kenya on the ground.<br />Trips planned for how they actually move.</p>
          </div>
          <div className="site-footer__links">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <span className="footer-label">{group.label}</span>
                {group.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              </div>
            ))}
          </div>
          <div className="site-footer__contact">
            <span className="footer-label">Start with the brief</span>
            <p>Dates, group size, route and what the trip needs to achieve.</p>
            <Link href="/contact" className="footer-action">Request a quote <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>67 Tours &amp; Travel</span>
          <span>Kenya / East Africa</span>
          <span>Plan the movement. Protect the programme.</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string }) {
  return (
    <section className={`page-header ${image ? "page-header--with-image" : ""}`}>
      <div className="page-header__copy">
        <RouteTick label={eyebrow} />
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {image && <div className="page-header__image"><img src={image} alt={imageAlt || ""} /><span className="image-caption">KENYA / FIELD NOTE</span></div>}
      <div className="page-header__stamp"><span className="page-header__stamp-pin" /><span>ROUTE SHEET</span><strong>Plan from the ground up.</strong><small>67 / KENYA-SIDE OPERATIONS</small></div>
    </section>
  );
}
