// Design note: Field Notes Modernism — church travel is pastoral and practical; the route must serve the spiritual objective, the group's needs, and the responsibility of the organisers.

import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { PageHeader, RouteTick } from "@/components/SiteShell";
import { imageUrls } from "@/lib/siteData";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Church & Religious Group Travel",
  "description": "Kenya church group travel: retreats, conferences, pilgrimages and mission trips planned around the spiritual and practical needs of congregations and ministry teams.",
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

const checklist = [
  { title: "Spiritual purpose alignment", text: "Can the travel plan be shaped around the retreat, conference, or mission objective rather than treating it as a sightseeing tour?" },
  { title: "Group composition reality", text: "Are rooming arrangements, family groupings, leadership accommodation, youth supervision, and elderly member needs planned into the route?" },
  { title: "Facility suitability", text: "Does the venue or retreat centre actually support worship, teaching spaces, group meals, and the specific needs of your programme?" },
  { title: "Budget transparency", text: "Are costs clear, with no hidden fees, and can the pricing work within church budget cycles and member payment schedules?" },
  { title: "Responsible travel", text: "Does the operator understand the local context of mission destinations, respect host communities, and plan travel that does not harm the relationships you are building?" },
  { title: "Contingency planning", text: "What happens if transport fails, if a venue issue arises, or if the group needs to adjust the programme for pastoral reasons?" },
];

const destinations = [
  { code: "01", name: "Rift Valley retreat centres", note: "Naivasha, Nakuru, and the wider Rift Valley offer numerous retreat centres with meeting spaces, accommodation for groups, and environments suitable for reflection and fellowship. Road access from Nairobi is manageable for large groups." },
  { code: "02", name: "Coastal prayer and retreat venues", note: "The coast, particularly around Mombasa, Malindi, and Watamu, provides venues for church retreats with a different environment. The longer road journey or flight needs to be factored into the plan." },
  { code: "03", name: "Western Kenya mission fields", note: "Kisumu, Kakamega, and surrounding regions are common destinations for mission trips and outreach work. Multi-site movements, local church connections, and community engagement shape the route." },
  { code: "04", name: "Mount Kenya region", note: "Retreat centres around Mount Kenya and Nanyuki offer cooler climates and mountain environments suitable for leadership retreats and spiritual gatherings." },
  { code: "05", name: "Upcountry church networks", note: "Travel to support church networks in regions like Meru, Embu, and central Kenya requires coordination with local churches, accommodation that works for visiting groups, and realistic travel times." },
];

const faqs = [
  {
    question: "How far in advance should we plan a church trip?",
    answer: "Most church groups benefit from planning 6–12 months ahead. This allows time for member fundraising, budgeting, venue booking, and coordinating with host churches or communities. Shorter lead times are possible depending on the destination and flexibility."
  },
  {
    question: "Can you handle large church groups?",
    answer: "Yes. We work with groups ranging from small leadership teams to large congregations. Large groups require more coordination—multiple vehicles, rooming management, meal planning, and venue capacity—but the operating principles are the same."
  },
  {
    question: "How do you handle payment for church groups?",
    answer: "We can structure payment terms that work with church budget cycles and member payment schedules. This may include deposits, progress payments, and final payment timing that aligns with when members have contributed."
  },
  {
    question: "What about mission trips to remote areas?",
    answer: "We have experience with mission trips to rural and remote areas. These routes require more planning: road conditions, local coordination, equipment transport, and contingency planning. We work with the mission team to understand the specific context and requirements."
  },
  {
    question: "Can you help with venue selection for retreats?",
    answer: "Yes. We can suggest retreat centres and venues that match your group size, programme needs, and budget. We consider rooming, meeting spaces, meal facilities, accessibility, and the environment that supports your spiritual objectives."
  },
  {
    question: "What happens if we need to cancel or postpone?",
    answer: "Cancellation terms depend on the venue and supplier policies. We clearly communicate these terms during the planning process. For pastoral reasons (e.g., bereavement in the church, emergency), we work with suppliers to find the most reasonable solution."
  }
];

