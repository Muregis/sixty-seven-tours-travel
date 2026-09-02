// Design note: Field Notes Modernism — chama travel is member-benefit travel; every shilling spent must be accountable, and the route must serve the group's financial and social objectives.

import { ArrowUpRight, Check, Users } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const meta = {
  title: "Chama & Investment Group Travel Kenya | 67 Tours",
  description: "Transparent, accountable chama travel for Kenyan investment groups: strategic planning retreats, educational tours, member appreciation and project site visits.",
  keywords: "Kenya chama travel, investment group travel, savings cooperative trips, chama retreats, member benefit travel, group budgeting"
};

const checklist = [
  { title: "Budget transparency", text: "Can the operator provide a clear, line-by-line breakdown of costs with no hidden fees, and explain what each member's contribution covers?" },
  { title: "Value alignment", text: "Does the travel plan deliver activities and experiences that justify the investment, or is it generic tourism repackaged at a premium?" },
  { title: "Member consideration", text: "Are rooming arrangements, dietary needs, mobility considerations, and the diverse needs of chama members planned into the route?" },
  { title: "Group decision process", text: "Can the operator work with your group's approval process, provide options for member consideration, and adjust plans based on member feedback?" },
  { title: "Payment flexibility", text: "Can payment terms work with chama contribution cycles, member payment schedules, and the group's financial processes?" },
  { title: "Accountability", text: "Will the operator provide documentation, receipts, and clear communication that members can review and approve?" },
];

const destinations = [
  { code: "01", name: "Rift Valley investment sites", note: "Naivasha's flower farms, geothermal projects, and agricultural enterprises; Nakuru's manufacturing and processing industries. These destinations support educational tours and learning visits." },
  { code: "02", name: "Coastal business and leisure", note: "Mombasa's port facilities, coastal businesses, and tourism enterprises provide learning opportunities, while coastal resorts offer venues for strategic planning retreats and member appreciation trips." },
  { code: "03", name: "Western Kenya agriculture", note: "Kisumu, Kakamega, and surrounding agricultural regions offer visits to successful farms, cooperatives, and agricultural projects that chamas can learn from." },
  { code: "04", name: "Central Kenya enterprises", note: "Nairobi, Kiambu, and surrounding regions have numerous manufacturing, real estate, and business enterprises that serve as educational destinations for investment groups." },
  { code: "05", name: "Safari and coast for member appreciation", note: "Maasai Mara, Amboseli, and coastal destinations provide leisure travel that rewards members while offering networking and fellowship opportunities." },
];

const faqs = [
  {
    question: "How do you structure pricing for chama groups?",
    answer: "Pricing is based on the specific itinerary, group size, season, and accommodation level. We provide a detailed breakdown so members can see exactly what their contribution covers. Group size often affects per-person costs—larger groups can sometimes achieve better rates."
  },
  {
    question: "Can you work with our budget constraints?",
    answer: "Yes. We can design routes that fit different budget levels. We are transparent about what different budget levels include and what trade-offs are involved. We prefer to deliver a good experience within budget than over-promise and under-deliver."
  },
  {
    question: "What payment terms do you offer?",
    answer: "Payment terms are agreed during planning and can be structured to work with chama financial processes. This may include a deposit to secure bookings, progress payments, and final payment before travel. We communicate all terms clearly upfront."
  },
  {
    question: "How do you handle member cancellations?",
    answer: "Cancellation policies depend on the suppliers and venues. We communicate these policies clearly during planning. For chamas, we can sometimes structure terms that account for the possibility of member dropouts, though this depends on the specific arrangements."
  },
  {
    question: "Can you help with educational content for investment tours?",
    answer: "We can coordinate with sites and venues to ensure meaningful learning experiences. However, the educational content and learning objectives are best defined by the chama based on what members want to learn and achieve."
  },
  {
    question: "What about destination suggestions we haven't considered?",
    answer: "We can suggest destinations based on your objectives, budget, and group preferences. We also welcome your ideas and can help evaluate whether proposed destinations are practical and cost-effective."
  }
];

