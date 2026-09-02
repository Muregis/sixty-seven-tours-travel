// Design note: Field Notes Modernism — the destinations hub is a route map, not a gallery. Each destination is framed by access, programme relevance, and nearby connections.

import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick, SectionIntro } from "@/components/SiteShell";
import { destinations, imageUrls } from "@/lib/siteData";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Kenya Destinations",
  "description": "Destination guides for Nairobi, Maasai Mara, Amboseli, Coast, Rift Valley and Northern Kenya. Access, seasons, and programme relevance.",
  "url": "https://67tours.co.ke/destinations",
  "publisher": {
    "@type": "TravelAgency",
    "name": "67 Tours & Travel",
    "url": "https://67tours.co.ke"
  }
};

const programmeDestinations = {
  church: [
    { name: "Rift Valley retreat centres", href: "/destinations/naivasha-nakuru", description: "Naivasha, Nakuru, and the wider Rift Valley offer numerous retreat centres with meeting spaces, accommodation for groups, and environments suitable for reflection and fellowship." },
    { name: "Coastal prayer and retreat venues", href: "/destinations/coast-watamu", description: "Mombasa, Malindi, and Watamu provide venues for church retreats with a different environment. The longer road journey or flight needs to be factored into the plan." },
    { name: "Western Kenya mission fields", href: "/destinations/kakamega", description: "Kisumu, Kakamega, and surrounding regions are common destinations for mission trips and outreach work with local church connections." },
    { name: "Mount Kenya region", href: "/destinations/nairobi", description: "Retreat centres around Mount Kenya and Nanyuki offer cooler climates and mountain environments suitable for leadership retreats and spiritual gatherings." },
  ],
  chama: [
    { name: "Rift Valley investment sites", href: "/destinations/naivasha-nakuru", description: "Naivasha's flower farms, geothermal projects, and agricultural enterprises; Nakuru's manufacturing and processing industries for educational tours." },
    { name: "Coastal business and leisure", href: "/destinations/coast-watamu", description: "Mombasa's port facilities and coastal businesses provide learning opportunities, while resorts offer venues for strategic planning retreats." },
    { name: "Western Kenya agriculture", href: "/destinations/kakamega", description: "Kisumu, Kakamega, and surrounding agricultural regions offer visits to successful farms, cooperatives, and agricultural projects." },
    { name: "Central Kenya enterprises", href: "/destinations/nairobi", description: "Nairobi, Kiambu, and surrounding regions have manufacturing, real estate, and business enterprises for educational visits." },
  ],
  corporate: [
    { name: "Naivasha team-building venues", href: "/destinations/naivasha-nakuru", description: "Naivasha has numerous lodges and resorts with dedicated team-building facilities, meeting spaces, and environments that work well for corporate groups." },
    { name: "Nakuru corporate retreats", href: "/destinations/naivasha-nakuru", description: "Nakuru offers venues suitable for strategic planning retreats, leadership meetings, and team-building activities." },
    { name: "Coastal conference venues", href: "/destinations/coast-watamu", description: "Mombasa and the coast have hotels and resorts with conference facilities for larger corporate events and incentive travel." },
    { name: "Mount Kenya region retreats", href: "/destinations/nairobi", description: "The Mount Kenya region and Nanyuki offer cooler climates and environments suitable for focused strategic planning and leadership retreats." },
  ],
  education: [
    { name: "Nairobi", href: "/destinations/nairobi", description: "Museums, urban systems, conservation organisations and the practical starting point for most group movements." },
    { name: "Naivasha & Nakuru", href: "/destinations/naivasha-nakuru", description: "Rift Valley geography, freshwater ecology, birdlife and manageable links between learning sites." },
    { name: "Amboseli", href: "/destinations/amboseli", description: "Wildlife, water pressure, pastoral livelihoods and conservation questions in a compact field setting." },
    { name: "Coast / Watamu", href: "/destinations/coast-watamu", description: "Marine systems, mangroves, coastal communities and field lessons that work across several age groups." },
    { name: "Kakamega & Western Kenya", href: "/destinations/kakamega", description: "Forest ecology, community context and a different operating rhythm from the main safari circuit." },
  ],
  ngo: [
    { name: "Northern Kenya", href: "/destinations/northern-kenya", description: "Longer road legs, limited services and route plans that need realistic fuel, rest and communication allowances." },
    { name: "Turkana routes", href: "/destinations/northern-kenya", description: "Remote access, heat, road conditions and site sequencing need to be considered before vehicles are assigned." },
    { name: "Rift Valley corridor", href: "/destinations/naivasha-nakuru", description: "Useful for linking Nairobi with Nakuru, Naivasha, Baringo and onward programme locations." },
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
  { destination: "Nairobi", bestSeason: "Year-round", accessNotes: "Always accessible", programmeFit: "Church, Chama, Corporate, Education, NGO hub" },
  { destination: "Maasai Mara", bestSeason: "Jun–Oct, Jan–Feb", accessNotes: "Road access varies by rain", programmeFit: "Safari, some education" },
  { destination: "Amboseli", bestSeason: "Jun–Oct, Jan–Feb", accessNotes: "Road access varies by rain", programmeFit: "Safari, education" },
  { destination: "Naivasha/Nakuru", bestSeason: "Year-round", accessNotes: "Always accessible", programmeFit: "Church, Chama, Corporate, Education, transit" },
  { destination: "Turkana", bestSeason: "Dry seasons only", accessNotes: "Remote, requires planning", programmeFit: "NGO field work" },
  { destination: "Coast", bestSeason: "Jan–Mar, Jul–Oct", accessNotes: "Avoid rough sea seasons", programmeFit: "Church, Chama, Corporate, Education, leisure" },
  { destination: "Kakamega", bestSeason: "Year-round, avoid heavy rain", accessNotes: "Forest access", programmeFit: "Church, Chama, Education, community work" },
];

export default function Destinations() {
  return (
    <>
      <SEO
        title="Kenya Destinations | 67 Tours & Travel"
        description="Destination guides for Nairobi, Maasai Mara, Amboseli, Coast, Rift Valley and Northern Kenya. Access, seasons, and programme relevance."
        canonical="https://67tours.co.ke/destinations"
        structuredData={structuredData}
      />
      <PageHeader
        eyebrow="DESTINATIONS / KENYA"
        title="The places where programmes and routes become real."
        intro="These are the regions and sites we work with regularly for church groups, chamas, corporate offices, schools, NGOs, safari routes and coastal stays. Each has access considerations, seasonal factors, and programme relevance that shape how we plan movement."
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Programme fit" number="01" />
          <p className="page-rail__note">The right destination depends on the learning or programme objective, the group, the season and the amount of movement the day can carry.</p>
        </aside>
        <div className="page-intro__body">
          <p>We do not treat destinations as a checklist. Each place we work with has specific access requirements, seasonal constraints, and programme relevance. The route is shaped around what the group needs to achieve, not how many stops can be added to an itinerary.</p>
          <p>Below, destinations are organised by programme type. This reflects how we actually plan: church groups need venues that support worship and fellowship, chamas need sites that deliver learning and value, corporate groups need facilities that support business objectives, education groups need sites that support learning objectives, NGO programmes need corridors that work for field access, and safari and coast groups need routes that respect timing and conditions.</p>
        </div>
      </section>

      <section className="destinations-by-type container">
        <div className="route-section__header">
          <RouteTick label="Church & Religious Group Destinations" number="02" />
          <div>
            <h2>Places where church groups actually go.</h2>
            <p>Locations Kenyan churches regularly use for retreats, conferences, mission work, and spiritual gatherings.</p>
          </div>
        </div>
        <div className="route-list">
          {programmeDestinations.church.map((dest) => (
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
          <RouteTick label="Chama & Investment Group Destinations" number="03" />
          <div>
            <h2>Places where Kenyan investment groups actually go.</h2>
            <p>Destinations that serve the specific needs of chamas: learning, networking, strategic planning, and member appreciation.</p>
          </div>
        </div>
        <div className="route-list">
          {programmeDestinations.chama.map((dest) => (
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
          <RouteTick label="Corporate & Office Destinations" number="04" />
          <div>
            <h2>Places where Kenyan companies actually go.</h2>
            <p>Destinations that serve the specific needs of corporate groups: team-building facilities, meeting venues, and environments that support business objectives.</p>
          </div>
        </div>
        <div className="route-list">
          {programmeDestinations.corporate.map((dest) => (
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
          <RouteTick label="Schools & Education Destinations" number="05" />
          <div>
            <h2>Destinations with a reason to be there.</h2>
            <p>Common building blocks for study programmes, selected according to the question the group needs to explore.</p>
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
          <RouteTick label="NGO Field Programme Corridors" number="06" />
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
          <RouteTick label="Safari & Coast Destinations" number="07" />
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
          <RouteTick label="Seasonal Planning" number="08" />
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
        <RouteTick label="Next step" number="09" />
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
