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
        lines={[<>What separates the companies</>, <>that adapt from the ones that</>, <><em>collapse</em>.</>]}
      />

      <section className="section on-light">
        <div className="wrap statement">
          <Reveal className="l"><span className="label">Our story</span></Reveal>
          <div className="r">
            <Lines lines={[<>It usually isn’t their strategy document.</>, <em key="c">It’s their culture.</em>]} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap split">
          <div>
            <Reveal><p className="body">Every business eventually faces disruption; a market shift, a new competitor, a technological shock, a crisis nobody saw coming. What separates the companies that adapt from the ones that collapse usually isn’t their strategy document. It’s their culture.</p></Reveal>
            <Reveal delay={0.1}><p className="body">Kuhl-Cher was founded on that belief. We’re a boutique consulting firm that helps organizations build cultures strong enough to withstand disruption and sustain performance over the long term. Not as a nice-to-have, but as a core strategic asset.</p></Reveal>
            <Reveal delay={0.2}><p className="body">We work closely with founders and executives to embed culture into the architecture of how their organizations operate, think, and respond under pressure. The goal isn’t just to survive the unexpected. It’s to come through it stronger than before.</p></Reveal>
          </div>
          <Media src="/images/team-meeting.webp" alt="Leadership team in a working session" height="clamp(360px, 38vw, 520px)" />
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <Reveal className="dark-box vm" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="label gold">Our vision</span>
            <p>A consulting firm set up to structure and restructure small, medium, and large enterprises, to prepare them with insights and access to resources that will make them <em>disruption proof</em>.</p>
          </Reveal>
          <Reveal className="sand-box vm" delay={0.12} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="label">Our mission</span>
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
            <div className="bg"><Media src="/images/advisory.webp" alt="" radius={0} sizes="100vw" /></div>
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
