// Design note: Field Notes Modernism — this page treats the study tour as an academic and movement plan, not a holiday itinerary.

import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick, SectionIntro } from "@/components/SiteShell";
import { destinations, imageUrls } from "@/lib/siteData";

const meta = {
  title: "Kenya Study Tours for Schools | 67 Tours",
  description: "Curriculum-led Kenya study tours for schools and education groups: group movement, student standards, local facilitation and practical field planning.",
  keywords: "Kenya education tours, study tours, field trips, curriculum-aligned travel, student travel, academic programmes, school trips Kenya"
};

const checklist = [
  { title: "Learning objective", text: "Can each stop be tied to a subject, question or field task, rather than added because it is nearby?" },
  { title: "Group movement", text: "Are road legs, loading points, rest stops and headcounts realistic for the age and size of the group?" },
  { title: "Accommodation standard", text: "Are rooming, meal times, security, supervision and proximity to the next site clear before booking?" },
  { title: "Local facilitation", text: "Is there a person on the Kenya side who can turn the programme brief into a useful visit on the ground?" },
  { title: "Safety planning", text: "Are emergency contacts, medical information, vehicle checks and changes to the plan understood by the right people?" },
  { title: "Contingency", text: "Does the route have a practical alternative when weather, road conditions or a site schedule changes?" },
];

const faqs = [
  {
    question: "What age ranges do you work with?",
    answer: "We work with secondary school, university, and adult education groups. The route, supervision requirements, and activity levels are adjusted according to the age range and group maturity."
  },
  {
    question: "How do you handle dietary requirements and accessibility?",
    answer: "We collect dietary requirements, allergies, and mobility needs during the planning phase. Accommodation and meal arrangements are specified before booking. We advise on which sites can accommodate specific needs."
  },
  {
    question: "What is the supervision model?",
    answer: "The school or institution provides the primary supervision. We provide local facilitation, vehicle coordination, and on-the-ground support. We clarify roles and responsibilities before departure."
  },
  {
    question: "How do you handle medical situations?",
    answer: "We identify medical facilities along the route before departure. We carry emergency contact information for all participants. We have a defined response protocol for medical situations and evacuation if required."
  },
  {
    question: "Can you help with curriculum alignment?",
    answer: "We can help identify sites and activities that support specific curriculum objectives. We do not design the curriculum—we connect the academic brief to practical field sites and local context."
  },
  {
    question: "What happens if the weather disrupts the plan?",
    answer: "We have contingency plans for common weather disruptions. Alternative indoor activities, route adjustments, and timing changes are planned before departure. We communicate changes to the group lead immediately."
  }
];

export default function Schools() {
  return (
    <>
      <PageHeader eyebrow="Capability / 04" title="Education trips that hold up outside the classroom." intro="You are responsible for the learning objective, the students and the timetable. We help make the Kenya side of that responsibility specific: which sites fit, how the group moves, what the accommodation needs to do and who is present when the plan meets the ground." image={imageUrls.education} imageAlt="Students taking notes during a supervised marine field lesson near Watamu" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The brief" number="01" /><p className="page-rail__note">Study tours work best when the academic question and the operating plan are written together.</p></aside>
        <div className="page-intro__body">
          <p>Our education work covers wildlife conservation, ecology, marine systems, community context, culture and geography. The route can be compact around Nairobi and the Rift Valley, or extend to Amboseli, the coast, Kakamega and other programme locations where the subject requires it.</p>
          <p>We plan for the group that is actually travelling: age range, supervision model, dietary requirements, mobility, rooming, activity pace and the number of people who need to know when a movement changes.</p>
          <h2>Build the programme around the question.</h2>
          <h3>Wildlife and conservation</h3>
          <p>Amboseli and the Maasai Mara can support discussions on habitats, water pressure, conservation practice and the relationship between protected areas and surrounding communities. The route needs enough time for observation, briefing and debrief—not just a vehicle passing through.</p>
          <h3>Marine and coastal systems</h3>
          <p>Watamu and the wider coast can support marine ecology, mangroves, fisheries, coastal livelihoods and conservation work. Tide timing, heat, transfer lengths and the age of the group should shape the field schedule.</p>
          <h3>Urban, cultural and geographic context</h3>
          <p>Nairobi, Naivasha, Nakuru, western Kenya and the Rift Valley provide different ways into urban systems, freshwater ecology, geography, history and community-led work. We help sequence the visits so the learning context is not lost between road legs.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Selection checklist" number="02" /><div><h2>What to test before you choose an operator.</h2><p>A useful operator should be able to answer these questions without reaching for brochure language.</p></div></div>
          <div className="checklist">
            {checklist.map((item, index) => <div className="checklist__item" key={item.title}><strong>0{index + 1}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Education routes" number="03" /><div><h2>Destinations with a reason to be there.</h2><p>These are not a generic Kenya list. They are common building blocks for study programmes, selected according to the question the group needs to explore.</p></div></div>
        <div className="route-list">
          {destinations.education.map((destination) => <div className="route-list__row" key={destination.code}><span>{destination.code}</span><h3>{destination.name}</h3><p>{destination.note}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="photo-break">
        <div className="photo-break__copy"><RouteTick label="On the day" number="04" /><h2>Local facilitation should add context, not noise.</h2><p>The right facilitator knows when to let a group observe, when to ask a better question and when to keep the movement on time. We keep the academic lead, the local context and the operating plan in the same conversation.</p></div>
        <div className="photo-break__image"><img src={imageUrls.education} alt="Students and a facilitator working at the coast" /></div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Frequently asked questions" number="05" /><div><h2>Questions education coordinators ask.</h2><p>Practical answers about supervision, safety, curriculum alignment, and what happens when the plan changes.</p></div></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-placeholder container">
        <div className="route-section__header"><RouteTick label="Programme examples" /><div><h2>How education groups move through Kenya.</h2><p>The following section is reserved for anonymised case studies of actual education programmes we have coordinated. Each will include the learning objective, route structure, group size, and the operational decisions that made the programme work.</p></div></div>
        <div className="trust-placeholder">
          <p><em>[Case study cards to be added as programmes are completed and documented]</em></p>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="06" />
        <div className="cta-strip__action"><div><h2>Start with the programme question.</h2><p>Share the dates, age range, group size, curriculum or research theme, and the places you are considering.</p></div><Link href="/contact" className="hero-cta">Request a study-tour quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
