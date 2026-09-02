// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Watamu Coast Guide | Marine & Education | 67 Tours",
  description: "Watamu marine park, coastal education, mangrove ecosystems, and practical planning for coastal programmes and leisure travel for church groups, chamas, corporate groups, schools, and NGOs.",
  keywords: "Kenya Coast, Watamu, marine systems, mangroves, coastal education, beach holidays, Watamu travel, church retreats Watamu, chama tours coast, corporate travel coast, education tours coast"
};

export default function DestinationCoast() {
  return (
    <>
      <PageHeader 
        eyebrow="DESTINATION / COAST / WATAMU" 
        title="Marine systems, mangroves, and coastal communities." 
        intro="The Kenyan coast, particularly Watamu and its protected marine area, offers education and leisure groups access to marine ecosystems, coastal communities, and a different operating rhythm from the inland safari circuits." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is 7–8 hours from Nairobi (long road day). Air transfer is 1 hour from Wilson Airport to Malindi Airport, then 30 minutes to Watamu.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer takes 7–8 hours from Nairobi (long road day). Air transfer is 1 hour from Wilson Airport to Malindi Airport, then 30 minutes to Watamu. Road from Mombasa is 1.5–2 hours north.</p>
          <p>Movement Within the Coast Region: Heat and humidity affect activity timing—plan for early morning and late afternoon. Tides affect marine activities and beach access. Traffic between Malindi, Watamu, and Mombasa can be unpredictable.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What the coast offers different programme types.</h2>
              <p>The coast serves both education programmes with marine objectives and leisure groups seeking rest and cultural experiences.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Church & Religious Groups</h3>
                <p>Coastal retreat and prayer venues. Spiritual gatherings with ocean and beach setting. Fellowship opportunities in a different environment from Nairobi and upcountry.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For Chamas & Investment Groups</h3>
                <p>Strategic planning retreats at coastal resorts. Member appreciation trips with beach and marine activities. Networking in a relaxed coastal environment.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>03</strong>
              <div>
                <h3>For Corporate & Office Groups</h3>
                <p>Incentive travel and end-of-year celebrations at coastal resorts. Conference facilities with beach access. Team-building activities that combine business with coastal leisure.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>04</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Watamu Marine National Park—coral reefs, fish species, turtle conservation. Mangrove ecosystems and coastal deforestation questions. Coastal community livelihoods (fishing, tourism). Swahili culture and history (nearby Gede ruins).</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>05</strong>
              <div>
                <h3>For NGO Programmes</h3>
                <p>Marine conservation programmes and community-based coastal management. Turtle conservation projects and mangrove restoration. Coastal community development initiatives.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>06</strong>
              <div>
                <h3>For Leisure Groups</h3>
                <p>Beach time and water activities. Marine park snorkelling and diving. Cultural visits and Swahili cuisine. Rest and recovery after safari segments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for coastal programmes.</h2>
            <p>Marine activities best at low tide. Heat is highest 11 AM–3 PM—plan indoor or shaded activities.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Marine activities best at low tide</h3>
              <p>Marine activities best at low tide. Heat is highest 11 AM–3 PM—plan indoor or shaded activities. Monsoon seasons affect sea conditions and marine visibility.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Marine park visits need advance booking for groups</h3>
              <p>Marine park visits need advance booking for groups. Boat capacity limits for snorkelling/diving. Accommodation ranges from small lodges to larger resorts.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Dry season: calmer seas, better marine visibility</h3>
              <p>Dry season (January–March, July–October): calmer seas, better marine visibility. Rainy seasons (April–June, November–December): rougher seas, some activities limited.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from the coast to other destinations.</h2>
            <p>The coast connects to Nairobi for departures and to safari destinations for combined itineraries.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>1 hour flight</span>
            <h3>To Nairobi</h3>
            <p>Fly to Nairobi for international departures or city programmes.</p>
          </div>
          <div className="route-list__row">
            <span>2–3 hours flight</span>
            <h3>To Maasai Mara or other safari destinations</h3>
            <p>Fly to safari destinations with connections in Nairobi.</p>
          </div>
          <div className="route-list__row">
            <span>1.5–2 hours road</span>
            <h3>To Mombasa</h3>
            <p>Road to Mombasa for international departures or extended coastal exploration.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include the coast in your Kenya programme.</h2>
            <p>Share your dates, group size, and whether this is a marine education focus or leisure travel with cultural elements.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
