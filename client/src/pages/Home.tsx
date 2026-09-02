// Design note: Field Notes Modernism — the homepage leads with the real decision: can this team move our people, programme, and timeline through Kenya?

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { imageUrls, destinations } from "@/lib/siteData";
import { RouteTick, SectionIntro } from "@/components/SiteShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "67 Tours & Travel",
  "description": "Kenya-based destination management for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel.",
  "url": "https://67tours.co.ke",
  "logo": "https://67tours.co.ke/favicon.svg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressRegion": "Nairobi"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "priceRange": "$$"
};

const capabilities = [
  { number: "01", title: "Church & religious groups", text: "Retreats, conferences, mission trips and pilgrimages planned around the spiritual and practical needs of congregations, members and ministry teams.", href: "/church-religious" },
  { number: "02", title: "Chamas & investment groups", text: "Member-benefit travel that respects the trust placed in leadership: transparent costs, clear value, and routes that serve the group's financial and social objectives.", href: "/chamas" },
  { number: "03", title: "Corporate & office", text: "Team building, end-of-year celebrations, incentive travel, conference attendance and strategic planning retreats aligned to business purpose and professional standards.", href: "/corporate" },
  { number: "04", title: "Schools & education", text: "Curriculum-led study tours with group movement, student standards, local facilitation and learning context planned together.", href: "/schools" },
  { number: "05", title: "NGOs & field logistics", text: "Multi-site field movements, remote access, realistic route plans and the communication rhythm programme teams need to stay aligned across counties.", href: "/ngo" },
];

