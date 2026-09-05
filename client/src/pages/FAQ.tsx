// Design note: Field Notes Modernism — FAQ is a practical reference, not marketing copy. Answers are specific and actionable.

import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Kenya Travel FAQ",
  "description": "Frequently asked questions about Kenya church group travel, chama travel, corporate travel, school study tours, NGO field logistics, safari planning, pricing, and operational standards.",
  "publisher": {
    "@type": "TravelAgency",
    "name": "67 Tours & Travel",
    "url": "https://67tours.co.ke"
  }
};

const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        q: "What types of groups do you work with?",
        a: "We work with five main categories: church and religious groups, chamas and investment groups, corporate and office groups, schools and education groups, and NGO field programmes. Safari and coast travel covers leisure groups. Our approach is the same across all: clear routing, practical standards, and local follow-through."
      },
      {
        q: "How far in advance should we book?",
        a: "Church groups, chamas, corporate groups, and schools typically book 6–12 months ahead. NGO programmes vary depending on the complexity of the route and the season. Safari and coast travel can be planned with shorter lead times, but key accommodations book quickly during peak seasons. Earlier booking allows more flexibility in route design."
      },
      {
        q: "What is included in your services?",
        a: "We provide route planning, vehicle coordination, accommodation booking, site access arrangements, local facilitation where applicable, and on-the-ground coordination during the trip. The exact scope depends on the programme type and what the travelling organisation needs us to handle."
      },
      {
        q: "Do you handle international flights?",
        a: "No. We handle the Kenya-side movement from the point of arrival. International flights are typically arranged by the travelling organisation or their preferred travel provider. We can provide guidance on arrival times and how they affect the Kenya-side schedule."
      },
    ],
  },
  {
    id: "church",
    name: "Church & Religious Groups",
    questions: [
      {
        q: "How far in advance should we plan a church trip?",
        a: "Most church groups benefit from planning 6–12 months ahead. This allows time for member fundraising, budgeting, venue booking, and coordinating with host churches or communities. Shorter lead times are possible depending on the destination and flexibility."
      },
      {
        q: "Can you handle large church groups?",
        a: "Yes. We work with groups ranging from small leadership teams to large congregations. Large groups require more coordination—multiple vehicles, rooming management, meal planning, and venue capacity—but the operating principles are the same."
      },
      {
        q: "How do you handle payment for church groups?",
        a: "We can structure payment terms that work with church budget cycles and member payment schedules. This may include deposits, progress payments, and final payment timing that aligns with when members have contributed."
      },
      {
        q: "What about mission trips to remote areas?",
        a: "We have experience with mission trips to rural and remote areas. These routes require more planning: road conditions, local coordination, equipment transport, and contingency planning. We work with the mission team to understand the specific context and requirements."
      },
    ],
  },
  {
    id: "chama",
    name: "Chamas & Investment Groups",
    questions: [
      {
        q: "How do you structure pricing for chama groups?",
        a: "Pricing is based on the specific itinerary, group size, season, and accommodation level. We provide a detailed breakdown so members can see exactly what their contribution covers. Group size often affects per-person costs—larger groups can sometimes achieve better rates."
      },
      {
        q: "Can you work with our budget constraints?",
        a: "Yes. We can design routes that fit different budget levels. We are transparent about what different budget levels include and what trade-offs are involved. We prefer to deliver a good experience within budget than over-promise and under-deliver."
      },
      {
        q: "What payment terms do you offer?",
        a: "Payment terms are agreed during planning and can be structured to work with chama financial processes. This may include a deposit to secure bookings, progress payments, and final payment before travel. We communicate all terms clearly upfront."
      },
      {
        q: "How do you handle member cancellations?",
        a: "Cancellation policies depend on the suppliers and venues. We communicate these policies clearly during planning. For chamas, we can sometimes structure terms that account for the possibility of member dropouts, though this depends on the specific arrangements."
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate & Office",
    questions: [
      {
        q: "How far in advance should we plan corporate travel?",
        a: "Most corporate groups benefit from planning 3–6 months ahead. This allows time for budget approval, employee coordination, venue booking, and any necessary preparations. For larger events or peak seasons, earlier planning is advisable."
      },
      {
        q: "Can you work with corporate procurement processes?",
        a: "Yes. We can provide the documentation, quotes, and information needed for procurement processes, tender requirements, and internal approvals. We are familiar with corporate purchasing procedures."
      },
      {
        q: "What about cost control and budget adherence?",
        a: "We provide clear pricing upfront and work within the agreed budget. Any changes that would affect costs are communicated with options and implications before proceeding. We aim to avoid surprises."
      },
      {
        q: "Can you handle large corporate groups?",
        a: "Yes. We work with groups ranging from small teams to entire organisations. Large groups require more coordination, but the operating principles remain the same: clear planning, reliable execution, and professional standards."
      },
    ],
  },
  {
    id: "schools",
    name: "Schools & Education",
    questions: [
      {
        q: "Can you work with specific curriculum requirements?",
        a: "Yes. We need to understand the learning objective, and from there we can suggest destinations and site visits that support the curriculum. The more specific the academic brief, the better we can match the route to the educational goals."
      },
      {
        q: "What supervision do you provide for students?",
        a: "We work with the supervision model the school requires. This can range from teaching staff travelling with the group to local facilitation support. The responsibility for students remains with the travelling institution—we provide the Kenya-side coordination and local facilitation where needed."
      },
      {
        q: "How do you handle risk assessments?",
        a: "We provide the operational information needed for risk assessments: route details, vehicle specifications, accommodation standards, emergency contacts, and medical facility access. The formal risk assessment remains the responsibility of the travelling institution."
      },
      {
        q: "Can you accommodate special dietary and accessibility needs?",
        a: "Yes. Dietary requirements, mobility considerations, and medical needs are factored into accommodation selection, meal planning, and movement timing. These details are confirmed in writing before the group travels."
      },
    ],
  },
  {
    id: "ngo",
    name: "NGOs & Field Logistics",
    questions: [
      {
        q: "What information do you need for field logistics planning?",
        a: "We start with the programme calendar, counties or field sites, team size, equipment requirements, fixed dates, and any access or security considerations. The more specific the brief, the more accurate the first route plan."
      },
      {
        q: "Can you handle remote and hard-to-reach sites?",
        a: "Yes. We have experience with routes in northern Kenya, Turkana and other remote areas where road conditions, fuel availability and communication need to be planned in detail. These routes require more lead time and contingency planning."
      },
      {
        q: "How do you handle security for field programmes?",
        a: "We provide operational information relevant to movement planning: route conditions, known access points, communication coverage and medical facility access. We do not provide security assessments. For programmes with elevated security considerations, we work with the organisation's security protocols or designated security providers."
      },
      {
        q: "What happens if field conditions change during the programme?",
        a: "We maintain a communication rhythm with the field team. If conditions change—a road becomes impassable, a site visit is delayed, or security guidance shifts—we provide the next workable option and its implications for the wider programme schedule."
      },
    ],
  },
  {
    id: "safari",
    name: "Safari & Coast",
    questions: [
      {
        q: "What is the best time of year for safari?",
        a: "Dry season (June–October, January–February) offers the best wildlife viewing and road conditions. Green season (November–December, March–May) has fewer crowds, lush landscapes, and some roads become challenging."
      },
      {
        q: "Should we fly or drive to the parks?",
        a: "Flying saves time and reduces road fatigue—useful for groups with limited time. Driving is more economical and allows you to see the landscape. We advise based on your dates, budget, and group preferences."
      },
      {
        q: "Can you combine safari and coast?",
        a: "Yes, this is a common route. We plan the handover between inland and coastal Kenya explicitly—transfer time, luggage, arrival window, and what remains of the day."
      },
      {
        q: "What accommodation options are available?",
        a: "Options range from tented camps and lodges to hotels and resorts. We specify accommodation standards before booking based on your budget, group size, and preferences."
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Payment",
    questions: [
      {
        q: "How do you structure pricing?",
        a: "Pricing is based on the specific route, group size, season, accommodation level, and services required. We provide detailed quotes that break down costs by category (accommodation, vehicles, park fees, meals, etc.) so the travelling organisation understands what is included."
      },
      {
        q: "What payment terms do you work with?",
        a: "Payment terms are agreed during the booking process and typically include a deposit to secure reservations and final payment before travel. Specific terms depend on the programme type, the suppliers involved, and the lead time."
      },
      {
        q: "Do you offer different pricing levels?",
        a: "Yes. We can work with different accommodation standards, vehicle types, and service levels depending on budget and requirements. We are transparent about what each level includes and what trade-offs are involved."
      },
    ],
  },
  {
    id: "operational",
    name: "Operational",
    questions: [
      {
        q: "What happens if something goes wrong during the trip?",
        a: "We have contingency plans for common issues: vehicle breakdown, weather disruptions, site access problems, and medical situations. The travelling organisation has a 24-hour contact for active programmes. We focus on providing clear next decisions rather than solving every problem independently—some decisions need to involve the travelling organisation."
      },
      {
        q: "How do you handle medical emergencies?",
        a: "We document medical facility access for all routes. For serious emergencies, evacuation to Nairobi or the nearest appropriate facility is arranged in coordination with the travelling organisation's emergency protocols. We do not provide medical services—we provide the logistics to access them."
      },
      {
        q: "What vehicles do you use?",
        a: "Vehicle selection depends on the route, load, and conditions. This includes 4x4 vehicles for remote access, larger capacity vehicles for team movements, and appropriate support vehicles depending on the programme requirements. Specifications are provided as part of the planning process."
      },
      {
        q: "How do you handle changes to the itinerary?",
        a: "Changes are handled based on when they occur and what is driving them. Minor adjustments can often be accommodated. Major changes may require re-planning and may have cost implications. We communicate the implications of any change clearly before proceeding."
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Kenya Travel & Programme Planning | 67 Tours"
        description="Frequently asked questions about Kenya church group travel, chama travel, corporate travel, school study tours, NGO field logistics, safari planning, pricing, and operational standards."
        canonical="https://67tours.co.ke/faq"
        structuredData={structuredData}
      />
      <PageHeader 
        eyebrow="FREQUENTLY ASKED QUESTIONS" 
        title="Practical answers for programme coordinators and group planners." 
        intro="These are the questions we hear most often from church groups, chamas, corporate offices, schools, NGOs, and safari travellers. If you don't see your question here, contact us directly." 
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Content focus" number="01" />
          <p className="page-rail__note">These answers are written for the people who actually plan and coordinate these trips.</p>
        </aside>
        <div className="page-intro__body">
          <p>The FAQ is organised by programme type and topic. We focus on practical questions that affect route planning, risk assessment, and programme execution. If you have a question that is not covered here, contact us directly with your specific requirements.</p>
        </div>
      </section>

      {faqCategories.map((category, categoryIndex) => (
        <section key={category.id} className="faq-category container">
          <div className="route-section__header">
            <RouteTick label={category.name} number={`0${categoryIndex + 1}`} />
            <div>
              <h2>{category.name}</h2>
            </div>
          </div>
          <div className="faq-list">
            {category.questions.map((item, questionIndex) => (
              <div key={questionIndex} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="cta-strip container">
        <RouteTick label="Still have questions?" number="09" />
        <div className="cta-strip__action">
          <div>
            <h2>Contact us with your specific programme requirements.</h2>
            <p>If your question is not covered here, we can provide guidance based on your specific route, group, and objectives.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
