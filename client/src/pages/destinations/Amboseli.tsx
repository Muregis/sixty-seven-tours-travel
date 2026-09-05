// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";
import { destinationCoords, buildPlaceSchema } from "@/lib/schema";

export default function DestinationAmboseli() {
  return (
    <>
      <SEO
        title="Amboseli Guide | Wildlife & Kilimanjaro | 67 Tours"
        description="Amboseli safari and education: elephant populations, Kilimanjaro views, compact park size, and practical route planning for church groups, chamas, corporate groups, schools, and NGOs."
        canonical="https://67tours.co.ke/destinations/amboseli"
        structuredData={buildPlaceSchema(destinationCoords['amboseli'])}
      />
      <PageHeader 
        eyebrow="DESTINATION / AMBOSELI" 
        title="Compact wildlife setting with Mount Kilimanjaro views." 
        intro="Amboseli offers a concentrated safari experience—elephant populations are dense, the landscape is open, and Mount Kilimanjaro provides a dramatic backdrop when weather permits. The park's size makes it manageable for shorter safari segments." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is 4–5 hours from Nairobi via Emali. Air transfer is 45 minutes from Wilson Airport. Road access is generally reliable year-round.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer takes 4–5 hours from Nairobi via Emali. Air transfer is 45 minutes from Wilson Airport to Amboseli airstrip. Road access is generally reliable year-round.</p>
          <p>Movement Within the Park: Compact size—game drives cover the park in 2–3 hours. Dust can be significant in dry season. Swamp areas require careful route planning.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Amboseli offers different programme types.</h2>
              <p>The park serves both safari groups and education programmes with specific conservation and ecology objectives.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Church & Religious Groups</h3>
                <p>Retreat and reflection opportunities in a natural setting. Group accommodation and meeting spaces at lodges. Spiritual gatherings with wildlife and landscape as backdrop.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For Chamas & Investment Groups</h3>
                <p>Member appreciation trips with wildlife viewing. Networking and fellowship in a unique environment. Leadership retreats with a different backdrop from usual meeting venues.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>03</strong>
              <div>
                <h3>For Corporate & Office Groups</h3>
                <p>Incentive travel and team-building in a safari setting. Corporate retreats with a mix of wildlife activities and meeting facilities. Employee appreciation trips that feel distinct from standard options.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>04</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Elephant behaviour and conservation (Amboseli Elephant Research Project context). Human-wildlife conflict around park boundaries. Water and land use questions. Community conservation models.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>05</strong>
              <div>
                <h3>For NGO Programmes</h3>
                <p>Conservation programme visits and community meetings. Wildlife research sites and monitoring locations. Links to community-based organisations around the park.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>06</strong>
              <div>
                <h3>For Safari Groups</h3>
                <p>Large elephant herds—Amboseli is known for elephant research. Kilimanjaro views (weather-dependent, best early morning). Birdlife around the swamps. Maasai community interaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Amboseli.</h2>
            <p>Kilimanjaro views are most reliable early morning. Elephants are most active in cooler hours.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Kilimanjaro views most reliable early morning</h3>
              <p>Kilimanjaro views are most reliable early morning. Elephants are most active in cooler hours. Dust is worst midday in dry season.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Similar vehicle constraints to Maasai Mara</h3>
              <p>Similar vehicle constraints to Maasai Mara. Limited accommodation options—book early for groups. Some lodges have educational facilities.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Dry season: dusty but reliable wildlife viewing</h3>
              <p>Dry season: dusty but reliable wildlife viewing. Wet season: green landscapes, Kilimanjaro more visible, some roads muddy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Amboseli to other destinations.</h2>
            <p>Amboseli can connect to both Nairobi and the Tsavo region for extended itineraries.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>4–5 hours</span>
            <h3>To Nairobi</h3>
            <p>Direct road connection back to Nairobi for international departures or city programmes.</p>
          </div>
          <div className="route-list__row">
            <span>2–3 hours</span>
            <h3>To Tsavo West</h3>
            <p>Connection to Tsavo West for extended itineraries covering multiple parks.</p>
          </div>
          <div className="route-list__row">
            <span>1–2 hours flight</span>
            <h3>To coastal destinations</h3>
            <p>Fly to coastal destinations with connections in Nairobi.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Amboseli in your Kenya programme.</h2>
            <p>Share your dates, group size, and whether this is a safari focus or education programme with conservation objectives.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
