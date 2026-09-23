import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Lines, Media, Reveal } from "@/components/Motion";
import { Arrow } from "@/components/Icons";
import { WaitlistButton } from "@/components/Waitlist";
import { PILLARS } from "@/lib/content";

export const metadata: Metadata = { title: "The Four Pillars" };

export default function Pillars() {
  return (
    <>
      <PageHero
        image="/images/people.webp"
        kicker="Kuhl-Cher’s four pillars"
        lines={[<>Culture is the <em>umbrella</em> that</>, <>shapes everything else.</>]}
      />

      <section className="section on-light">
        <div className="wrap statement">
          <Reveal className="l"><span className="label">Our view</span></Reveal>
          <div className="r">
            <Reveal>
              <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1.36 }}>
                We see culture not as one department’s responsibility, but as the invisible force that determines how an
                organization behaves under pressure. That force takes shape through four interconnected pillars.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap">
          {PILLARS.map((p, k) => (
            <div key={p.name} className={`prow ${k % 2 ? "rev" : ""}`}>
              <Media src={p.image} alt={p.name} />
              <div>
                <Reveal><div className="num">{p.n}</div></Reveal>
                <Lines as="h3" lines={[p.name]} />
                <Reveal delay={0.1}><span className="pill">{p.tagline}</span></Reveal>
                <Reveal delay={0.15}><p className="body" style={{ fontSize: 18 }}>{p.body}</p></Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(40px, 5vw, 70px)" }}>
        <div className="wrap">
          <Reveal className="quote-box">
            <span className="mk">“</span>
            <blockquote>
              Culture is not a fifth pillar. It is the force that holds the four in <em>alignment</em>, or quietly pulls them apart.
            </blockquote>
            <WaitlistButton className="btn btn-gold">See how your four pillars hold up <Arrow /></WaitlistButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
