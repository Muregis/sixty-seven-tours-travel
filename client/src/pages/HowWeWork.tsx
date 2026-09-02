// Design note: Field Notes Modernism — process is the proof here, shown as a sequence of decisions rather than a founder story or invented credentials.

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";

const meta = {
  title: "How We Work | 67 Tours & Travel Kenya",
  description: "See how 67 Tours & Travel plans and coordinates trips from the Kenya side, from brief to final movement. Team roles and operating standards.",
  keywords: "destination management Kenya, how we work, route planning, local coordination, travel operations"
};

const process = [
  { number: "01", title: "Read the brief", text: "We start with purpose, dates, group composition, arrival point, route ideas and the conditions that cannot move. For church, chama, corporate, school, and NGO programmes, the objective is part of the brief." },
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

const expertise = [
  { title: "Route planning and sequencing", text: "Multi-site movements, remote access, timing windows, and realistic road legs across Kenya." },
  { title: "Church & religious group travel", text: "Retreats, conferences, mission trips, and pilgrimages planned around spiritual objectives, group composition, and pastoral responsibilities." },
  { title: "Chama & investment group travel", text: "Transparent costing, member-benefit planning, strategic retreats, and educational tours that respect group finances and approval processes." },
  { title: "Corporate & office travel", text: "Team building, end-of-year celebrations, incentive travel, conference travel, and strategy retreats aligned to business purpose and professional standards." },
  { title: "Schools & education programmes", text: "Curriculum alignment, field site selection, student standards, supervision planning, and local facilitation." },
  { title: "NGO field logistics", text: "Equipment coordination, security-aware movement, multi-site handovers, and contingency planning for remote access." },
  { title: "Safari and coast travel", text: "Wildlife route timing, park access, coastal transfers, and leisure group management." }
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

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Team expertise" number="03" /><div><h2>What we bring to the Kenya-side brief.</h2><p>Our team has experience across education, NGO, and leisure travel. We understand the operating requirements of each type of programme.</p></div></div>
        <div className="checklist">
          {expertise.map((item, index) => <div className="checklist__item" key={item.title}><strong>0{index + 1}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Operating standards" number="04" /><div><h2>What we build into every route.</h2><p>These are the minimum standards we apply to education groups, NGO programmes, and leisure travel. They are not marketing claims—they are the operating baseline.</p></div></div>
          <div className="checklist">
            <div className="checklist__item"><strong>Vehicle standards</strong><div><p>Vehicles are inspected before each trip. Spare tyres, tools, and emergency equipment are carried. Driver experience is matched to route difficulty. Vehicle capacity is never exceeded.</p></div></div>
            <div className="checklist__item"><strong>Communication</strong><div><p>Emergency contact numbers are provided for all active programmes. Check-in schedule is agreed before movement begins. Communication plan accounts for coverage gaps in remote areas.</p></div></div>
            <div className="checklist__item"><strong>Accommodation</strong><div><p>Rooming lists confirmed before arrival. Dietary requirements communicated in writing. Security arrangements verified where relevant. Proximity to next movement considered in selection.</p></div></div>
            <div className="checklist__item"><strong>Contingency</strong><div><p>Alternative routes identified for remote movements. Medical facility access documented. Evacuation planning for high-risk routes. Weather monitoring during field operations.</p></div></div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Company history" number="05" /><div><h2>Kenya-based, operationally focused.</h2><p>67 Tours &amp; Travel was founded to address a gap in Kenya's tourism sector: organisations that need field movement to be as dependable as their programme objectives. We work with schools, universities, NGOs, and groups that value operational clarity over marketing promises.</p></div></div>
        <div className="route-section__body">
          <p>The company is based in Kenya. All route planning, coordination, and field operations are managed from here. This means the decisions about access, timing, and contingency are made by people who understand the local conditions, not by a remote office.</p>
          <p className="history-note"><em>Note: Specific founding date, founder names, and company milestones will be added here as they are verified for accuracy. No fabricated history will appear.</em></p>
        </div>
      </section>

      <section className="certifications-placeholder container">
        <div className="route-section__header"><RouteTick label="Certifications &amp; partnerships" /><div><h2>Formal recognition and industry relationships.</h2><p>This section is reserved for verified certifications, industry memberships, and partnership agreements. No unverified credentials will be listed.</p></div></div>
        <div className="trust-placeholder">
          <p><em>[Tourism Board Registration — For official tourism authority registration details]</em></p>
          <p><em>[Industry Association Memberships — For relevant professional association memberships]</em></p>
          <p><em>[Conservation Organisation Partnerships — For verified partnerships with conservation organisations]</em></p>
          <p><em>[Safety Certifications — For any relevant safety or transport certifications]</em></p>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="04" />
        <div className="cta-strip__action"><div><h2>Bring us the part of Kenya you need to make workable.</h2><p>We will start with the purpose, the route, the group and the constraints that matter.</p></div><Link href="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
