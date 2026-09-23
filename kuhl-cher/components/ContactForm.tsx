"use client";
import { useEffect, useState } from "react";
import { Arrow } from "./Icons";

const TOPICS: Record<string, string> = {
  csi: "The C.S.I Course",
  convergence: "The Convergence Seminar",
  advisory: "Culture Advisory",
  diagnostic: "The Culture Diagnostic",
};

export default function ContactForm() {
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && TOPICS[t]) setTopic(TOPICS[t]);
  }, []);
  if (sent) return <div className="success">Thank you. We’ve received your message and will be in touch shortly.</div>;
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to an email service (e.g. Formspree or Resend) so messages reach the inbox.
        setSent(true);
      }}
    >
      <div className="field"><label htmlFor="c-name">Name *</label><input id="c-name" name="name" required autoComplete="name" placeholder="Your name" /></div>
      <div className="field"><label htmlFor="c-org">Organization</label><input id="c-org" name="organization" autoComplete="organization" placeholder="Company name" /></div>
      <div className="field"><label htmlFor="c-role">Role</label><input id="c-role" name="role" autoComplete="organization-title" placeholder="Your role" /></div>
      <div className="field"><label htmlFor="c-email">Email *</label><input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
      <div className="field">
        <label htmlFor="c-size">Company size</label>
        <select id="c-size" name="size" defaultValue="">
          <option value="">Select…</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201–1,000</option><option>1,000+</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-topic">What’s prompting you to reach out?</label>
        <select id="c-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Select…</option>
          {Object.values(TOPICS).map((t) => <option key={t}>{t}</option>)}
          <option>Other</option>
        </select>
      </div>
      <div className="field full"><label htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" placeholder="Tell us where your organization feels the strain." /></div>
      <div className="full"><button className="btn btn-dark" type="submit">Send message <Arrow /></button></div>
    </form>
  );
}