export default function Church() {
  return (
    <>
      <SEO 
        title="Church Retreats & Mission Trips Kenya | 67 Tours"
        description="Kenya church group travel: retreats, conferences, pilgrimages and mission trips planned around the spiritual and practical needs of congregations and ministry teams."
        canonical="https://67tours.co.ke/church-religious"
        structuredData={structuredData}
      />
      <PageHeader eyebrow="Capability / 01" title="Church and religious group travel that respects the purpose." intro="You are organising a retreat, conference, mission trip, or pilgrimage. The travel plan needs to support the spiritual objective, the group's practical needs, and the responsibility you carry for people who are not just tourists—they are your congregation, members, or community." image={imageUrls.church} imageAlt="Church group gathered at a retreat centre with Mount Kenya in the background" />

      <section className="page-intro container">
        <aside className="page-rail"><RouteTick label="The brief" number="01" /><p className="page-rail__note">A church trip is not a holiday itinerary. It is a movement that needs to serve the spiritual and practical purpose.</p></aside>
        <div className="page-intro__body">
          <p>We work with Kenyan churches and religious groups on retreats, conferences, mission trips, pilgrimages, and leadership gatherings. The destination can be a retreat centre in the Rift Valley, a coastal prayer meeting, a mission field in western Kenya, or a pilgrimage site—but the route must work for the group size, the schedule, and the spiritual rhythm of the programme.</p>
          <p>We plan for the realities of church travel: rooming arrangements for families and leaders, dietary requirements, mobility considerations for elderly members, supervision for youth groups, and the need for spaces that can accommodate worship, teaching, and fellowship.</p>
          <h2>Types of church group travel</h2>
          <h3>Retreats and conferences</h3>
          <p>Church retreats often need accommodation that can host large groups, meeting spaces for sessions, meal facilities that can handle group dining, and locations that provide the right environment for reflection and fellowship. Rift Valley retreat centres, coastal venues, and upcountry locations are common choices.</p>
          <h3>Mission trips and outreach</h3>
          <p>Mission trips require movement to specific communities, often in areas where road conditions and access need careful planning. The route must account for the team, any equipment or supplies, the work schedule, and the host community's logistics.</p>
          <h3>Pilgrimages</h3>
          <p>Pilgrimage destinations in Kenya include holy sites, historical churches, and locations of spiritual significance. These trips need respectful timing, appropriate accommodation, and consideration for the spiritual rhythm of the journey.</p>
          <h3>Leadership training and church workers' gatherings</h3>
          <p>Leadership events often bring together pastors, elders, and church workers from multiple locations. The travel plan must coordinate arrivals from different parts of Kenya, provide suitable accommodation for leaders, and support the intensive schedule of training and networking.</p>
        </div>
      </section>

      <section className="info-band">
        <div className="container">
          <div className="info-band__header"><RouteTick label="Selection checklist" number="02" /><div><h2>What to test before you choose a travel partner for your church group.</h2><p>A useful travel partner should be able to answer these questions without using promotional language.</p></div></div>
          <div className="checklist">
            {checklist.map((item, index) => <div className="checklist__item" key={item.title}><strong>0{index + 1}</strong><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common church destinations" number="03" /><div><h2>Places where church groups actually go.</h2><p>These are not generic tourist destinations. They are locations Kenyan churches regularly use for retreats, conferences, mission work, and spiritual gatherings.</p></div></div>
        <div className="route-list">
          {destinations.map((destination) => <div className="route-list__row" key={destination.code}><span>{destination.code}</span><h3>{destination.name}</h3><p>{destination.note}</p><ArrowUpRight size={18} strokeWidth={1.7} /></div>)}
        </div>
      </section>

      <section className="photo-break">
        <div className="photo-break__copy"><RouteTick label="On the ground" number="04" /><h2>Local coordination should support the ministry, not add administrative burden.</h2><p>The right travel partner understands that church trips have a pastoral dimension. When a transport issue arises, when a member needs assistance, or when the programme needs to adjust for spiritual reasons, the response should be practical and respectful.</p></div>
        <div className="photo-break__image"><img src={imageUrls.church} alt="Church group gathered for retreat activities in Kenya" /></div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Common questions" number="05" /><div><h2>Practical answers for church administrators and group organisers.</h2><p>Questions about planning, payment, large groups, mission trips, and venue selection.</p></div></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Related destinations" number="05" /><div><h2>Destination detail pages for church programme planning.</h2><p>These route pages cover the access considerations, programme fit, and seasonal factors for the destinations Kenyan church groups use most.</p></div></div>
        <div className="checklist">
          <div className="checklist__item"><strong>01</strong><div><h3><Link href="/destinations/naivasha-nakuru" className="text-link">Naivasha &amp; Nakuru — Rift Valley retreat centres</Link></h3><p>Retreat centres, meeting spaces, and environments suitable for reflection and fellowship. Manageable road access from Nairobi for large groups.</p></div></div>
          <div className="checklist__item"><strong>02</strong><div><h3><Link href="/destinations/coast-watamu" className="text-link">Coast / Watamu — coastal prayer and retreat venues</Link></h3><p>Mombasa, Malindi, and Watamu provide venues for church retreats with a different environment. Longer road journey or flight needs to be factored into the plan.</p></div></div>
          <div className="checklist__item"><strong>03</strong><div><h3><Link href="/destinations/kakamega" className="text-link">Kakamega &amp; Western Kenya — mission fields</Link></h3><p>Kisumu, Kakamega, and surrounding regions are common destinations for mission trips and outreach work, with local church connections and community engagement shaping the route.</p></div></div>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="06" />
        <div className="cta-strip__action"><div><h2>Start with the purpose and the people.</h2><p>Share the type of gathering (retreat, conference, mission, pilgrimage), dates, group size, destination ideas, and any specific needs (rooming, dietary, accessibility).</p></div><Link href="/contact" className="hero-cta">Request a church group quote <ArrowUpRight size={17} /></Link></div>
      </section>
    </>
  );
}
