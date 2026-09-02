// Design note: Field Notes Modernism — the destinations hub is a route map, not a gallery. Each destination is framed by access, programme relevance, and nearby connections.

import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { RouteTick, SectionIntro } from "@/components/SiteShell";
import { destinations, imageUrls } from "@/lib/siteData";

const meta = {
  title: "Kenya Destinations | 67 Tours & Travel",
  description: "Destination guides for Nairobi, Maasai Mara, Amboseli, Coast, Rift Valley and Northern Kenya. Access, seasons, and programme relevance.",
  keywords: "Kenya destinations, Nairobi, Maasai Mara, Amboseli, Rift Valley, Northern Kenya, Kakamega, Coast, Watamu, travel routes"
};

const programmeDestinations = {
  education: [
    { name: "Nairobi", href: "/destinations/nairobi", description: "Museums, urban systems, conservation organisations and the practical starting point for most group movements." },
    { name: "Naivasha & Nakuru", href: "/destinations/naivasha-nakuru", description: "Rift Valley geography, freshwater ecology, birdlife and manageable links between learning sites." },
    { name: "Amboseli", href: "/destinations/amboseli", description: "Wildlife, water pressure, pastoral livelihoods and conservation questions in a compact field setting." },
    { name: "Coast / Watamu", href: "/destinations/coast-watamu", description: "Marine systems, mangroves, coastal communities and field lessons that work across several age groups." },
    { name: "Kakamega & Western Kenya", href: "/destinations/kakamega", description: "Forest ecology, community context and a different operating rhythm from the main safari circuit." },
  ],
  ngo: [
    { name: "Northern Kenya", href: "/destinations/northern-kenya", description: "Longer road legs, limited services and route plans that need realistic fuel, rest and communication allowances." },
    { name: "Turkana Routes", href: "/destinations/northern-kenya", description: "Remote access, heat, road conditions and site sequencing need to be considered before vehicles are assigned." },
    { name: "Rift Valley Corridor", href: "/destinations/naivasha-nakuru", description: "Useful for linking Nairobi with Nakuru, Naivasha, Baringo and onward programme locations." },
    { name: "Western Kenya", href: "/destinations/kakamega", description: "Multi-site movements through Kisumu, Kakamega and surrounding counties where timing and local coordination matter." },
  ],
  safari: [
    { name: "Maasai Mara", href: "/destinations/maasai-mara", description: "Wildlife density and migration patterns, but movement planning matters especially for groups." },
    { name: "Amboseli", href: "/destinations/amboseli", description: "Compact wildlife setting with Mount Kilimanjaro views and elephant populations." },
    { name: "Naivasha & Nakuru", href: "/destinations/naivasha-nakuru", description: "Rift Valley access, freshwater systems, and manageable logistics for shorter safari segments." },
    { name: "Samburu", href: "/destinations/northern-kenya", description: "Northern safari circuit with different species and drier conditions (seasonal access)." },
  ],
  coast: [
    { name: "Coast / Watamu", href: "/destinations/coast-watamu", description: "Marine systems, mangroves, and coastal communities with practical planning for heat and tides." },
    { name: "Mombasa & North Coast", href: "/destinations/coast-watamu", description: "Historic Swahili coast, cultural sites, and beach access with urban considerations." },
  ],
};

const seasonalNotes = [
  { destination: "Nairobi", bestSeason: "Year-round", accessNotes: "Always accessible", programmeFit: "Education, NGO hub" },
  { destination: "Maasai Mara", bestSeason: "Jun–Oct, Jan–Feb", accessNotes: "Road access varies by rain", programmeFit: "Safari, some education" },
  { destination: "Amboseli", bestSeason: "Jun–Oct, Jan–Feb", accessNotes: "Road access varies by rain", programmeFit: "Safari, education" },
  { destination: "Naivasha/Nakuru", bestSeason: "Year-round", accessNotes: "Always accessible", programmeFit: "Education, transit" },
  { destination: "Turkana", bestSeason: "Dry seasons only", accessNotes: "Remote, requires planning", programmeFit: "NGO field work" },
  { destination: "Coast", bestSeason: "Jan–Mar, Jul–Oct", accessNotes: "Avoid rough sea seasons", programmeFit: "Education, leisure" },
  { destination: "Kakamega", bestSeason: "Year-round, avoid heavy rain", accessNotes: "Forest access", programmeFit: "Education, community work" },
];

