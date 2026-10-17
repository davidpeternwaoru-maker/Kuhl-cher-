import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Lines, Reveal } from "@/components/Motion";

export const metadata: Metadata = { title: "Our Team" };

function Portrait({ initials }: { initials: string }) {
  // Replace with <Image src="/images/aramide.jpg" .../> once portraits are available
  return (
    <Reveal className="portrait" y={50}>
      <span>{initials}</span>
    </Reveal>
  );
}

export default function Team() {
  return (
    <>
      <PageHero image="https://images.unsplash.com/photo-1739287088753-73a9b8b771bc?w=2000&q=80" kicker="Our team" lines={[<>The people who name it <em>correctly</em>.</>]} />

      <section className="section on-light">
        <div className="wrap person">
          <Portrait initials="AA" />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Reveal><span className="pill">Partner, Kuhl-Cher</span></Reveal>
            <Lines lines={["Aramide Akisanya"]} />
            <Reveal delay={0.1}>
              <p className="intro">Most culture problems get diagnosed as something else; a talent problem, a performance problem, a communication problem. Aramide’s work starts by <em>naming it correctly</em>.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="body" style={{ fontSize: 16 }}>She brings a rare combination to culture consulting: a decade in commercial and corporate banking, where she read organizations the way lenders do, through their numbers, their governance, and their capacity to withstand pressure, paired with formal organizational development expertise as a Certified Professional with the Institute of Organization Development (USA) and an Associate of the Chartered Institute of Personnel Management.</p>
              <p className="body" style={{ fontSize: 16 }}>That combination shapes how she diagnoses culture today: not as a set of stated values, but as the structure (financial, operational, and human) that determines whether an organization holds together under pressure or quietly comes apart.</p>
            </Reveal>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 48 }}>
          <Reveal><span className="label">She helps organizations do two things</span></Reveal>
          <div className="two" style={{ marginTop: 16 }}>
            <Reveal className="sand-box" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ fontSize: 26 }}>See their culture clearly</h3>
              <p className="body" style={{ fontSize: 16 }}>Using a structured diagnostic across people, process, technology, and finance to identify where culture is already a strategic asset and where it’s quietly undermining performance.</p>
            </Reveal>
            <Reveal className="sand-box" delay={0.1} style={{ padding: 32, display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 style={{ fontSize: 26 }}>Build culture that holds up under disruption</h3>
              <p className="body" style={{ fontSize: 16 }}>Working directly with leadership teams to embed the specific structures, governance, incentives, decision rights, and financial discipline that make culture operational rather than aspirational.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap person rev">
          <Portrait initials="PA" />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Reveal><span className="pill">Partner, Kuhl-Cher</span></Reveal>
            <Lines lines={["Precious Olaoluwa Adedeji"]} />
            <Reveal delay={0.1}>
              <p className="intro">A management and business development consultant with a proven track record of helping organizations, donor-backed projects, and growth-stage SMEs design scalable business models, access funding, and build internal systems that work.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="body" style={{ fontSize: 16 }}>Through collaborations with innovation hubs, development programmes, and private-sector clients, Olaolu has designed interventions that help entrepreneurs and growing businesses sharpen their models, prepare for investment, and build the systems that let them scale.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap person">
          <Portrait initials="NO" />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Reveal><span className="pill">Kuhl-Cher</span></Reveal>
            <Lines lines={["Nkem Ohen"]} />
            <Reveal delay={0.1}>
              <p className="intro">Full profile coming soon.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
