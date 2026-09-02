// Design note: Field Notes Modernism — corporate travel has a business purpose; every element of the trip should support that purpose, reflect well on the organisation, and stay within budget.

import { ArrowUpRight, Check, Building2 } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Corporate Team Building Kenya | 67 Tours",
  description: "Corporate group travel in Kenya: team building, end-of-year celebrations, incentive travel, conference trips and strategy retreats aligned to business purpose.",
  keywords: "Kenya corporate travel, team building Kenya, office retreats, incentive travel, corporate conferences, end-of-year trips, business travel Kenya"
};

const checklist = [
  { title: "Business purpose alignment", text: "Can the travel plan be shaped around the specific business objective (team building, strategy, celebration) rather than generic tourism activities?" },
  { title: "Professional standards", text: "Will the transport, accommodation, and overall experience reflect the professional standards expected by the organisation and its employees?" },
  { title: "Budget accountability", text: "Can the operator provide clear, line-by-line cost breakdowns, work within corporate budget processes, and document expenses appropriately?" },
  { title: "Reliability and contingency", text: "What happens if transport fails, if a venue issue arises, or if the schedule needs to change? Is there a clear response plan?" },
  { title: "Employee consideration", text: "Are dietary needs, accessibility requirements, and the diverse needs of employees planned into the route?" },
  { title: "Policy compliance", text: "Can the travel arrangements align with corporate travel policies, procurement requirements, and any internal approval processes?" },
];

const destinations = [
  { code: "01", name: "Naivasha team-building venues", note: "Naivasha has numerous lodges and resorts with dedicated team-building facilities, meeting spaces, and environments that work well for corporate groups. Road access from Nairobi is manageable for day trips or overnight stays." },
  { code: "02", name: "Nakuru corporate retreats", note: "Nakuru offers venues suitable for strategic planning retreats, leadership meetings, and team-building activities. The distance from Nairobi makes it workable for overnight programmes." },
  { code: "03", name: "Coastal conference venues", note: "Mombasa and the coast have hotels and resorts with conference facilities, making them suitable for larger corporate events, incentive travel, and celebrations that combine business with leisure." },
  { code: "04", name: "Mount Kenya region retreats", note: "The Mount Kenya region and Nanyuki offer cooler climates and environments suitable for focused strategic planning and leadership retreats." },
  { code: "05", name: "Nairobi conference venues", note: "For organisations that prefer to stay in Nairobi, the city has numerous conference facilities and hotels that can host corporate events, training sessions, and meetings." },
];

const faqs = [
  {
    question: "How far in advance should we plan corporate travel?",
    answer: "Most corporate groups benefit from planning 3–6 months ahead. This allows time for budget approval, employee coordination, venue booking, and any necessary preparations. For larger events or peak seasons, earlier planning is advisable."
  },
  {
    question: "Can you work with corporate procurement processes?",
    answer: "Yes. We can provide the documentation, quotes, and information needed for procurement processes, tender requirements, and internal approvals. We are familiar with corporate purchasing procedures."
  },
  {
    question: "What about cost control and budget adherence?",
    answer: "We provide clear pricing upfront and work within the agreed budget. Any changes that would affect costs are communicated with options and implications before proceeding. We aim to avoid surprises."
  },
  {
    question: "Can you handle large corporate groups?",
    answer: "Yes. We work with groups ranging from small teams to entire organisations. Large groups require more coordination, but the operating principles remain the same: clear planning, reliable execution, and professional standards."
  },
  {
    question: "What happens if we need to change plans last minute?",
    answer: "Changes are possible, but they may have cost implications depending on the timing and the suppliers involved. We communicate the implications clearly and help find the best solution. Some changes can be accommodated with minimal impact."
  },
  {
    question: "Can you help with venue selection for specific activities?",
    answer: "Yes. We can suggest venues that match your requirements: team-building facilities, meeting spaces, conference facilities, or specific activities. We consider location, capacity, facilities, and cost in our recommendations."
  }
];

