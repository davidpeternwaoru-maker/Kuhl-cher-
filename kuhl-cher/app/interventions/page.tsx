import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubTabs from "@/components/SubTabs";
import { Lines, Media, Reveal } from "@/components/Motion";
import { Arrow } from "@/components/Icons";
import { WaitlistButton } from "@/components/Waitlist";

export const metadata: Metadata = { title: "Interventions" };

const TAKES = [
  "An honest, unscripted conversation with the featured founder about what didn’t work at first and what the company did differently.",
  "A first-hand account of how the founder’s organization used culture to survive real disruption. Not a theoretical framework, a lived case study.",
  "A working understanding of Kuhl-Cher’s four pillars (Process, People, Technology, and Finance) and how we turn culture from a value statement into something operational.",
  "A personal diagnostic of whether your own organization’s culture is already an asset, or quietly a liability.",
  "A well-documented action plan for immediate execution. Not a binder you shelve.",
];
const STEPS = [
  ["Diagnosis", "A structured assessment of how culture is currently showing up in decisions, behavior, and performance, and where it’s quietly working against the business."],
  ["Design", "Translating that diagnosis into a culture built deliberately around the organization’s actual strategy, not a generic template."],
  ["Implementation", "Embedding the governance, incentives, and operational structures that make culture something the organization lives, not just states."],
  ["Capability Transfer", "We train the client organization to own the new systems that sustain the culture."],
  ["Monitoring", "12-month performance tracking and optimization."],
];

