// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";
import { destinationCoords, buildPlaceSchema } from "@/lib/schema";

export default function DestinationNorthernKenya() {
  return (
    <>
      <SEO
        title="Northern Kenya Guide | Field Logistics | 67 Tours"
        description="Northern Kenya and Turkana field logistics: remote access, vehicle planning, fuel and communication for church groups, chamas, corporate groups, schools, NGOs, and safari travellers."
        canonical="https://67tours.co.ke/destinations/northern-kenya"
        structuredData={buildPlaceSchema(destinationCoords['northern-kenya'])}
      />
      <PageHeader 
        eyebrow="DESTINATION / NORTHERN KENYA" 
        title="Longer road legs, limited services, and route plans that need realistic allowances." 
        intro="Northern Kenya—including Turkana, Samburu, and the northern frontier—requires different planning from the main safari circuits. Access is harder, services are fewer, and contingency planning is essential." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is long and requires realistic fuel, rest, and communication allowances. Air transfer is recommended for most groups.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer to Turkana can take 8–12 hours depending on the route and conditions. Air transfer is 1–2 hours from Nairobi to Lodwar or other northern airstrips. Samburu is 5–6 hours by road from Nairobi.</p>
          <p>Movement Within the Region: Road conditions vary significantly—some routes are graded, others are rough. Fuel stations are sparse. Communication coverage is patchy. Vehicles need to be appropriate for the conditions and carry spares.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Northern Kenya offers different programme types.</h2>
              <p>The region is primarily relevant for NGO field programmes and specialised safari groups.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Church & Religious Groups</h3>
                <p>Mission trip and outreach destinations with local community connections. Pilgrimage sites with cultural and spiritual significance. Venues for reflection in remote and less-developed settings.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For Chamas & Investment Groups</h3>
                <p>Educational visits to agricultural and pastoral projects in Turkana and northern Kenya. Learning about alternative livelihoods and climate adaptation. Unique member appreciation trips for groups seeking different experiences.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>03</strong>
              <div>
                <h3>For Corporate & Office Groups</h3>
                <p>Specialised incentive travel and team-building in remote settings. Corporate social responsibility programme visits to northern Kenya communities. Leadership retreats in distinctive environments.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>04</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Pastoral livelihoods and climate adaptation studies. Turkana culture and community context. Geological and geographical features of the northern frontier. Field research in remote settings.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>05</strong>
              <div>
                <h3>For NGO Programmes</h3>
                <p>Turkana: Development programmes, pastoral livelihoods, water access, climate adaptation research. Northern frontier: Remote field sites, cross-border programmes, security-sensitive areas (requires additional planning).</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>06</strong>
              <div>
                <h3>For Safari Groups</h3>
                <p>Samburu: Different wildlife species (Grevy's zebra, reticulated giraffe, Somali ostrich), drier landscape, cultural visits to Samburu communities. Specialised northern circuits for experienced travellers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Northern Kenya.</h2>
            <p>Heat is a major factor—plan activities for early morning and late afternoon. Dry season access is more reliable.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Heat is a major factor</h3>
              <p>Heat is a major factor—plan activities for early morning and late afternoon. Midday temperatures can exceed 40°C in some areas. Dry season access is more reliable; wet season roads can become impassable.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Limited accommodation options</h3>
              <p>Limited accommodation options in remote areas—book early. Vehicles must be appropriate for conditions and carry fuel, water, and spares. Medical support is limited.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Dry season only for most remote routes</h3>
              <p>Dry season only for most remote routes. Wet season (April–May, November–December) makes many roads impassable. Some areas require additional permits or security coordination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Northern Kenya to other destinations.</h2>
            <p>Connections are limited—most routes return through Nairobi or connect to western Kenya.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>1–2 hours flight</span>
            <h3>To Nairobi</h3>
            <p>Fly to Nairobi for international departures or connections to other destinations.</p>
          </div>
          <div className="route-list__row">
            <span>6–8 hours road</span>
            <h3>To Nakuru / Rift Valley</h3>
            <p>Road connection for groups moving south toward the main safari circuit.</p>
          </div>
          <div className="route-list__row">
            <span>5–6 hours road</span>
            <h3>To Kakamega / Western Kenya</h3>
            <p>Road connection for NGO programmes moving between northern and western field sites.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Northern Kenya in your programme with realistic planning.</h2>
            <p>Share your dates, group size, and specific field sites. We will advise on access requirements and contingency planning.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
