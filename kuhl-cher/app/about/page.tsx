import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Lines, Media, Reveal } from "@/components/Motion";
import { Arrow } from "@/components/Icons";
import { VALUES } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero
        image="/images/towers.webp"
        kicker="About Kuhl-Cher"
        lines={[<>Culture decides how a business</>, <>responds to disruption, and</>, <>whether it emerges <em>stronger</em>.</>]}
      />

      <section className="section on-light">
        <div className="wrap statement">
          <Reveal className="l"><span className="label">Our story</span></Reveal>
          <div className="r">
            <Lines lines={[<>It isn’t the strategy.</>, <em key="c">It’s the culture.</em>]} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Reveal><p className="body">Every business eventually faces disruption. A market shift, a new competitor, a technological shock, a crisis no one saw coming. What determines how a company responds, and whether it emerges stronger, is not its strategy. It is its culture.</p></Reveal>
            <Reveal delay={0.1}><p className="body">Kuhl-Cher was founded on that belief. We’re a boutique consulting firm that helps organizations build cultures strong enough to withstand disruption and sustain performance over the long term. Not as a nice-to-have, but as a core strategic asset.</p></Reveal>
            <Reveal delay={0.2}><p className="body">We work closely with founders and executives to embed culture into the architecture of how their organizations operate, think, and respond under pressure. The goal isn’t just to get through the unexpected. It’s to come through it stronger than before.</p></Reveal>
          </div>
          <Media src="https://images.unsplash.com/photo-1739287088753-73a9b8b771bc?w=2000&q=80" alt="Leadership team in a working session" height="clamp(360px, 38vw, 520px)" />
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <Reveal className="dark-box vm" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2 className="vm-title gold">Our Vision</h2>
            <p>A consulting firm set up to structure and restructure small, medium, and large enterprises, to prepare them with insights and access to resources to navigate disruption, and <em>emerge stronger</em>.</p>
          </Reveal>
          <Reveal className="sand-box vm" delay={0.12} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <h2 className="vm-title">Our Mission</h2>
            <p>We help ensure business continuity amid disruptions in the global and local socio-political and economic environment.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <Lines lines={["Our values"]} className="h2-sm" />
            <Reveal delay={0.1}><p>Four values. One standard: honest counsel over comfortable answers.</p></Reveal>
          </div>
          <div className="two">
            {VALUES.map((v, k) => (
              <Reveal key={v.name} className="value-card" delay={(k % 2) * 0.1}>
                <div className="top"><h3>{v.name}</h3><span className="n">{v.n}</span></div>
                <p className="line2">{v.line}</p>
                <p className="body">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="band">
            <div className="bg"><Media src="https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=2000&q=80" alt="" radius={0} sizes="100vw" /></div>
            <div className="shade" />
            <div className="c">
              <Lines lines={["Honest counsel over", "comfortable answers."]} />
              <div><Link href="/contact" className="btn btn-light">Start a conversation <Arrow /></Link></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
