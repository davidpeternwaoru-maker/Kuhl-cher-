"use client";
import { useState } from "react";
import { Reveal } from "./Motion";
import Consent from "./Consent";

export default function NewsletterBox() {
  const [done, setDone] = useState(false);
  return (
    <Reveal className="sand-box split" style={{ gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <h2 className="h2-sm">One considered letter, occasionally.</h2>
        <p className="body">Notes on culture, strategy, and resilience. No noise.</p>
      </div>
      {done ? (
        <div className="success">Thank you. You’re subscribed.</div>
      ) : (
        <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <div className="subscribe" style={{ padding: 6 }}>
            <label htmlFor="nl-email" className="sr-only">Email</label>
            <input id="nl-email" type="email" required placeholder="Your email" style={{ fontSize: 16, padding: "14px 18px" }} />
            <button type="submit" style={{ padding: "14px 24px", fontSize: 16 }}>Subscribe</button>
          </div>
          <Consent id="nl-consent" text="I agree to receive occasional emails from Kuhl-Cher. I can unsubscribe at any time." />
        </form>
      )}
    </Reveal>
  );
}
