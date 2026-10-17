import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { Lines, Media, Reveal } from "@/components/Motion";
import { Arrow } from "@/components/Icons";
import { WaitlistButton } from "@/components/Waitlist";
import { INTERVENTIONS, PILLARS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About statement */}
      <section className="section on-light">
        <div className="wrap statement">
          <Reveal className="l"><span className="label">About Kuhl-Cher</span></Reveal>
          <div className="r">
            <Lines
              lines={[
                <>What decides how a company responds</>,
                <>to disruption, and whether it emerges</>,
                <>stronger, isn’t its strategy. <em>It’s its culture.</em></>,
              ]}
            />
            <Reveal delay={0.2}>
              <Link href="/about" className="btn btn-outline">Read our story <Arrow /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <Lines lines={["The four pillars"]} className="h2-sm" />
            <Reveal delay={0.1}><p>Culture is the umbrella. These are the four places it shows up.</p></Reveal>
          </div>
          <div className="pillar-cards">
            {PILLARS.map((p, k) => (
              <Reveal key={p.name} delay={k * 0.08}>
                <Link href="/pillars" className="pillar-card hover-zoom">
                  <Media src={p.image} alt={p.name} className="" sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                  <div className="t">
                    <span className="n">{p.n}</span>
                    <h3>{p.name}</h3>
                    <p className="body" style={{ fontSize: 16 }}>{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="section" style={{ paddingTop: "clamp(60px, 7vw, 100px)" }}>
        <div className="wrap">
          <Reveal className="sand-box">
            <div className="head-row">
              <Lines lines={["Three ways we make", "culture operational."]} className="h2-sm" />
              <Link href="/interventions" className="btn btn-outline">All interventions <Arrow /></Link>
            </div>
            <div className="cards3">
              {INTERVENTIONS.map((it, k) => (
                <Reveal key={it.id} delay={k * 0.1}>
                  <Link href={`/interventions#${it.id}`} className="icard hover-zoom">
                    <Media src={it.image} alt={it.name} parallax={false} sizes="(max-width: 1000px) 100vw, 33vw" />
                    <div className="t">
                      <span className="pill">{it.tag}</span>
                      <h3>{it.name}</h3>
                      <p className="body" style={{ fontSize: 16 }}>{it.short}</p>
                      <span className="more">Learn more <Arrow size={16} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* Diagnostic */}
      <section className="section" style={{ paddingTop: "clamp(80px, 9vw, 120px)" }}>
        <div className="wrap">
          <Reveal className="band">
            <div className="bg"><Media src="/images/office.webp" alt="" className="" radius={0} sizes="100vw" /></div>
            <div className="shade" />
            <div className="c">
              <span className="pill gold">Coming soon</span>
              <Lines lines={[<>Is your culture a source of resilience, or a hidden <em>vulnerability</em>?</>]} />
              <p>The Culture Resilience Index (CRI). A short, free assessment of how ready your culture is for disruption.</p>
              <div><WaitlistButton className="btn btn-light">Join the waitlist <Arrow /></WaitlistButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
