// Design note: Field Notes Modernism — the quote page is quiet, useful, and form-led, asking only for the information needed to respond accurately.

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { RouteTick } from "@/components/SiteShell";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
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
            <p><strong>For education groups</strong>Include age range, curriculum or research theme, supervision model and any student accommodation or dietary requirements.</p>
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
                <div className="form-field"><label htmlFor="travel-type">Trip type</label><select id="travel-type" name="travel-type" defaultValue=""><option value="" disabled>Select one</option><option value="education">Education &amp; study tour</option><option value="ngo">NGO field logistics</option><option value="safari">Safari &amp; coast travel</option><option value="other">A combination</option></select></div>
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
    </>
  );
}