export default function Destinations() {
  return (
    <>
      <PageHeader 
        eyebrow="DESTINATIONS / KENYA" 
        title="The places where programmes and routes become real." 
        intro="These are the regions and sites we work with regularly for education groups, NGO field programmes, safari routes and coastal stays. Each has access considerations, seasonal factors, and programme relevance that shape how we plan movement." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Programme fit" number="01" />
          <p className="page-rail__note">The right destination depends on the learning or programme objective, the group, the season and the amount of movement the day can carry.</p>
        </aside>
        <div className="page-intro__body">
          <p>We do not treat destinations as a checklist. Each place we work with has specific access requirements, seasonal constraints, and programme relevance. The route is shaped around what the group needs to achieve, not how many stops can be added to an itinerary.</p>
          <p>Below, destinations are organised by programme type. This reflects how we actually plan: education groups need sites that support learning objectives, NGO programmes need corridors that work for field access, and safari and coast groups need routes that respect timing and conditions.</p>
        </div>
      </section>

      <section className="destinations-by-type container">
        <div className="route-section__header">
          <RouteTick label="Education & Study Tour Destinations" number="02" />
          <div>
            <h2>Destinations with a reason to be there.</h2>
            <p>These are common building blocks for study programmes, selected according to the question the group needs to explore.</p>
          </div>
        </div>
        <div className="route-list">
          {programmeDestinations.education.map((dest) => (
            <Link key={dest.name} to={dest.href} className="route-list__row">
              <span>{dest.name}</span>
              <p>{dest.description}</p>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </Link>
          ))}
        </div>
      </section>

      <section className="destinations-by-type container">
        <div className="route-section__header">
          <RouteTick label="NGO Field Programme Corridors" number="03" />
          <div>
            <h2>Routes shaped by access, not just distance.</h2>
            <p>We consider what the road, the site and the programme require before assigning a vehicle or confirming a sequence.</p>
          </div>
        </div>
        <div className="route-list">
          {programmeDestinations.ngo.map((dest) => (
            <Link key={dest.name} to={dest.href} className="route-list__row">
              <span>{dest.name}</span>
              <p>{dest.description}</p>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </Link>
          ))}
        </div>
      </section>

      <section className="destinations-by-type container">
        <div className="route-section__header">
          <RouteTick label="Safari & Coast Destinations" number="04" />
          <div>
            <h2>Wildlife and coastal routes with practical planning.</h2>
            <p>Safari and coast travel still requires movement planning: transfer time, park rhythm, heat, tides, and the group's pace.</p>
          </div>
        </div>
        <div className="route-list">
          {[...programmeDestinations.safari, ...programmeDestinations.coast].map((dest) => (
            <Link key={dest.name} to={dest.href} className="route-list__row">
              <span>{dest.name}</span>
              <p>{dest.description}</p>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </Link>
          ))}
        </div>
      </section>

      <section className="seasonal-section container">
        <div className="route-section__header">
          <RouteTick label="Seasonal Planning" number="05" />
          <div>
            <h2>When each destination works best.</h2>
            <p>Access, conditions, and programme relevance change by season. Use these as planning inputs, not fixed rules.</p>
          </div>
        </div>
        <div className="seasonal-table">
          <table>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Best Season</th>
                <th>Access Notes</th>
                <th>Programme Fit</th>
              </tr>
            </thead>
            <tbody>
              {seasonalNotes.map((note) => (
                <tr key={note.destination}>
                  <td><strong>{note.destination}</strong></td>
                  <td>{note.bestSeason}</td>
                  <td>{note.accessNotes}</td>
                  <td>{note.programmeFit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="06" />
        <div className="cta-strip__action">
          <div>
            <h2>Start with the destination that fits your objective.</h2>
            <p>Share the places you are considering, the group size, and what the trip needs to achieve.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
