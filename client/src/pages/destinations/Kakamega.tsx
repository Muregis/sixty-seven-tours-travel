// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Kakamega Guide | Western Kenya | 67 Tours",
  description: "Kakamega forest ecology, western Kenya community context, and education programme planning for forest and community studies.",
  keywords: "Kakamega, Kakamega Forest, Western Kenya, forest ecology, community context, education tours, field programmes"
};

export default function DestinationKakamega() {
  return (
    <>
      <PageHeader 
        eyebrow="DESTINATION / KAKAMEGA & WESTERN KENYA" 
        title="Forest ecology, community context, and a different operating rhythm from the main safari circuit." 
        intro="Kakamega Forest is Kenya's only tropical rainforest, offering a different ecosystem from the savanna parks. Western Kenya also provides access to community-based programmes and a different cultural context from the Maasai-dominated areas." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is 5–6 hours from Nairobi via Nakuru or Kisumu. The operating rhythm is different from the main safari circuit.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer takes 5–6 hours from Nairobi via Nakuru or Kisumu. Kisumu has an airport with domestic connections from Nairobi (45 minutes flight).</p>
          <p>Movement Within the Region: Kakamega Forest is accessible by road from Kakamega town. Community sites around Kisumu and western Kenya require local coordination. The region is more densely populated than the northern safari areas.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Kakamega & Western Kenya offer different programme types.</h2>
              <p>The region serves education groups with ecology objectives and NGO programmes with community focus.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Kakamega Forest: Tropical rainforest ecology, birdlife (including species not found elsewhere in Kenya), forest conservation. Western Kenya: Community-based programmes, agricultural systems, Lake Victoria context.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For NGO Programmes</h3>
                <p>Community development programmes around Kisumu and Kakamega. Health and education field sites. Lake Victoria basin programmes. Agricultural and livelihood projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Western Kenya.</h2>
            <p>Rainfall is higher than in other regions—plan for wet conditions. Forest access requires local guides.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Rainfall is higher than in other regions</h3>
              <p>Rainfall is higher than in other regions—plan for wet conditions and potential delays. Forest access requires local guides. Early morning is best for bird watching in Kakamega Forest.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Forest access manageable for 15–20 students</h3>
              <p>Forest access is manageable for 15–20 students with local guides. Community visits require advance coordination with local organisations. Accommodation options are more limited than in main safari areas.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Avoid heavy rain seasons</h3>
              <p>Avoid heavy rain seasons (April–May, November–December) for forest access. Dry seasons (January–February, June–October) offer better conditions for field work and community visits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Western Kenya to other destinations.</h2>
            <p>The region connects to Nairobi and to northern Kenya for multi-site programmes.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>45 minutes flight</span>
            <h3>To Nairobi (from Kisumu)</h3>
            <p>Fly from Kisumu to Nairobi for international departures or connections to other destinations.</p>
          </div>
          <div className="route-list__row">
            <span>5–6 hours road</span>
            <h3>To Nairobi</h3>
            <p>Road connection back to Nairobi via Nakuru for groups combining Rift Valley and western Kenya.</p>
          </div>
          <div className="route-list__row">
            <span>5–6 hours road</span>
            <h3>To Northern Kenya</h3>
            <p>Road connection for NGO programmes combining western and northern field sites.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Kakamega & Western Kenya in your programme.</h2>
            <p>Share your dates, group size, and whether this is a forest ecology focus or community-based programme.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
