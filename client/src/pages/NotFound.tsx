import { ArrowUpRight, MapPin, Route } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { RouteTick } from "@/components/SiteShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Not Found - 67 Tours & Travel",
  "description": "The page you are looking for could not be found on 67 Tours & Travel website.",
  "url": "https://67tours.co.ke/404"
};

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | 67 Tours & Travel"
        description="The page you are looking for does not exist on the 67 Tours & Travel site. Return to the Kenya destination management homepage or explore routes and services."
        canonical="https://67tours.co.ke/404"
        noindex={true}
        structuredData={structuredData}
      />
      <section className="page-header">
        <div className="page-header__copy">
          <RouteTick label="ROUTE SHEET / 404" number="ERR" />
          <h1>This destination is not on our route board.</h1>
          <p>The link you followed may be outdated, or the page may have moved. The Kenya-side operations team keeps every route documented and current — from here, navigate back to the homepage, review the destinations map, or send us a brief.</p>
        </div>
        <div className="page-header__stamp">
          <span className="page-header__stamp-pin" />
          <span>FIELD NOTE / 404</span>
          <strong>Route not in the current sequence.</strong>
          <small>67 / KENYA-SIDE OPERATIONS</small>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Where to from here" number="01" />
          <div>
            <h2>Three practical ways back onto the route.</h2>
            <p>Every Kenya trip needs a clear starting point. These are the three most useful next stops from a misplaced waypoint.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>01</strong>
            <div>
              <h3>Return to the homepage</h3>
              <p>Start again from the Kenya operations overview: service lines, capabilities, destinations and the main route board.</p>
              <Link href="/" className="text-link">Go to homepage <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="checklist__item">
            <strong>02</strong>
            <div>
              <h3>Browse Kenya destinations</h3>
              <p>Open the destinations map: Nairobi, Maasai Mara, Amboseli, Coast/Watamu, Rift Valley, Northern Kenya and Western Kenya.</p>
              <Link href="/destinations" className="text-link">View all destinations <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="checklist__item">
            <strong>03</strong>
            <div>
              <h3>Send us the missing route</h3>
              <p>If you were looking for a specific programme page or destination note, send a brief and the planning team will confirm the correct route.</p>
              <Link href="/contact" className="text-link">Request a quote or route check <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Operating note" number="02" />
        <div className="cta-strip__action">
          <div>
            <h2>Every movement needs a next point.</h2>
            <p>67 Tours &amp; Travel plans Kenya travel around handovers, contact points and practical routing — not just a list of places. If a link on our site has taken you here in error, let us know and we will update the route board.</p>
          </div>
          <Link href="/contact" className="hero-cta">Contact the planning team <ArrowUpRight size={17} strokeWidth={1.8} /></Link>
        </div>
      </section>
    </>
  );
}
