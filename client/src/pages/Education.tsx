// Design note: Field Notes Modernism — this page treats the study tour as an academic and movement plan, not a holiday itinerary.

import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick, SectionIntro } from "@/components/SiteShell";
import { destinations, imageUrls } from "@/lib/siteData";

const checklist = [
  { title: "Learning objective", text: "Can each stop be tied to a subject, question or field task, rather than added because it is nearby?" },
  { title: "Group movement", text: "Are road legs, loading points, rest stops and headcounts realistic for the age and size of the group?" },
  { title: "Accommodation standard", text: "Are rooming, meal times, security, supervision and proximity to the next site clear before booking?" },
  { title: "Local facilitation", text: "Is there a person on the Kenya side who can turn the programme brief into a useful visit on the ground?" },
  { title: "Safety planning", text: "Are emergency contacts, medical information, vehicle checks and changes to the plan understood by the right people?" },
  { title: "Contingency", text: "Does the route have a practical alternative when weather, road conditions or a site schedule changes?" },
];

export default function Education() {
  return (
    <>
      <PageHeader eyebrow="Capability / 01" title="Education trips that hold up outside the classroom." intro="You are responsible for the learning objective, the students and the timetable. We help make the Kenya side of that responsibility specific: which sites fit, how the group moves, what the accommodation needs to do and who is present when the plan meets the ground." image={imageUrls.education} imageAlt="Students taking notes during a supervised marine field lesson near Watamu" />

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

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action"><div><h2>Start with the programme question.</h2><p>Share the dates, age range, group size, curriculum or research theme, and the places you are considering.</p></div><Link href="/contact" className="hero-cta">Request a study-tour quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
