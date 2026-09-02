// Design note: Field Notes Modernism — Insights is a structured content hub for field notes, route observations, and practical travel writing.

import { useState } from "react";
import { RouteTick, SectionIntro, PageHeader } from "@/components/SiteShell";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Kenya Operations Insights",
  "description": "Practical articles on Kenya church group travel, chama travel, corporate travel, school study tours, NGO field logistics, safari planning, and seasonal considerations for programme coordinators.",
  "url": "https://67tours.co.ke/insights",
  "publisher": {
    "@type": "TravelAgency",
    "name": "67 Tours & Travel",
    "url": "https://67tours.co.ke"
  }
};

import { Link } from "wouter";
import { PageHeader } from "@/components/SiteShell";

const articleCategories = [
  {
    id: "church-religious",
    name: "Church & Religious Groups",
    description: "Retreat planning, mission trip logistics, pilgrimage routes, and conference travel for congregations and ministry teams.",
  },
  {
    id: "chamas",
    name: "Chamas & Investment Groups",
    description: "Budgeting for group travel, member-benefit planning, educational tours, and strategic retreats for Kenyan investment groups.",
  },
  {
    id: "corporate",
    name: "Corporate & Office",
    description: "Team-building logistics, end-of-year planning, incentive travel, conference coordination, and strategy retreats for organisations.",
  },
  {
    id: "education-planning",
    name: "Schools & Education",
    description: "Curriculum fit, destination selection, student supervision, risk assessment support, and seasonal considerations for study tours.",
  },
  {
    id: "ngo-logistics",
    name: "NGO Field Logistics",
    description: "Remote access planning, multi-site coordination, communication in the field, equipment planning, and contingency for field programmes.",
  },
  {
    id: "safari-coast",
    name: "Safari & Coast",
    description: "Seasonal wildlife patterns, transfer timing, route structure, coastal activity planning, and group pace for leisure travel.",
  },
  {
    id: "kenya-context",
    name: "Kenya Context",
    description: "Weather and seasons, cultural considerations, conservation and development context, and practical travel information.",
  },
];