export default function Interventions() {
  return (
    <>
      <PageHero
        image="/images/workshop.webp"
        kicker="Our interventions"
        lines={[<>Three ways we make</>, <>culture <em>operational</em>.</>]}
      />
      <div style={{ height: "clamp(40px, 5vw, 60px)" }} />
      <SubTabs />

      {/* C.S.I */}
      <section id="csi" className="anchor on-light" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal className="sand-box" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="split">
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <span className="pill" style={{ background: "var(--cream)" }}>A two-day intensive course for organizations</span>
                <Lines lines={["The Culture, Strategy, and Impact (C.S.I) Course"]} className="h2" />
                <p className="lead">Strategy tells you where to go. Culture determines whether you get there, and whether the organization survives what happens along the way.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact?topic=csi" className="btn btn-dark">Book this course <Arrow /></Link>
                  <Link href="/contact?topic=csi" className="btn btn-outline">Register interest</Link>
                </div>
              </div>
              <Media src="/images/workshop.webp" alt="Facilitator leading a workshop" height="clamp(300px, 32vw, 460px)" radius={20} />
            </div>
            <p className="body" style={{ maxWidth: 900 }}>
              Built for organizations ready to move beyond strategy documents that sit unread and cultures that exist only as slogans on a wall. Over two days, participants learn how to diagnose the actual culture operating inside their organization (not the one on paper), align that culture with strategic priorities, and translate both into measurable business impact.
            </p>
            <div className="two">
              <Reveal className="day">
                <span className="label">Day one</span>
                <h4>Diagnosis &amp; Alignment</h4>
                <p className="body" style={{ fontSize: 16 }}>Understanding how culture currently shows up in decisions, behaviors, and performance, and identifying where it’s quietly working against strategy rather than for it.</p>
              </Reveal>
              <Reveal className="day" delay={0.1}>
                <span className="label">Day two</span>
                <h4>Execution</h4>
                <p className="body" style={{ fontSize: 16 }}>Building the structures across people, process, technology, and finance that make culture a lived reality, and defining the metrics that prove it’s driving results.</p>
              </Reveal>
            </div>
            <div className="facts3">
              <div><span className="label">Who it’s for</span><p>Business owners, executives, HR and people leaders, and management teams looking to strengthen culture as a driver of resilience and performance.</p></div>
              <div><span className="label">Format</span><p>Two days, in-person or virtual; combining diagnostic exercises, case discussion, and direct application to participants’ own organizations.</p></div>
              <div><span className="label">The outcome</span><p>A practical framework for treating culture as a strategic asset, one that strengthens performance in stable times and becomes the difference-maker when disruption hits.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Convergence */}
      <section id="convergence" className="anchor" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal className="dark-box" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div className="split">
              <Media src="/images/seminar.webp" alt="Audience at a seminar" height="clamp(300px, 32vw, 440px)" radius={20} />
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <span className="pill dark">A one-day seminar for business owners and executives</span>
                <Lines lines={["The Convergence Seminar"]} className="h2" />
                <p className="lead" style={{ color: "rgba(251,249,245,.86)" }}>Every organization eventually faces a moment that threatens to break it — a market collapse, a lost anchor client, a crisis no strategy document accounted for. Some don’t survive it. Others come through stronger than before.</p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(251,249,245,.72)" }}>This seminar is built around the real story of one founder who did the latter, and used culture, not just strategy, as the mechanism that carried the organization through. You’ll hear that story firsthand, sit with what it actually took to make culture operational rather than aspirational, and leave with a concrete plan for your own organization.</p>
                <div><Link href="/contact?topic=convergence" className="btn btn-gold">Reserve a seat <Arrow /></Link></div>
              </div>
            </div>
            <span className="label gold">What you’ll walk away with</span>
            <div className="takes">
              {TAKES.map((t, k) => (
                <Reveal key={k} className="take" delay={k * 0.07}>
                  <b>{["i", "ii", "iii", "iv", "v"][k]}</b>
                  <p>{t}</p>
                </Reveal>
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", paddingTop: 8 }}>
              <span className="label gold" style={{ width: 140 }}>Who it’s for</span>
              <p style={{ flex: 1, minWidth: 260, fontSize: 16, lineHeight: 1.65, color: "rgba(251,249,245,.75)" }}>Business owners and executives who sense that their culture matters more than their strategy documents admit, and want a practical, honest look at what it takes to make that true.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advisory */}
      <section id="advisory" className="anchor on-light" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal className="sand-box" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="split">
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <span className="pill" style={{ background: "var(--cream)" }}>Ongoing advisory engagement</span>
                <Lines lines={["Culture Advisory"]} className="h2" />
                <p className="lead">We treat culture with the same rigour as your balance sheet.</p>
                <p className="body" style={{ fontSize: 16 }}>Most organizations manage their finances with discipline and their culture with hope. Our Culture Advisory closes that gap, bringing the same structure, evidence, and accountability to culture that leaders already expect from every other part of the business.</p>
                <p className="body" style={{ fontSize: 16 }}>We work with founders and executives to move culture from a values poster to a functioning strategic asset. That means diagnosing what’s actually happening beneath the surface, not what leadership believes is happening, and building the structures across people, process, technology, and finance that make culture something the organization can rely on, especially when disruption hits.</p>
                <div><Link href="/contact?topic=advisory" className="btn btn-dark">Start a conversation <Arrow /></Link></div>
              </div>
              <Media src="/images/advisory.webp" alt="Advisory conversation" height="clamp(320px, 36vw, 520px)" radius={20} />
            </div>
            <span className="label">Our methodology</span>
            <div className="steps">
              {STEPS.map(([t, d], k) => (
                <Reveal key={t} className="step" delay={k * 0.07}>
                  <span className="dot">{k + 1}</span>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="band">
            <div className="bg"><Media src="/images/office.webp" alt="" radius={0} sizes="100vw" /></div>
            <div className="shade" />
            <div className="c">
              <span className="pill gold">Coming soon</span>
              <Lines lines={["Assess your culture in minutes."]} />
              <p>The Kuhl-Cher Culture Diagnostic gives you a first honest read across the four pillars, before any engagement begins.</p>
              <div><WaitlistButton className="btn btn-light">Join the waitlist <Arrow /></WaitlistButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
