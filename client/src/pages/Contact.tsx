// Design note: Field Notes Modernism — the quote page is quiet, useful, and form-led, asking only for the information needed to respond accurately.

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { RouteTick } from "@/components/SiteShell";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Request a Kenya Travel Quote",
  "description": "Share your dates, group, route and programme needs so 67 Tours & Travel can prepare an accurate Kenya quote for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel.",
  "url": "https://67tours.co.ke/contact",
  "publisher": {
    "@type": "TravelAgency",
    "name": "67 Tours & Travel",
    "url": "https://67tours.co.ke"
  }
};

const faqs = [
  {
    question: "What information do you need to provide a quote?",
    answer: "We need dates, group size, arrival point, route ideas, and the programme or travel objective. For church groups, include the type of gathering and any specific needs. For chamas, include budget range and trip type. For corporate groups, include the business objective. For schools, include age range and curriculum theme. For NGO programmes, include field sites and equipment. For safari and coast, include preferred regions and pace."
  },
  {
    question: "How long does it take to receive a response?",
    answer: "We aim to respond within 2–3 business days. Complex multi-site programmes or remote access routes may take longer to plan accurately."
  },
  {
    question: "Can you work with flexible dates?",
    answer: "Yes, we can provide options for different date ranges. Flexible dates often allow for better pricing and route planning."
  },
  {
    question: "Do you work with international groups?",
    answer: "Yes, we work with international education groups, NGOs, and leisure travellers. We coordinate Kenya-side movement and can advise on arrival logistics."
  },
  {
    question: "What happens after I submit the form?",
    answer: "We review your brief and may ask follow-up questions to clarify the route or requirements. Once we have enough information, we provide a detailed proposal with route options, costs, and timing."
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Request a Kenya Travel Quote | 67 Tours"
        description="Share your dates, group, route and programme needs so 67 Tours & Travel can prepare an accurate Kenya quote for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel."
        canonical="https://67tours.co.ke/contact"
        structuredData={structuredData}
      />
      <section className="page-header">
        <div className="page-header__copy">
          <RouteTick label="Contact / request a quote" number="01" />
          <h1>Start with the route and the responsibility.</h1>
          <p>Tell us what the trip needs to achieve, who is travelling and which parts of Kenya are involved. The more specific the brief, the more useful the first response.</p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-copy">
          <RouteTick label="What helps us plan" number="02" />
          <h2>Give us enough ground to work from.</h2>
          <p>You do not need to have the full itinerary settled. Dates, group size, arrival point, route ideas and the programme or travel objective are enough to start testing the movement.</p>
          <div className="contact-details">
            <p><strong>For church &amp; religious groups</strong>Include the type of gathering (retreat, conference, mission trip, pilgrimage), dates, group size, rooming needs, dietary requirements, accessibility considerations and any specific programme requirements.</p>
            <p><strong>For chamas &amp; investment groups</strong>Include budget range, group size, trip type (educational tour, strategic planning retreat, member appreciation, project site visit), preferred destinations and any specific member needs or approval processes.</p>
            <p><strong>For corporate &amp; office groups</strong>Include the business objective (team building, celebration, strategy retreat, conference, incentive), dates, group size, budget range, meeting facility requirements, activity preferences and any policy compliance needs.</p>
            <p><strong>For schools &amp; education groups</strong>Include age range, curriculum or research theme, supervision model and any student accommodation or dietary requirements.</p>
            <p><strong>For NGO programmes</strong>Include counties or field sites, team size, equipment, fixed dates, access concerns and the communication requirements for the movement.</p>
            <p><strong>For safari and coast travel</strong>Include arrival point, preferred regions, group composition, pace and how much time you want to spend moving between stops.</p>
          </div>
        </div>

        <div className="quote-form">
          {submitted ? (
            <div className="form-success"><Check size={20} color="#d96a32" /><h3>Brief received.</h3><p>Your route details are captured for this preview. In a live deployment, this is where the enquiry would be sent to the 67 Tours &amp; Travel team for a response.</p></div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="quote-form__heading">Request a route-specific quote</h2>
              <div className="form-grid">
                <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Full name" required /></div>
                <div className="form-field"><label htmlFor="organisation">Organisation</label><input id="organisation" name="organisation" placeholder="School, NGO or group" /></div>
                <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="name@organisation.org" required /></div>
                <div className="form-field"><label htmlFor="travel-type">Trip type</label><select id="travel-type" name="travel-type" defaultValue=""><option value="" disabled>Select one</option><option value="church">Church &amp; religious group</option><option value="chama">Chama &amp; investment group</option><option value="corporate">Corporate &amp; office</option><option value="schools">Schools &amp; education</option><option value="ngo">NGO field logistics</option><option value="safari">Safari &amp; coast travel</option><option value="other">A combination</option></select></div>
                <div className="form-field"><label htmlFor="dates">Dates or date range</label><input id="dates" name="dates" placeholder="e.g. July 2027 / flexible" /></div>
                <div className="form-field"><label htmlFor="group">Group size</label><input id="group" name="group" placeholder="Approximate number" /></div>
                <div className="form-field form-field--full"><label htmlFor="route">Route and brief</label><textarea id="route" name="route" placeholder="Where are you starting, which places or field sites are involved, and what does the trip need to achieve?" required /></div>
              </div>
              <p className="form-note">This form is a front-end enquiry flow for the website preview. Connect it to your preferred inbox or CRM before publishing.</p>
              <button className="form-submit" type="submit">Send the brief <ArrowUpRight size={16} /></button>
            </form>
          )}
        </div>
      </section>

      <section className="route-section container">
        <div className="route-section__header"><RouteTick label="Frequently asked questions" number="03" /><div><h2>Questions about the quote process.</h2><p>Practical answers about what we need, timing, and what happens after you submit.</p></div></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
