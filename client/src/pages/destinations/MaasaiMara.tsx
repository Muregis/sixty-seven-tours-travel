// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Maasai Mara Guide | Safari & Education | 67 Tours",
  description: "Maasai Mara safari planning: wildlife viewing, migration timing, access options, and education programme relevance for groups.",
  keywords: "Maasai Mara, Kenya safari, wildlife reserve, game drives, education tours Maasai Mara, safari planning"
};

export default function DestinationMaasaiMara() {
  return (
    <>
      <PageHeader 
        eyebrow="DESTINATION / MAASAI MARA" 
        title="Wildlife density, but movement planning matters." 
        intro="The Maasai Mara is Kenya's most visited safari destination for good reason—wildlife concentrations are high, and the open landscape makes for reliable viewing. But access, timing, and park rhythm need to be planned, especially for groups." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is 5–6 hours from Nairobi via Narok. Air transfer is 1 hour from Wilson Airport. Road access varies by rain.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer takes 5–6 hours from Nairobi via Narok. Air transfer is 1 hour from Wilson Airport to several airstrips (Keekorok, Ol Kiombo, etc.). Road access is affected by rain—the Narok road can become challenging in wet seasons.</p>
          <p>Movement Within the Reserve: Game drives follow established tracks. Transfer times between gates and camps vary widely. Night driving is restricted.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Maasai Mara offers different programme types.</h2>
              <p>The reserve serves both safari groups and education programmes with specific learning objectives.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Safari Groups</h3>
                <p>Big Five viewing (lion, leopard, elephant, buffalo, rhino). Great Migration (July–October for river crossings). Maasai community visits and cultural context. Hot air balloon operations (weather-dependent).</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Wildlife ecology and behaviour observation. Conservation and human-wildlife conflict discussions. Community-based conservation models. Field research sites (some universities have ongoing projects).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Maasai Mara.</h2>
            <p>Best game drives are early morning and late afternoon. Midday is quiet—animals rest, vehicles are fewer.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Best game drives: early morning and late afternoon</h3>
              <p>Best game drives: early morning (6–8 AM) and late afternoon (4–6 PM). Midday is quiet—animals rest, vehicles are fewer. Migration crossings are unpredictable but generally peak July–October.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Safari vehicles typically seat 4–6 passengers</h3>
              <p>Safari vehicles typically seat 4–6 passengers plus driver. Larger groups need multiple vehicles with coordinated planning. Some camps have capacity limits—book early.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Dry season: dusty but reliable wildlife viewing</h3>
              <p>Dry season (June–October, January–February): best wildlife viewing, dusty conditions. Green season (November–December, March–May): fewer crowds, lush landscapes, some roads challenging.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Maasai Mara to other destinations.</h2>
            <p>Understanding connections helps plan wider Kenya itineraries.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>4–5 hours</span>
            <h3>To Nakuru</h3>
            <p>Road connection through the Rift Valley for groups combining safari with freshwater ecology.</p>
          </div>
          <div className="route-list__row">
            <span>3–4 hours</span>
            <h3>To Naivasha</h3>
            <p>Shorter Rift Valley connection for groups moving toward Nairobi or western Kenya.</p>
          </div>
          <div className="route-list__row">
            <span>2–3 hours flight</span>
            <h3>To coastal destinations</h3>
            <p>Fly to coastal destinations with connections in Nairobi.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Maasai Mara in your Kenya programme.</h2>
            <p>Share your dates, group size, and whether this is a safari focus or education programme with wildlife objectives.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