const recommendedArticles = [
  {
    id: 1,
    category: "education-planning",
    title: "Planning Kenya Study Tours Around the Academic Calendar",
    brief: "Guide education coordinators on how to align Kenya trips with academic terms, exam schedules, and curriculum requirements. Cover optimal booking windows, how to build pre-trip preparation into the syllabus, and post-trip integration.",
    targetReader: "School administrators, university programme coordinators",
    status: "available",
    content: `# Planning Kenya Study Tours Around the Academic Calendar

The most successful Kenya education programmes are those that align with the academic rhythm rather than compete with it. When the trip is positioned as part of the curriculum rather than a disruption, students, parents, and administrators all see the value more clearly.

## Booking Windows

For schools and universities, the optimal booking window is 6-9 months before travel. This allows time for:
- Curriculum integration planning
- Parent information sessions
- Visa processing (where required)
- Academic scheduling around exam periods

## Pre-Trip Preparation

Build Kenya-specific learning into the term before departure:
- Assign readings on Kenyan history, ecology, or conservation
- Have students research specific sites they will visit
- Introduce field observation methods that will be used
- Set clear learning objectives for each destination

## Post-Trip Integration

The return to the classroom is where the field experience becomes academic work:
- Debrief sessions comparing expectations with reality
- Field reports or presentations tied to curriculum outcomes
- Data analysis from field observations
- Reflection papers connecting experience to learning objectives

## Seasonal Considerations

Kenya's academic calendar differs from many international systems. Plan around:
- Kenyan school terms (for potential school exchange visits)
- Exam periods in both home and host institutions
- Weather patterns that affect field activities
- Peak tourist seasons that may impact site access

When the trip is framed as an extension of classroom learning rather than a standalone experience, the educational outcomes are stronger and the administrative resistance is lower.`
  },
  {
    id: 2,
    category: "ngo-logistics",
    title: "Remote Access in Northern Kenya: What Programme Coordinators Need to Know",
    brief: "Explain the operational realities of working in northern Kenya and Turkana. Cover road conditions, fuel planning, communication gaps, heat management, and the specific contingency planning required for remote field work.",
    targetReader: "NGO programme coordinators, field managers",
    status: "available",
    content: `# Remote Access in Northern Kenya: What Programme Coordinators Need to Know

Northern Kenya and Turkana present a different operating environment from the main safari circuits. The logistics that work in Maasai Mara or Amboseli will not work here. Programme coordinators need to understand the specific challenges before committing to field work in this region.

## Road Conditions

- Roads are often unsealed and can become impassable after rain
- Distance estimates on maps do not account for actual travel time
- Vehicle recovery is difficult in remote areas
- Spare parts and mechanical support are limited

## Fuel Planning

- Fuel stations are sparse in northern Kenya
- Carry reserve fuel for remote movements
- Plan fuel consumption conservatively—off-road driving uses significantly more
- Identify fuel points along the route before departure

## Communication Gaps

- Mobile coverage is intermittent or non-existent in many areas
- Satellite communication may be necessary for some programmes
- Establish check-in schedules that account for coverage gaps
- Have a communication plan for when contact is lost

## Heat Management

- Temperatures in northern Kenya can exceed 40°C
- Schedule activities for cooler parts of the day
- Plan for more frequent rest stops
- Ensure adequate water and shade for field teams
- Heat exhaustion is a real risk that must be planned for

## Contingency Planning

Remote field work requires more robust contingency planning:
- Alternative routes identified in advance
- Medical evacuation plans with realistic time estimates
- Additional days built into the schedule for delays
- Local contacts who can assist if vehicles break down

## Local Context

- Community relations are critical in remote areas
- Respect local customs and land use patterns
- Engage local guides who know the terrain and communities
- Security considerations are different from tourist areas

Northern Kenya offers valuable field opportunities, but only when the logistics are realistic and the contingency planning is thorough.`
  },
  {
    id: 3,
    category: "education-planning",
    title: "Seasonal Planning for Kenya Education Groups",
    brief: "Break down Kenya's seasons from an education programme perspective. Cover which destinations work best in which seasons, and how to build seasonal flexibility into the programme.",
    targetReader: "Education coordinators, teachers leading trips",
    status: "available",
    content: `# Seasonal Planning for Kenya Education Groups

Kenya's climate is more complex than the simple "dry season/wet season" binary that many travel resources suggest. For education programmes, the seasonal considerations affect not just comfort but access, learning opportunities, and programme feasibility.

## The Long Dry Season (January-March)

**Best for:** Wildlife viewing in Maasai Mara, Amboseli
**Education considerations:**
- Wildlife concentrations around water sources make for reliable observation
- Road conditions are generally good
- Heat can be intense in low-lying areas
- Good for field work that requires clear visibility

## The Long Rains (April-May)

**Best for:** Nairobi-based programmes, Rift Valley
**Education considerations:**
- Some roads become impassable
- Northern Kenya should be avoided during this period
- Good time for urban studies, museum visits, and indoor learning
- Accommodation rates are lower
- Fewer tourists mean better access to sites

## The Short Dry Season (June-October)

**Best for:** All destinations, peak season
**Education considerations:**
- Peak tourist season—sites are crowded
- Maasai Mara migration is a major draw
- Book well in advance
- Good weather across most of the country
- Ideal for field work that requires outdoor activities

## The Short Rains (November-December)

**Best for:** Coastal programmes, Nairobi
**Education considerations:
- Rains are less predictable than the long rains
- Coast is still accessible and less crowded
- Good for marine studies and coastal ecology
- Transitional period—some uncertainty in planning

## Building Seasonal Flexibility

Education programmes should have contingency plans for seasonal variations:
- Alternative indoor activities for rainy days
- Flexible routing that can be adjusted based on conditions
- Buffer days in the schedule for weather delays
- Backup accommodation options

## Destination-Specific Seasonal Notes

**Northern Kenya:** Avoid during rainy seasons entirely
**Coast:** Accessible year-round, but consider heat and tides
**Rift Valley:** Good in dry seasons, some roads problematic in rains
**Nairobi:** Year-round destination, focus shifts to indoor activities in rains

The key is not to avoid seasons entirely, but to match the programme objectives to the seasonal realities of each destination.`
  },
  {
    id: 4,
    category: "ngo-logistics",
    title: "Communication Rhythm for Multi-Site NGO Programmes",
    brief: "Explain how to establish and maintain useful communication patterns when teams are moving across multiple sites. Cover check-in schedules, escalation protocols, and information flow between field and headquarters.",
    targetReader: "NGO programme coordinators, field managers",
    status: "coming-soon",
  },
  {
    id: 5,
    category: "education-planning",
    title: "Student Supervision Models for Kenya Study Tours",
    brief: "Compare different supervision models for student groups travelling to Kenya. Cover legal responsibility, practical supervision on the ground, and how to match the model to the age group and programme type.",
    targetReader: "School administrators, risk managers",
    status: "coming-soon",
  },
  {
    id: 6,
    category: "safari-coast",
    title: "Safari Route Planning: Transfer Time vs. Time on the Ground",
    brief: "Address the common mistake of over-stuffing safari itineraries. Explain how to balance transfer time with actual game-drive time, and how to build rest days into safari schedules.",
    targetReader: "Safari planners, group leaders",
    status: "coming-soon",
  },
  {
    id: 7,
    category: "safari-coast",
    title: "Coastal Programme Planning: Tides, Heat, and Marine Activities",
    brief: "Explain how to plan coastal programmes around tide patterns, heat, and marine conditions. Cover which activities work at high vs. low tide, and how to structure the day around heat.",
    targetReader: "Education coordinators, leisure planners",
    status: "coming-soon",
  },
];

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<typeof recommendedArticles[0] | null>(null);

  if (selectedArticle) {
    return (
      <>
        <SEO
          title={`${selectedArticle.title} | 67 Tours`}
          description={selectedArticle.brief}
          canonical="https://67tours.co.ke/insights"
          structuredData={structuredData}
        />
        <PageHeader
          eyebrow="INSIGHTS / ARTICLE"
          title={selectedArticle.title}
          intro={selectedArticle.brief}
        />
        <section className="article-content container">
          <button className="text-link" onClick={() => setSelectedArticle(null)}>
            ← Back to articles
          </button>
          <div className="article-body">
            {selectedArticle.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index}>{line.slice(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index}>{line.slice(3)}</h2>;
              }
              if (line.startsWith('**Best for:**')) {
                return <p key={index}><strong>{line.slice(12)}</strong></p>;
              }
              if (line.startsWith('**Education considerations:**')) {
                return <p key={index}><strong>{line.slice(27)}</strong></p>;
              }
              if (line.startsWith('- ')) {
                return <li key={index}>{line.slice(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index}>{line}</p>;
            })}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Kenya Operations Insights | 67 Tours & Travel"
        description="Practical articles on Kenya church group travel, chama travel, corporate travel, school study tours, NGO field logistics, safari planning, and seasonal considerations for programme coordinators."
        canonical="https://67tours.co.ke/insights"
        structuredData={structuredData}
      />
      <PageHeader
        eyebrow="INSIGHTS / KENYA OPERATIONS"
        title="Practical information for programme coordinators and group planners."
        intro="These articles address the questions that come up when planning Kenya-side movement for church groups, chamas, corporate offices, schools, NGOs, and safari travellers: seasonal considerations, logistics, preparation, and the operational realities of field work and study tours."
      />

      <section className="page-intro container">
        <aside className="page-rail">
          <RouteTick label="Content focus" number="01" />
          <p className="page-rail__note">We write for the people who actually plan and coordinate these trips, not for casual browsers.</p>
        </aside>
        <div className="page-intro__body">
          <p>The insights here are organised by the questions church administrators, chama officials, HR managers, school heads, and NGO coordinators actually ask. There is no marketing content—only practical information that helps with route planning, risk assessment, and programme design.</p>
          <p>Articles are categorised by programme type and topic. Each article is written with specific operational knowledge: routes, access, group movement realities, and seasonal factors.</p>
        </div>
      </section>

      <section className="article-categories container">
        <div className="route-section__header">
          <RouteTick label="Article Categories" number="02" />
          <div>
            <h2>Browse by topic.</h2>
            <p>Find articles relevant to your programme type and planning phase.</p>
          </div>
        </div>
        <div className="category-grid">
          {articleCategories.map((category) => (
            <div key={category.id} className="category-card">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-articles container">
        <div className="route-section__header">
          <RouteTick label="Recommended Articles" number="03" />
            <div>
              <h2>Articles in development.</h2>
              <p>These are the topics we are currently developing based on the questions church administrators, chama officials, HR managers, school heads, and NGO coordinators ask most often.</p>
            </div>
        </div>
        <div className="article-list">
          {recommendedArticles.map((article) => (
            <div key={article.id} className="article-card">
              <span className="article-card__category">{articleCategories.find(c => c.id === article.category)?.name}</span>
              <h3>{article.title}</h3>
              <p>{article.brief}</p>
              <div className="article-card__meta">
                <span>Target: {article.targetReader}</span>
                <span className={`article-card__status ${article.status === "available" ? "available" : "coming-soon"}`}>{article.status === "coming-soon" ? "Coming soon" : article.status === "available" ? "Read article" : "Available"}</span>
              </div>
              {article.status === "available" && (
                <button 
                  className="text-link" 
                  onClick={() => setSelectedArticle(article)}
                >
                  Read full article <ArrowUpRight size={15} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section container">
        <div className="route-section__header">
          <RouteTick label="Stay Informed" number="04" />
          <div>
            <h2>Get practical updates, not marketing content.</h2>
            <p>We send occasional updates on seasonal considerations, route access changes, and practical information for church groups, chamas, corporate offices, schools, NGOs, and safari travellers.</p>
          </div>
        </div>
        <div className="newsletter-form">
          <form>
            <div className="form-field">
              <label htmlFor="insights-email">Email address</label>
              <input id="insights-email" name="email" type="email" placeholder="name@organisation.org" required />
            </div>
            <div className="form-field">
              <label htmlFor="insights-type">Organisation type</label>
              <select id="insights-type" name="type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="church">Church & religious group</option>
                <option value="chama">Chama & investment group</option>
                <option value="corporate">Corporate & office</option>
                <option value="schools">Schools & education</option>
                <option value="ngo">NGO / Development / Research</option>
                <option value="leisure">Safari / Coast / Leisure</option>
              </select>
            </div>
            <button className="form-submit" type="submit">Subscribe to insights</button>
            <p className="form-note">We respect your privacy. Unsubscribe at any time. No marketing fluff—useful information only.</p>
          </form>
        </div>
      </section>

      <section className="cta-strip container">
        <RouteTick label="Next step" number="05" />
        <div className="cta-strip__action">
          <div>
            <h2>Have a planning question not covered here?</h2>
            <p>Contact us directly with your specific programme requirements.</p>
          </div>
          <Link to="/contact" className="hero-cta">Request a quote <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
