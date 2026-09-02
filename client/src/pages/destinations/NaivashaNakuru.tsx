// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Naivasha & Nakuru Guide | Rift Valley | 67 Tours",
  description: "Rift Valley destinations: freshwater ecology, geothermal energy, birdlife, and practical access for church groups, chamas, corporate groups, education groups, NGOs, and safari travellers.",
  keywords: "Naivasha, Nakuru, Rift Valley, freshwater ecology, birdlife, church retreats Naivasha, chama tours Naivasha, corporate team building Naivasha, education tours Naivasha, NGO logistics Naivasha"
};

export default function DestinationNaivashaNakuru() {
  return (
    <>
      <PageHeader 
        eyebrow="DESTINATION / NAIVASHA & NAKURU" 
        title="Rift Valley geography, freshwater ecology, and manageable links between learning sites." 
        intro="Naivasha and Nakuru sit in Kenya's Rift Valley, offering freshwater systems, birdlife, and accessible field sites that work well for education groups and as transit points for wider Kenya itineraries." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Road access is 2–3 hours from Nairobi. Both destinations are easily linked in a single day or overnight stop.</p>
        </aside>
        <div className="page-intro__body">
          <p>Getting There: Road transfer takes 2–3 hours from Nairobi via the Rift Valley escarpment. The route offers scenic views and is generally reliable year-round.</p>
          <p>Movement Between Sites: Naivasha and Nakuru are 1–1.5 hours apart by road. This makes them practical to combine in a single programme segment. Both serve as transit hubs for routes toward western Kenya or back to Nairobi.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Naivasha & Nakuru offer different programme types.</h2>
              <p>The Rift Valley sites serve education groups with ecology objectives and safari groups seeking freshwater wildlife.</p>
            </div>
          </div>
          <div className="checklist">
            <div className="checklist__item">
              <strong>01</strong>
              <div>
                <h3>For Church & Religious Groups</h3>
                <p>Rift Valley retreat centres with meeting spaces and accommodation for groups. Environments suitable for reflection, fellowship, and spiritual gatherings. Manageable road access from Nairobi for large groups.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>02</strong>
              <div>
                <h3>For Chamas & Investment Groups</h3>
                <p>Naivasha's flower farms, geothermal projects, and agricultural enterprises for educational visits. Nakuru's manufacturing and processing industries. Venues for strategic planning retreats and member appreciation.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>03</strong>
              <div>
                <h3>For Corporate & Office Groups</h3>
                <p>Naivasha lodges and resorts with team-building facilities and meeting spaces. Nakuru venues for strategic planning retreats and leadership meetings. Environments that support focused work and networking.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>04</strong>
              <div>
                <h3>For Education Groups</h3>
                <p>Naivasha: Freshwater ecology, geothermal energy (Ol Karia), horticulture and flower farms, Hell's Gate National Park (walking safaris). Nakuru: Lake Nakuru National Park (flamingos, rhino sanctuary), Rift Valley geology, urban-rural interface.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>05</strong>
              <div>
                <h3>For NGO Programmes</h3>
                <p>Rift Valley corridor for linking Nairobi with Nakuru, Naivasha, Baringo and onward programme locations. Community development programmes and field sites. Agricultural and environmental projects.</p>
              </div>
            </div>
            <div className="checklist__item">
              <strong>06</strong>
              <div>
                <h3>For Safari Groups</h3>
                <p>Lake Nakuru National Park: Rhino sanctuary, flamingo populations, diverse wildlife. Naivasha: Boat rides on Lake Naivasha, Crescent Island walking safaris, Hell's Gate wildlife viewing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Rift Valley sites.</h2>
            <p>Morning activities work best for wildlife viewing. Heat increases midday—plan indoor or shaded activities.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Morning activities best for wildlife viewing</h3>
              <p>Morning activities work best for wildlife viewing. Heat increases midday—plan indoor or shaded activities. Boat rides on Lake Naivasha are best in calm morning conditions.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Most sites accommodate 15–25 students</h3>
              <p>Most sites accommodate 15–25 students comfortably. Boat capacity limits apply for Lake Naivasha. Park entry fees apply for Hell's Gate and Lake Nakuru National Park.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Year-round access</h3>
              <p>Year-round access. Water levels in Lake Naivasha and Lake Nakuru vary seasonally—this affects flamingo concentrations and boat access points.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Naivasha & Nakuru to other destinations.</h2>
            <p>These sites connect Nairobi to western Kenya and serve as useful transit points.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>2–3 hours</span>
            <h3>To Nairobi</h3>
            <p>Direct road connection back to Nairobi for international departures or city programmes.</p>
          </div>
          <div className="route-list__row">
            <span>4–5 hours</span>
            <h3>To Maasai Mara</h3>
            <p>Road connection for groups combining Rift Valley with Mara wildlife viewing.</p>
          </div>
          <div className="route-list__row">
            <span>3–4 hours</span>
            <h3>To Kakamega / Western Kenya</h3>
            <p>Connection to western Kenya for forest ecology and community programmes.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Naivasha & Nakuru in your Kenya programme.</h2>
            <p>Share your dates, group size, and whether this is an ecology focus or transit segment.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
