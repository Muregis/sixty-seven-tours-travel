// Design note: Field Notes Modernism — destination pages are route-led, not gallery-led. Access, programme relevance, and nearby connections are the structure.

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";
import { destinationCoords, buildPlaceSchema } from "@/lib/schema";

export default function DestinationNairobi() {
  return (
    <>
      <SEO
        title="Nairobi Guide | Kenya Programme Hub | 67 Tours"
        description="Nairobi as church, chama, corporate, education and NGO hub: museums, conservation organisations, urban systems, retreat centres, and practical starting point for Kenya programmes."
        canonical="https://67tours.co.ke/destinations/nairobi"
        structuredData={buildPlaceSchema(destinationCoords['nairobi'])}
      />
      <PageHeader 
        eyebrow="DESTINATION / NAIROBI" 
        title="The operating hub for most Kenya programmes." 
        intro="Nairobi is where church groups arrive, where chamas and corporate offices mobilise, where education groups start their study tours, and where NGO teams prepare for field movement. It is also a destination in its own right for urban systems, conservation organisations, retreat planning, and cultural context." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Access & Movement" number="01" />
          <p className="page-rail__note">Nairobi is the practical starting point for most Kenya programmes. Plan movement around traffic patterns and hotel zones.</p>
        </aside>
        <div className="page-intro__body">
          <p>Jomo Kenyatta International Airport (NBO) is the main international gateway. Wilson Airport (WIL) handles domestic flights and charter operations. Road connections to all major safari circuits originate from Nairobi.</p>
          <p>Movement within Nairobi requires planning around traffic patterns, which peak 7–9 AM and 4–7 PM. Hotel zones vary by purpose: city centre for business, Westlands for NGO hubs, Karen for conservation access. Airport transfers need to account for arrival time, group size, and luggage.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header">
            <RouteTick label="Programme Relevance" number="02" />
            <div>
              <h2>What Nairobi offers different programme types.</h2>
              <p>The city is not just a transit point—it has specific relevance for education, NGO, and leisure groups.</p>
            </div>
          </div>
            <div className="checklist">
              <div className="checklist__item">
                <strong>01</strong>
                <div>
                  <h3>For Church & Religious Groups</h3>
                  <p>Retreat and conference venues around Nairobi and in the Rift Valley. Planning centres for mission trips and pilgrimages. Coordination for large group movements to coastal and upcountry destinations.</p>
                </div>
              </div>
              <div className="checklist__item">
                <strong>02</strong>
                <div>
                  <h3>For Chamas & Investment Groups</h3>
                  <p>Business enterprises, manufacturing sites, and agricultural projects for educational visits. Venues for strategic planning retreats and member appreciation trips. Coordination for multi-site investment tours.</p>
                </div>
              </div>
              <div className="checklist__item">
                <strong>03</strong>
                <div>
                  <h3>For Corporate & Office Groups</h3>
                  <p>Conference facilities and hotels for corporate events, training sessions, and meetings. Venues for team-building activities and strategy retreats. Coordination for incentive travel and end-of-year celebrations.</p>
                </div>
              </div>
              <div className="checklist__item">
                <strong>04</strong>
                <div>
                  <h3>For Education Groups</h3>
                  <p>Museums: National Museum, Snake Park, Karen Blixen Museum. Conservation organisations: WWF-Kenya, African Wildlife Foundation, local conservation NGOs. Urban systems: Market visits, industrial tours, governance institutions. Starting point for Rift Valley and coastal routes.</p>
                </div>
              </div>
              <div className="checklist__item">
                <strong>05</strong>
                <div>
                  <h3>For NGO Programmes</h3>
                  <p>UN and agency offices. NGO headquarters and coordination hubs. Equipment procurement and logistics bases. Medical facilities and evacuation points.</p>
                </div>
              </div>
              <div className="checklist__item">
                <strong>06</strong>
                <div>
                  <h3>For Safari & Coast Groups</h3>
                  <p>Transit point for safari departures. City orientation before or after field time. Shopping for last-minute supplies.</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Site-Specific Considerations" number="03" />
          <div>
            <h2>Timing and planning for Nairobi sites.</h2>
            <p>Morning visits to museums and organisations work best. Allow 2–3 hours per major site. Traffic peaks affect timing—plan around these.</p>
          </div>
        </div>
        <div className="checklist">
          <div className="checklist__item">
            <strong>Timing</strong>
            <div>
              <h3>Morning visits work best</h3>
              <p>Morning visits to museums and organisations work best. Allow 2–3 hours per major site. Traffic peaks 7–9 AM and 4–7 PM—plan around these.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Group Size</strong>
            <div>
              <h3>Most sites accommodate 15–25 students</h3>
              <p>Most sites accommodate 15–25 students comfortably. Larger groups may need staggered visits. Some organisations require advance booking.</p>
            </div>
          </div>
          <div className="checklist__item">
            <strong>Seasonal Factors</strong>
            <div>
              <h3>Year-round access</h3>
              <p>Year-round access. April–May and November–December have heavier rain—plan indoor alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header">
          <RouteTick label="Nearby Connections" number="04" />
          <div>
            <h2>Routes from Nairobi to other destinations.</h2>
            <p>Understanding travel times helps plan the wider Kenya route.</p>
          </div>
        </div>
        <div className="route-list">
          <div className="route-list__row">
            <span>2–3 hours</span>
            <h3>To Naivasha</h3>
            <p>Manageable Rift Valley start for groups combining city time with freshwater ecology and birdlife.</p>
          </div>
          <div className="route-list__row">
            <span>1 hour flight</span>
            <h3>To Maasai Mara</h3>
            <p>Air transfer reduces road time significantly for groups with limited time.</p>
          </div>
          <div className="route-list__row">
            <span>1 hour flight</span>
            <h3>To coastal destinations</h3>
            <p>Direct flights to Mombasa, Malindi, and other coastal airports.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Include Nairobi in your Kenya programme.</h2>
            <p>Share your dates, group size, and whether Nairobi is a starting point, transit hub, or programme destination.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