export default function Corporate() {
  return (
    <>
      <PageHeader eyebrow="Capability / 03" title="Corporate and office travel that supports the business objective." intro="You are organising team building, end-of-year celebration, incentive travel, conference attendance, or a company retreat. The travel plan needs to deliver on the business purpose, stay within budget, and reflect well on the organisation. This is not personal leisure travel—it is business travel that must be professional, reliable, and purpose-driven." image={imageUrls.corporate} imageAlt="Corporate team at a team-building session in Naivasha" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The brief" number="01" /><p className="page-rail__note">Corporate travel has a business purpose. Every element of the trip should support that purpose.</p></aside>
        <div className="page-intro__body">
          <p>We work with Kenyan companies, organisations, and offices on group travel that serves business objectives: team building, employee appreciation, strategic planning retreats, conference travel, and incentive programmes. The destination and itinerary must align with what the organisation is trying to achieve.</p>
          <p>Corporate travel requires attention to professionalism, reliability, and accountability. Employees need to know the trip is well-organised, management needs assurance that budget is being used responsibly, and the overall experience should reflect positively on the organisation.</p>
          <h2>Types of corporate travel</h2>
          <h3>Team building</h3>
          <p>Team-building trips need venues with activities that actually build teams, accommodation that supports interaction, and schedules that balance structured activities with relaxation. Rift Valley destinations, coastal venues, and upcountry locations are common choices.</p>
          <h3>End-of-year celebrations</h3>
          <p>Year-end appreciation events need to balance celebration with professionalism. The destination, activities, and overall experience should reward employees while maintaining standards appropriate for the organisation.</p>
          <h3>Strategic planning retreats</h3>
          <p>Leadership and strategy retreats require venues with meeting spaces, environments conducive to focused work, and accommodation that supports both work and networking. These trips often need fewer distractions and more functional facilities.</p>
          <h3>Conference and event travel</h3>
          <p>Travel to attend conferences, trade shows, or industry events requires coordination with event schedules, accommodation near event venues, and transport that aligns with conference timing.</p>
          <h3>Incentive travel</h3>
          <p>Reward trips for high-performing teams or employees need destinations and experiences that feel genuinely rewarding while staying within corporate budget parameters and policy guidelines.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Selection checklist" number="02" /><div><h2>What to test before you choose a travel partner for corporate groups.</h2><p>A useful travel partner should be able to answer these questions without avoiding the accountability question.</p></div></div>
          <div className="checklist">
            {checklist.map((item, index) => <div className="checklist__item" key={item.title}><strong>0{index + 1}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common corporate destinations" number="03" /><div><h2>Places where Kenyan companies actually go.</h2><p>These are destinations that serve the specific needs of corporate groups: team-building facilities, meeting venues, and environments that support business objectives.</p></div></div>
        <div className="route-list">
          {destinations.map((destination) => <div className="route-list__row" key={destination.code}><span>{destination.code}</span><h3>{destination.name}</h3><p>{destination.note}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="photo-break">
        <div className="photo-break__copy"><RouteTick label="Planning for corporate groups" number="04" /><h2>The details that make corporate travel work.</h2><p>Corporate travel has specific requirements that differ from leisure travel. These considerations must be built into the plan from the start.</p></div>
        <div className="photo-break__image"><img src={imageUrls.corporate} alt="Corporate team during a team-building activity" /></div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Corporate travel considerations" number="05" /><div><h2>The operational details that protect the business objective.</h2></div></div>
        <div className="checklist">
          <div className="checklist__item"><strong>01</strong><div><h3>Budget and approval processes</h3><p>Corporate budgets often require multiple approvals and specific documentation. We provide the detailed breakdowns, quotes, and documentation needed for internal approval processes.</p></div></div>
          <div className="checklist__item"><strong>02</strong><div><h3>Professional standards</h3><p>Transport, accommodation, and activities must meet professional standards. This means reliable vehicles, clean and appropriate accommodation, and activities that reflect well on the organisation.</p></div></div>
          <div className="checklist__item"><strong>03</strong><div><h3>Employee needs</h3><p>Dietary requirements, accessibility for employees with mobility needs, religious considerations (prayer facilities, dietary restrictions), and general comfort must be planned for.</p></div></div>
          <div className="checklist__item"><strong>04</strong><div><h3>Schedule and timing</h3><p>Corporate trips often have tight schedules. We plan realistic timing, account for Nairobi traffic, and build in contingency for delays.</p></div></div>
          <div className="checklist__item"><strong>05</strong><div><h3>Team-building effectiveness</h3><p>For team-building trips, we work with venues that have proven team-building programmes and activities, not just generic recreational activities.</p></div></div>
          <div className="checklist__item"><strong>06</strong><div><h3>Documentation and reporting</h3><p>We provide the documentation organisations need: invoices, receipts, itineraries, and any other paperwork required for corporate records and expense reporting.</p></div></div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common questions" number="06" /><div><h2>Practical answers for HR managers, administrators, and office managers.</h2><p>Questions about planning, budget, procurement, and professional standards.</p></div></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="07" />
        <div className="cta-strip__action"><div><h2>Start with the business objective and the budget.</h2><p>Share the purpose of the trip (team building, celebration, strategy, conference), dates, group size, budget range, and any specific requirements (meeting facilities, activities, accessibility).</p></div><Link href="/contact" className="hero-cta">Request a corporate travel quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
