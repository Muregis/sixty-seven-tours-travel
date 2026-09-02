// Design note: Field Notes Modernism — process is the proof here, shown as a sequence of decisions rather than a founder story or invented credentials.

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";

const process = [
  { number: "01", title: "Read the brief", text: "We start with purpose, dates, group composition, arrival point, route ideas and the conditions that cannot move. For education and NGO work, the programme objective is part of the brief." },
  { number: "02", title: "Test the route", text: "We look at sequence, transfer time, access, site timing, accommodation position, vehicle needs and where the plan needs margin. The first answer should make assumptions visible." },
  { number: "03", title: "Build the movement plan", text: "The itinerary is shaped around what the group needs to do each day. We keep the handovers, contact points and practical standards connected to the route." },
  { number: "04", title: "Confirm the working details", text: "Before movement, the important details are checked: arrivals, pickups, rooming, meal needs, site windows, contact responsibilities and the next point of the journey." },
  { number: "05", title: "Stay close to the day", text: "When conditions change, the goal is a clear next decision. We keep communication useful and help the Kenya-side movement stay aligned with the wider programme or trip." },
];

const principles = [
  { title: "Specific early", text: "A route is easier to improve when its assumptions are written down at the start." },
  { title: "Local by default", text: "The Kenya-side context belongs in the plan, not as a last-minute note." },
  { title: "Quietly accountable", text: "A good handover is clear about who knows what, when, and what happens next." },
];

export default function HowWeWork() {
  return (
    <>
      <PageHeader eyebrow="The company / how we work" title="A practical way to plan Kenya from the Kenya side." intro="67 Tours & Travel is a Kenya-based destination management company. We focus on the decisions between the headline destinations: access, sequence, timing, people, standards and the plan when the day does not follow the first version." />

      <section className="process-section container">
        <div className="route-section__header"><RouteTick label="Our working sequence" number="01" /><div><h2>From a programme brief to a route people can use.</h2><p>There is no useful separation between itinerary design and operations. The first shapes the second, and both need to be understandable to the group.</p></div></div>
        <div className="process-list">
          {process.map((step) => <div className="process-row" key={step.number}><span className="process-row__number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}
        </div>
        <div className="principles">
          {principles.map((principle) => <div className="principle" key={principle.title}><span className="principle__mark" /><h3>{principle.title}</h3><p>{principle.text}</p></div>)}
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="What we make visible" number="02" /><div><h2>The details that build confidence.</h2><p>Trust comes from knowing what is being handled and what information the plan still needs.</p></div></div>
          <div className="checklist">
            <div className="checklist__item"><strong>01</strong><div><h3>Route assumptions</h3><p>Where the group starts, what it is carrying, how long the movement takes and where time has been allowed.</p></div></div>
            <div className="checklist__item"><strong>02</strong><div><h3>Group standards</h3><p>Rooming, meals, supervision, mobility and pace are considered as part of the route.</p></div></div>
            <div className="checklist__item"><strong>03</strong><div><h3>Site context</h3><p>Visits, field sites and activities are matched to the purpose of the trip and the conditions around them.</p></div></div>
            <div className="checklist__item"><strong>04</strong><div><h3>Next decisions</h3><p>When the plan changes, the important thing is to know the next workable action and who needs to know it.</p></div></div>
          </div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="03" />
        <div className="cta-strip__action"><div><h2>Bring us the part of Kenya you need to make workable.</h2><p>We will start with the purpose, the route, the group and the constraints that matter.</p></div><Link href="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
