// Design note: Field Notes Modernism — the homepage leads with the real decision: can this team move our people, programme, and timeline through Kenya?

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { imageUrls, destinations } from "@/lib/siteData";
import { RouteTick, SectionIntro } from "@/components/SiteShell";

const capabilities = [
  { number: "01", title: "Education & study tours", text: "Curriculum-led programmes with the group movement, student standards, local facilitation and learning context planned together.", href: "/education" },
  { number: "02", title: "NGO field logistics", text: "Multi-site movements, remote access, realistic route plans and the communication rhythm programme teams need.", href: "/ngo" },
  { number: "03", title: "Safari travel", text: "Wildlife routes shaped around transfer time, park rhythm, accommodation choices and the pace of the group.", href: "/safari-coast" },
  { number: "04", title: "Coast travel", text: "Indian Ocean stays, marine activities and coastal movement planned around heat, tides, road legs and arrival windows.", href: "/safari-coast" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <RouteTick label="Kenya / on the ground" number="67" />
          <h1>One Kenya plan. <em>Every handover accounted for.</em></h1>
          <p className="home-hero__lead">67 Tours &amp; Travel coordinates education groups, NGO field teams, safari routes and coast travel across Kenya—linking vehicles, stays, field sites and the people responsible for the day.</p>
          <Link href="/contact" className="hero-cta">Request a route-specific quote <ArrowUpRight size={17} strokeWidth={1.8} /></Link>
          <div className="hero-note"><span className="hero-note__dot" /><span>For organisers who need the route to work for the people, the programme and the day.</span></div>
          <div className="hero-service-board" aria-label="What we coordinate">
            <Link href="/education"><strong>Education</strong><span>Study tours</span></Link>
            <Link href="/ngo"><strong>NGO</strong><span>Field logistics</span></Link>
            <Link href="/safari-coast"><strong>Safari</strong><span>Wildlife routes</span></Link>
            <Link href="/safari-coast"><strong>Coast</strong><span>Indian Ocean</span></Link>
          </div>
        </div>
        <div className="home-hero__visual">
          <img src={imageUrls.hero} alt="Students and a field facilitator observing wildlife in Amboseli" />
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
          <div className="stat-band__intro"><RouteTick label="What we coordinate" /><p>Four ways people arrive in the Kenya-side brief.</p></div>
          <div className="stat"><strong>EDU</strong><span>Study tours built around the learning objective</span></div>
          <div className="stat"><strong>NGO</strong><span>Field logistics across sites and counties</span></div>
          <div className="stat"><strong>TRAVEL</strong><span>Safari, coast and group movements that connect</span></div>
        </div>
      </section>

      <section className="intro-section container">
        <div><RouteTick label="The decision" number="01" /></div>
        <div className="intro-section__copy">
          <h2>Can this team handle the whole movement?</h2>
          <p>That is the right question. A Kenya itinerary is not only a list of places. It is vehicles arriving when expected, accommodation that works for the group, field contacts who know the day’s plan, and a response when the route changes.</p>
          <p>Our job is to make those operating decisions visible early enough to plan around them—whether the brief is academic, humanitarian, safari-led or coastal.</p>
          <Link href="/how-we-work" className="text-link">See how we work <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="capabilities container">
        <div className="capabilities__header">
          <RouteTick label="What we handle" number="02" />
          <p>Four service lines, one operating discipline: clear routing, practical standards and local follow-through across Kenya.</p>
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
        </div>
      </section>

      <section className="home-split">
        <div className="home-split__image"><img src={imageUrls.safari} alt="A safari vehicle on a quiet Maasai Mara track" /></div>
        <div className="home-split__copy">
          <RouteTick label="Also in the brief" number="03" />
          <h2>Safari and coast, with the same operating discipline.</h2>
          <p>For leisure groups, we plan the handovers, road legs, stays and timing that make a trip easier to manage. Mara, Amboseli, Naivasha, the coast and the links between them are treated as a route—not a collection of brochure stops.</p>
          <Link href="/safari-coast" className="text-link">Review safari &amp; coast routes <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="04" />
        <div className="cta-strip__action">
          <div><h2>Bring us the route before it becomes a problem.</h2><p>Dates, group size, starting point and what the trip needs to achieve are enough for a useful first conversation.</p></div>
          <Link href="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} strokeWidth={1.8} /></Link>
        </div>
      </section>
    </>
  );
}