export default function Chamas() {
  return (
    <>
      <PageHeader eyebrow="Capability / 02" title="Chama and investment group travel that respects the members' contribution." intro="You are organising travel for a chama, investment group, or savings collective. The trip needs to deliver value, stay within budget, and honour the trust members have placed in the leadership. This is not leisure travel—it is member-benefit travel that must be planned with the same discipline you apply to your group's finances." image={imageUrls.chama} imageAlt="Chama members reviewing travel plans at a meeting" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The brief" number="01" /><p className="page-rail__note">Chama travel is member-benefit travel. Every shilling spent must be accountable.</p></aside>
        <div className="page-intro__body">
          <p>We work with Kenyan chamas, investment groups, and savings cooperatives on group travel that serves the members' interests. This can be an educational trip to learn from other investment groups, a retreat to plan group strategy, a leisure trip as member appreciation, or a visit to investment sites or projects.</p>
          <p>The travel plan must be transparent, cost-effective, and deliver clear value. Members need to see where their money is going, what is included, and how the trip benefits the group. We plan for the reality of chama travel: fixed budgets, member approval processes, diverse member needs, and the need for activities that justify the investment.</p>
          <h2>Types of chama travel</h2>
          <h3>Educational and investment tours</h3>
          <p>Visits to successful investment projects, agricultural enterprises, manufacturing sites, or other chamas to learn best practices. The route must include the learning sites, accommodation that works for groups, and time for debriefing and planning.</p>
          <h3>Strategic planning retreats</h3>
          <p>Chama leadership and member retreats to review group performance, plan investment strategies, and make key decisions. These trips need venues with meeting spaces, environments conducive to focused work, and accommodation that supports both work and fellowship.</p>
          <h3>Member appreciation trips</h3>
          <p>Leisure travel as a benefit for members who have contributed consistently. Safari, coast, or upcountry destinations that provide relaxation and fellowship while staying within the group's budget parameters.</p>
          <h3>Project site visits</h3>
          <p>Travel to inspect potential investment sites, ongoing projects, or properties the chama is considering. These trips require coordination with site owners, realistic routing between multiple locations, and time for proper evaluation.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Selection checklist" number="02" /><div><h2>What to test before you choose a travel partner for your chama.</h2><p>A useful travel partner should be able to answer these questions without avoiding the budget question.</p></div></div>
          <div className="checklist">
            {checklist.map((item, index) => <div className="checklist__item" key={item.title}><strong>0{index + 1}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common chama destinations" number="03" /><div><h2>Places where Kenyan investment groups actually go.</h2><p>These are destinations that serve the specific needs of chamas: learning, networking, strategic planning, and member appreciation.</p></div></div>
        <div className="route-list">
          {destinations.map((destination) => <div className="route-list__row" key={destination.code}><span>{destination.code}</span><h3>{destination.name}</h3><p>{destination.note}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="photo-break">
        <div className="photo-break__copy"><RouteTick label="Budget planning" number="04" /><h2>Making every shilling accountable.</h2><p>Chama travel requires a different approach to budgeting. Members need transparency, value, and assurance that their contributions are being used responsibly.</p></div>
        <div className="photo-break__image"><img src={imageUrls.chama} alt="Chama members reviewing travel plans and budget at a meeting" /></div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Budget considerations" number="05" /><div><h2>The details that build member confidence.</h2><p>We provide the cost breakdown and payment structure that allows leadership to present the trip to members with clarity.</p></div></div>
        <div className="checklist">
          <div className="checklist__item"><strong>01</strong><div><h3>Cost breakdown</h3><p>We provide detailed breakdowns: transport, accommodation, meals, activities, park fees, and any other costs. No hidden fees or vague "service charges."</p></div></div>
          <div className="checklist__item"><strong>02</strong><div><h3>Value options</h3><p>We can present different tiers of accommodation and activities, allowing the chama to choose the level that fits the budget while still delivering a meaningful experience.</p></div></div>
          <div className="checklist__item"><strong>03</strong><div><h3>Group discounts</h3><p>Where possible, we negotiate group rates and pass the savings to the chama. Larger groups often have more leverage on accommodation and transport pricing.</p></div></div>
          <div className="checklist__item"><strong>04</strong><div><h3>Payment structure</h3><p>We can structure payments to align with contribution cycles: deposit, interim payments, and final payment that works with when members can contribute.</p></div></div>
          <div className="checklist__item"><strong>05</strong><div><h3>Member communication</h3><p>We provide clear documentation that leadership can share with members: what is included, what is not, payment schedules, and what the trip delivers.</p></div></div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common questions" number="06" /><div><h2>Practical answers for chama officials and treasurers.</h2><p>Questions about pricing, budget constraints, payment terms, and member value.</p></div></div>
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
        <div className="cta-strip__action"><div><h2>Start with the budget and the objective.</h2><p>Share the budget range, group size, trip type (educational, strategic planning, member appreciation), preferred destinations, and any specific member needs.</p></div><Link href="/contact" className="hero-cta">Request a chama travel quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