export default function Home() {
  return (
    <>
      <SEO 
        title="67 Tours & Travel | Kenya on the Ground"
        description="Kenya-based destination management for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel. Clear routing, practical standards, local coordination."
        canonical="https://67tours.co.ke"
        structuredData={structuredData}
      />
      <section className="home-hero">
        <div className="home-hero__copy">
          <RouteTick label="Kenya / on the ground" number="67" />
          <h1>One Kenya plan. <em>Every handover accounted for.</em></h1>
          <p className="home-hero__lead">67 Tours &amp; Travel coordinates movement for Kenya's most accountable group buyers: churches and religious organisations, chamas and investment groups, corporate offices, schools and education groups, and NGOs with field programmes. We handle the vehicles, stays, routes and day-to-day coordination so the organisers can focus on the people and the purpose.</p>
          <Link href="/contact" className="hero-cta">Request a route-specific quote <ArrowUpRight size={17} strokeWidth={1.8} /></Link>
          <div className="hero-note"><span className="hero-note__dot" /><span>For organisers who need the route to work for the people, the programme and the day.</span></div>
          <div className="hero-service-board" aria-label="What we coordinate">
            <Link href="/church-religious"><strong>Church</strong><span>Retreats, conferences, missions</span></Link>
            <Link href="/chamas"><strong>Chama</strong><span>Investment group travel</span></Link>
            <Link href="/corporate"><strong>Corporate</strong><span>Team building, incentives</span></Link>
            <Link href="/schools"><strong>School</strong><span>Study tours</span></Link>
            <Link href="/ngo"><strong>NGO</strong><span>Field logistics</span></Link>
            <Link href="/safari-coast"><strong>Safari &amp; Coast</strong><span>Leisure travel</span></Link>
          </div>
        </div>
        <div className="home-hero__visual">
          <img src={imageUrls.hero} alt="Group movement planning in Kenya — route board and vehicle coordination" />
          <span className="hero-index">FIELD NOTE / 01</span>
          <div className="route-card">
            <div className="route-card__top"><span>Route board / Kenya</span><MapPin size={15} /></div>
            <strong>People in motion.</strong>
            <p>Groups, field teams, safari vehicles and coast handovers—planned as one connected movement.</p>
          </div>
        </div>
      </section>

      <section className="stat-band" aria-label="Operating focus">
        <div className="stat-band__inner">
          <div className="stat-band__intro"><RouteTick label="What we coordinate" /><p>Five ways people arrive in the Kenya-side brief.</p></div>
          <div className="stat"><strong>CHURCH</strong><span>Retreats, conferences, mission trips and pilgrimages</span></div>
          <div className="stat"><strong>CHAMA</strong><span>Investment group travel, strategic planning and member benefits</span></div>
          <div className="stat"><strong>CORP</strong><span>Team building, end-of-year, incentive and conference travel</span></div>
          <div className="stat"><strong>SCHOOL</strong><span>Study tours and curriculum-led programmes</span></div>
          <div className="stat"><strong>NGO</strong><span>Field logistics across sites and counties</span></div>
        </div>
      </section>

      <section className="intro-section container">
        <div><RouteTick label="The decision" number="01" /></div>
        <div className="intro-section__copy">
          <h2>Can this team handle the whole movement?</h2>
          <p>That is the right question. A Kenya itinerary is not only a list of places. It is vehicles arriving when expected, accommodation that works for the group, field contacts who know the day's plan, and a response when the route changes.</p>
          <p>Our job is to make those operating decisions visible early enough to plan around them—whether the brief is academic, humanitarian, safari-led or coastal.</p>
          <Link href="/how-we-work" className="text-link">See how we work <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="capabilities container">
        <div className="capabilities__header">
          <RouteTick label="What we handle" number="02" />
          <p>Five service lines, one operating discipline: clear routing, practical standards and local follow-through across Kenya.</p>
        </div>
        <div className="capabilities__list">
          {capabilities.map((capability) => (
            <Link key={capability.number} href={capability.href} className="capability-row">
              <span className="capability-row__num">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </Link>
          ))}
        </div>
      </section>

      <section className="destination-section">
        <div className="destination-layout container">
          <SectionIntro eyebrow="Education / NGO routes" title="Where the brief becomes a route." body="The right destination depends on the learning or programme objective, the group, the season and the amount of movement the day can carry." />
          <div className="destination-grid">
            {destinations.education.map((destination) => (
              <div className="destination-item" key={destination.code}>
                <span className="destination-item__code">{destination.code}</span>
                <div><h3>{destination.name}</h3><p>{destination.note}</p></div>
              </div>
            ))}
          </div>
          <div className="destination-cta">
            <Link to="/destinations" className="text-link">View all destinations <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="home-split">
        <div className="home-split__image"><img src={imageUrls.safari} alt="A safari vehicle on a quiet Maasai Mara track" /></div>
        <div className="home-split__copy">
          <RouteTick label="Also in the brief" number="04" />
          <h2>Safari and coast, with the same operating discipline.</h2>
          <p>For leisure groups, we plan the handovers, road legs, stays and timing that make a trip easier to manage. Mara, Amboseli, Naivasha, the coast and the links between them are treated as a route—not a collection of brochure stops.</p>
          <Link href="/safari-coast" className="text-link">Review safari &amp; coast routes <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="trust-section container">
        <div className="route-section__header">
          <RouteTick label="Who we work with" />
          <div>
            <h2>Organisations that depend on reliable Kenya-side coordination.</h2>
            <p>We work with churches, chamas, corporate offices, schools, NGOs and groups that need field movement to be as dependable as the programme itself.</p>
          </div>
        </div>
        <div className="trust-placeholder">
          <p><em>[Partner/Client Logo Section — For future placement of organisation logos]</em></p>
          <p><em>[Testimonial Section — For future placement of verified client testimonials]</em></p>
          <p><em>[Case Study Teasers — For future placement of anonymised programme summaries]</em></p>
          <p className="trust-note">This section is structured to receive real proof points as they become available. No fabricated content will appear here.</p>
        </div>
      </section>

      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-banner__content">
            <span className="emergency-banner__label">24-Hour Kenya Operations Line</span>
            <span className="emergency-banner__phone">[Phone Number Placeholder]</span>
            <span className="emergency-banner__note">For active programmes and urgent field coordination</span>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div><h2>Bring us the route before it becomes a problem.</h2><p>Dates, group size, starting point and what the trip needs to achieve are enough for a useful first conversation.</p></div>
          <Link href="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} strokeWidth={1.8} /></Link>
        </div>
      </section>
    </>
  );
}
