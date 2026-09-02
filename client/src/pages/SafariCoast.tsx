// Design note: Field Notes Modernism — leisure travel stays factual, route-led, and specific about the handovers that make it work.

import { ArrowUpRight, Clock3, Luggage, Sun } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Safari & Coast Travel",
  "description": "Operationally clear Kenya safari and coast itineraries, built around timing, transfers, stays and group needs. Mara, Amboseli, Watamu.",
  "provider": {
    "@type": "TravelAgency",
    "name": "67 Tours & Travel",
    "url": "https://67tours.co.ke"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  }
};

const itineraries = [
  { number: "01", title: "Nairobi → Naivasha / Nakuru", text: "A manageable Rift Valley start for groups combining city time with freshwater ecology, birdlife, crater landscapes or a first safari movement.", tags: ["shorter road leg", "Rift Valley", "flexible start"] },
  { number: "02", title: "Nairobi → Amboseli", text: "A focused safari route with clear transfer planning and time to settle into the park rhythm rather than treating the journey as a simple arrival and departure.", tags: ["wildlife", "water systems", "group timing"] },
  { number: "03", title: "Nairobi → Maasai Mara", text: "Best planned around the full movement: road or air transfer, check-in window, game-drive timing, stay length and the return connection.", tags: ["longer transfer", "game drives", "timing-led"] },
  { number: "04", title: "Safari → Coast", text: "A handover between inland and coastal Kenya where the useful plan is explicit about the transfer, luggage, arrival time and what remains of the day.", tags: ["inter-region", "Indian Ocean", "handover"] },
  { number: "05", title: "Coast / Watamu / Mombasa", text: "Coastal stays can be structured around rest, marine activity, culture or a second programme objective, with tide, heat and road time accounted for.", tags: ["marine", "rest rhythm", "coast"] },
];

const planningNotes = [
  { icon: Clock3, title: "Transfer time is part of the itinerary", text: "We show the actual road legs and arrival windows so the group can decide how much movement the trip should carry." },
  { icon: Luggage, title: "The group changes the plan", text: "Luggage, rooming, dietary needs, mobility and vehicle capacity affect the route. They are not an afterthought." },
  { icon: Sun, title: "Season and light matter", text: "Weather, daylight, road conditions and the timing of activities shape what is sensible on the day." },
];

const faqs = [
  {
    question: "What is the best time of year for safari?",
    answer: "Dry season (June–October, January–February) offers the best wildlife viewing and road conditions. Green season (November–December, March–May) hasfewer crowds, lush landscapes, and some roads become challenging."
  },
  {
    question: "Should we fly or drive to the parks?",
    answer: "Flying saves time and reduces road fatigue—useful for groups with limited time. Driving is more economical and allows you to see the landscape. We advise based on your dates, budget, and group preferences."
  },
  {
    question: "Can you combine safari and coast?",
    answer: "Yes, this is a common route. We plan the handover between inland and coastal Kenya explicitly—transfer time, luggage, arrival window, and what remains of the day."
  },
  {
    question: "What accommodation options are available?",
    answer: "Options range from tented camps and lodges to hotels and resorts. We specify accommodation standards before booking based on your budget, group size, and preferences."
  },
  {
    question: "How do you handle dietary requirements?",
    answer: "We collect dietary requirements during planning. Accommodation and meal arrangements are specified before booking. We advise on which properties can accommodate specific needs."
  },
  {
    question: "What activities are available at the coast?",
    answer: "Marine activities include snorkelling, diving, boat rides, and beach time. Cultural visits, Swahili cuisine experiences, and historical sites are also available. We plan around tide timing and heat."
  }
];

export default function SafariCoast() {
  return (
    <>
      <SEO
        title="Kenya Safari & Coast Itineraries | 67 Tours"
        description="Operationally clear Kenya safari and coast itineraries, built around timing, transfers, stays and group needs. Mara, Amboseli, Watamu."
        canonical="https://67tours.co.ke/safari-coast"
        structuredData={structuredData}
      />
      <PageHeader eyebrow="Capability / 03" title="Safari and coast, planned around the handovers." intro="A leisure trip still has a movement plan. We build safari and coast travel around the links between places: arrival windows, road legs, stays, luggage, activity timing and the group's pace." image={imageUrls.safari} imageAlt="Safari vehicle following a track through the Maasai Mara" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The useful view" number="01" /><p className="page-rail__note">A destination is only as workable as the movement that gets the group there and on to the next one.</p></aside>
        <div className="page-intro__body">
          <p>Our leisure routes cover the main safari circuits and Kenya's coast, with the same practical approach used for education and NGO work. The question is not how many stops can be added. It is what the group can do well within the time available.</p>
          <p>We can shape a shorter Nairobi and Rift Valley itinerary, a focused Amboseli or Maasai Mara safari, a safari-to-coast handover, or a coastal stay with marine and cultural context.</p>
          <h2>Typical route structures.</h2>
          <p>Use these as starting points, not fixed packages. The final route should follow your dates, group, budget, arrival point and the amount of time you want to spend moving.</p>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Route structures" number="02" /><div><h2>Where the trip is going—and how it gets there.</h2><p>Clear route structure helps the group make decisions early, before rooming, transfers and activity timing become difficult to change.</p></div></div>
        <div className="route-list safari-route-list">
          {itineraries.map((itinerary) => <div className="route-list__row" key={itinerary.number}><span>{itinerary.number}</span><div><h3>{itinerary.title}</h3><div className="meta-tags">{itinerary.tags.map((tag) => <span className="meta-tag" key={tag}>{tag}</span>)}</div></div><p>{itinerary.text}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Trip planning" number="03" /><div><h2>The details that protect the day.</h2><p>Leisure does not mean the plan should be vague. These are the small controls that make a group trip easier to carry.</p></div></div>
          <div className="checklist">
            {planningNotes.map((note, index) => { const Icon = note.icon; return <div className="checklist__item" key={note.title}><strong><Icon size={16} strokeWidth={1.7} /></strong><div><h3>{note.title}</h3><p>{note.text}</p></div></div>; })}
            <div className="checklist__item"><strong>04</strong><div><h3>One contact for the movement</h3><p>The group should not have to solve each transfer independently. We keep the Kenya-side sequence coherent.</p></div></div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Frequently asked questions" number="04" /><div><h2>Questions safari and coast travellers ask.</h2><p>Practical answers about timing, transfers, accommodation, and activities.</p></div></div>
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
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action"><div><h2>Tell us where you land, and what the trip needs to feel like on the ground.</h2><p>Dates, group size, arrival point, safari or coast preference and the pace you want are a good start.</p></div><Link href="/contact" className="hero-cta">Request a travel quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
