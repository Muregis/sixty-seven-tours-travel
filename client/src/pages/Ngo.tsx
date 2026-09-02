// Design note: Field Notes Modernism — a field-operations page with route logic, handovers, and calm accountability at the centre.

import { ArrowUpRight, Radio, Route as RouteIcon, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { destinations, imageUrls } from "@/lib/siteData";

const operatingRows = [
  { icon: RouteIcon, title: "Multi-site sequencing", text: "We translate the programme calendar into a movement plan: arrival points, site order, realistic road legs, overnight positions and the people responsible for each handover." },
  { icon: ShieldCheck, title: "Remote access planning", text: "Northern Kenya, Turkana and other remote routes need more than a distance estimate. Fuel, road condition, heat, rest, vehicle suitability and fallback options belong in the first plan." },
  { icon: Radio, title: "Communication rhythm", text: "A programme team should know who is moving, when the next update is due and what happens if the route changes. We keep the operating information clear and usable." },
];

export default function Ngo() {
  return (
    <>
      <PageHeader eyebrow="Capability / 02" title="Field logistics that respect the programme." intro="When a team is working across counties, the travel plan is part of programme delivery. We coordinate the Kenya-side movement so staff, equipment, site schedules and reporting commitments can stay aligned." image={imageUrls.ngo} imageAlt="Field staff reviewing a route beside a 4x4 in northern Kenya" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The problem" number="01" /><p className="page-rail__note">Remote work makes small planning gaps expensive. Build the margin before the vehicle leaves.</p></aside>
        <div className="page-intro__body">
          <p>NGO programmes rarely move in a straight line. A team may start in Nairobi, collect equipment, move through the Rift Valley, reach a remote field site, return to a regional hub and repeat the journey on a different schedule the following week.</p>
          <p>We work from the programme calendar and the field reality together. That means asking what the team is carrying, who needs to be at each site, which legs can be combined, what needs to be booked ahead and where the route needs room for the unexpected.</p>
          <h2>The operating plan is a programme tool.</h2>
          <h3>Before mobilisation</h3>
          <p>We review the brief, route, team composition, equipment, site sequence and timing. If a road leg or handover does not look realistic, it is better to identify that before the schedule is circulated.</p>
          <h3>During field movement</h3>
          <p>Updates should be brief and useful. Vehicle assignments, departure windows, pickup points, accommodation details and contact responsibilities are kept visible to the people who need them.</p>
          <h3>When the plan changes</h3>
          <p>Weather, road conditions, site availability or a delayed field activity can move the day. We help the team understand the decision, the next workable option and the effect on later movements.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Field coordination" number="02" /><div><h2>Three controls that keep the route usable.</h2><p>Good logistics is not extra administration. It gives a programme team fewer unknowns to manage.</p></div></div>
          <div className="checklist">
            {operatingRows.map((row, index) => { const Icon = row.icon; return <div className="checklist__item" key={row.title}><strong><Icon size={16} strokeWidth={1.7} /></strong><div><h3>{row.title}</h3><p>{row.text}</p></div></div>; })}
            <div className="checklist__item"><strong>04</strong><div><h3>Accountable handovers</h3><p>Every movement needs a known pickup, a named contact and a clear next point—not just a line on a spreadsheet.</p></div></div>
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common field corridors" number="03" /><div><h2>Routes shaped by access, not just distance.</h2><p>We consider what the road, the site and the programme require before assigning a vehicle or confirming a sequence.</p></div></div>
        <div className="route-list">
          {destinations.ngo.map((destination) => <div className="route-list__row" key={destination.code}><span>{destination.code}</span><h3>{destination.name}</h3><p>{destination.note}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="photo-break">
        <div className="photo-break__copy"><RouteTick label="Programme language" number="04" /><h2>Clear enough to brief. Flexible enough to work.</h2><p>We do not treat the movement plan as a fixed promise when field conditions are not fixed. The useful plan is the one that shows the assumptions, the decision points and the next action.</p></div>
        <div className="photo-break__image"><img src={imageUrls.ngo} alt="Field team pausing beside a vehicle on a northern Kenya route" /></div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action"><div><h2>Send the programme calendar and the hard-to-reach sites.</h2><p>We can start with the dates, counties, team size, equipment and any fixed site commitments.</p></div><Link href="/contact" className="hero-cta">Request a field quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
