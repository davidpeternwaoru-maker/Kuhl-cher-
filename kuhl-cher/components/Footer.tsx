"use client";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./Motion";
import { Arrow } from "./Icons";
import Consent from "./Consent";
import { COMPANY, CONTACT } from "@/lib/content";

export default function Footer() {
  const [sub, setSub] = useState(false);
  return (
    <footer className="footer on-light">
      <div className="wrap">
        <div className="top">
          <Reveal className="cta">
            <h2>Treat culture with the rigour of your balance sheet.</h2>
            <Link href="/contact" className="btn btn-deep">Start a conversation <Arrow /></Link>
          </Reveal>
          <Reveal className="col" delay={0.1}>
            <span className="label">Explore</span>
            <Link href="/about">About</Link>
            <Link href="/pillars">Pillars</Link>
            <Link href="/interventions">Interventions</Link>
            <Link href="/team">Team</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </Reveal>
          <Reveal className="col" delay={0.2}>
            <span className="label">Notes on culture</span>
            <span className="muted">One considered letter, occasionally. No noise.</span>
            {sub ? (
              <span style={{ fontWeight: 600, color: "var(--gold-deep)" }}>Thank you. You’re subscribed.</span>
            ) : (
              <form style={{ display: "flex", flexDirection: "column", gap: 12 }} onSubmit={(e) => { e.preventDefault(); setSub(true); }}>
                <div className="subscribe">
                  <label htmlFor="sub-email" className="sr-only">Email</label>
                  <input id="sub-email" type="email" required placeholder="Your email" autoComplete="email" />
                  <button type="submit">Subscribe</button>
                </div>
                <Consent id="sub-consent" text="I agree to receive occasional emails from Kuhl-Cher. I can unsubscribe at any time." />
              </form>
            )}
          </Reveal>
        </div>
        <Reveal y={60}>
          <div className="wordmark" aria-hidden="true">Kuhl-Cher</div>
        </Reveal>
        <div className="bottom">
          <span className="company">
            © {new Date().getFullYear()} {COMPANY.legalName || "Kuhl-Cher"}. All rights reserved.
            {COMPANY.rc && <> · {COMPANY.rc}</>}
            <br />
            {COMPANY.address || CONTACT.location} · <Link href="/privacy">Privacy &amp; cookies</Link>
          </span>
          <i>It’s how you say culture.</i>
        </div>
      </div>
    </footer>
  );
}
