"use client";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./Motion";
import { Arrow } from "./Icons";

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
          </Reveal>
          <Reveal className="col" delay={0.2}>
            <span className="label">Notes on culture</span>
            <span className="muted">One considered letter, occasionally. No noise.</span>
            {sub ? (
              <span style={{ fontWeight: 600, color: "var(--gold-deep)" }}>Thank you. You’re subscribed.</span>
            ) : (
              <form className="subscribe" onSubmit={(e) => { e.preventDefault(); setSub(true); }}>
                <label htmlFor="sub-email" className="sr-only">Email</label>
                <input id="sub-email" type="email" required placeholder="Your email" autoComplete="email" />
                <button type="submit">Subscribe</button>
              </form>
            )}
          </Reveal>
        </div>
        <Reveal y={60}>
          <div className="wordmark" aria-hidden="true">Kuhl-Cher</div>
        </Reveal>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Kuhl-Cher. All rights reserved.</span>
          <i>It’s how you say culture.</i>
        </div>
      </div>
    </footer>
  );
}
