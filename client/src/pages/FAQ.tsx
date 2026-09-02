// Design note: Field Notes Modernism — FAQ is a practical reference, not marketing copy. Answers are specific and actionable.

import { RouteTick, SectionIntro } from "@/components/SiteShell";

const meta = {
  title: "FAQ | Kenya Travel & Programme Planning | 67 Tours",
  description: "Frequently asked questions about Kenya education tours, NGO field logistics, safari planning, pricing, and operational standards.",
  keywords: "Kenya travel FAQ, education tour questions, NGO logistics questions, safari FAQ, coast travel FAQ, travel planning"
};

import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";

const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    questions: [
      {
        q: "What types of groups do you work with?",
        a: "We work with three main categories: education and study tours (schools, universities), NGO field programmes (development, research, humanitarian), and safari/coast leisure travel (groups, families). Our approach is the same across all three: clear routing, practical standards, and local follow-through.",
      },
      {
        q: "How far in advance should we book?",
        a: "Education groups typically book 6–12 months ahead. NGO programmes vary depending on the complexity of the route and the season. Safari and coast travel can be planned with shorter lead times, but key accommodations book quickly during peak seasons. Earlier booking allows more flexibility in route design.",
      },
      {
        q: "What is included in your services?",
        a: "We provide route planning, vehicle coordination, accommodation booking, site access arrangements, local facilitation where applicable, and on-the-ground coordination during the trip. The exact scope depends on the programme type and what the travelling organisation needs us to handle.",
      },
      {
        q: "Do you handle international flights?",
        a: "No. We handle the Kenya-side movement from the point of arrival. International flights are typically arranged by the travelling organisation or their preferred travel agent. We can provide guidance on arrival times and how they affect the Kenya-side schedule.",
      },
    ],
  },
  {
    id: "education",
    name: "Education-Specific Questions",
    questions: [
      {
        q: "Can you work with specific curriculum requirements?",
        a: "Yes. We need to understand the learning objective, and from there we can suggest destinations and site visits that support the curriculum. The more specific the academic brief, the better we can match the route to the educational goals.",
      },
      {
        q: "What supervision do you provide for students?",
        a: "We work with the supervision model the school requires. This can range from teaching staff travelling with the group to local facilitation support. The responsibility for students remains with the travelling institution—we provide the Kenya-side coordination and local facilitation where needed.",
      },
      {
        q: "How do you handle risk assessments?",
        a: "We provide the operational information needed for risk assessments: route details, vehicle specifications, accommodation standards, emergency contacts, and medical facility access. The formal risk assessment remains the responsibility of the travelling institution.",
      },
      {
        q: "Can you accommodate special dietary and accessibility needs?",
        a: "Yes. Dietary requirements, mobility considerations, and medical needs are factored into accommodation selection, meal planning, and movement timing. These details are confirmed in writing before the group travels.",
      },
    ],
  },
  {
    id: "ngo",
    name: "NGO-Specific Questions",
    questions: [
      {
        q: "What information do you need for field logistics planning?",
        a: "We start with the programme calendar, counties or field sites, team size, equipment requirements, fixed dates, and any access or security considerations. The more specific the brief, the more accurate the first route plan.",
      },
      {
        q: "Can you handle remote and hard-to-reach sites?",
        a: "Yes. We have experience with routes in northern Kenya, Turkana and other remote areas where road conditions, fuel availability and communication need to be planned in detail. These routes require more lead time and contingency planning.",
      },
      {
        q: "How do you handle security for field programmes?",
        a: "We provide operational information relevant to movement planning: route conditions, known access points, communication coverage and medical facility access. We do not provide security assessments. For programmes with elevated security considerations, we work with the organisation's security protocols or designated security providers.",
      },
      {
        q: "What happens if field conditions change during the programme?",
        a: "We maintain a communication rhythm with the field team. If conditions change—a road becomes impassable, a site visit is delayed, or security guidance shifts—we provide the next workable option and its implications for the wider programme schedule.",
      },
    ],
  },
  {
    id: "safari",
    name: "Safari & Coast Questions",
    questions: [
      {
        q: "What is the best time of year for safari?",
        a: "The dry seasons (June–October and January–February) generally offer better wildlife viewing as animals congregate around water sources. However, each season has advantages—the green seasons bring fewer crowds, lower rates, and different photographic conditions. The best time depends on the group's priorities.",
      },
      {
        q: "Should we fly or drive to the parks?",
        a: "This depends on budget, time, and group composition. Flying reduces road time and can access remote areas more directly. Driving is more economical and allows the group to see the landscape between destinations. We present both options with their trade-offs.",
      },
      {
        q: "Can you combine safari and coast in one trip?",
        a: "Yes. This is a common combination. The handover between safari and coast needs planning—transfer method, luggage handling, arrival time, and whether the group needs a rest day between the two phases. We structure the route so the transition does not become a friction point.",
      },
      {
        q: "What about the coast—when is the best time?",
        a: "The coast has two main seasons: the dry season (January–March, July–October) with calmer seas, and the rainy seasons (April–June, November–December) with higher humidity and rougher seas. Marine activities are better planned around the dry seasons, though the coast remains accessible year-round.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Payment Questions",
    questions: [
      {
        q: "How do you structure pricing?",
        a: "Pricing is based on the specific route, group size, season, accommodation level, and services required. We provide detailed quotes that break down costs by category (accommodation, vehicles, park fees, meals, etc.) so the travelling organisation understands what is included.",
      },
      {
        q: "What payment terms do you work with?",
        a: "Payment terms are agreed during the booking process and typically include a deposit to secure reservations and final payment before travel. Specific terms depend on the programme type, the suppliers involved, and the lead time.",
      },
      {
        q: "Do you offer different pricing levels?",
        a: "Yes. We can work with different accommodation standards, vehicle types, and service levels depending on budget and requirements. We are transparent about what each level includes and what trade-offs are involved.",
      },
    ],
  },
  {
    id: "operational",
    name: "Operational Questions",
    questions: [
      {
        q: "What happens if something goes wrong during the trip?",
        a: "We have contingency plans for common issues: vehicle breakdown, weather disruptions, site access problems, and medical situations. The travelling organisation has a 24-hour contact for active programmes. We focus on providing clear next decisions rather than solving every problem independently—some decisions need to involve the travelling organisation.",
      },
      {
        q: "How do you handle medical emergencies?",
        a: "We document medical facility access for all routes. For serious emergencies, evacuation to Nairobi or the nearest appropriate facility is arranged in coordination with the travelling organisation's emergency protocols. We do not provide medical services—we provide the logistics to access them.",
      },
      {
        q: "What vehicles do you use?",
        a: "Vehicle selection depends on the route, load, and conditions. This includes 4x4 vehicles for remote access, larger capacity vehicles for team movements, and appropriate support vehicles depending on the programme requirements. Specifications are provided as part of the planning process.",
      },
      {
        q: "How do you handle changes to the itinerary?",
        a: "Changes are handled based on when they occur and what is driving them. Minor adjustments can often be accommodated. Major changes may require re-planning and may have cost implications. We communicate the implications of any change clearly before proceeding.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <PageHeader 
        eyebrow="FREQUENTLY ASKED QUESTIONS" 
        title="Practical answers for programme coordinators and group planners." 
        intro="These are the questions we hear most often from education groups, NGO programmes, and safari planners. If you don't see your question here, contact us directly." 
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
        <RouteTick label="Still have questions?" number="07" />
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
