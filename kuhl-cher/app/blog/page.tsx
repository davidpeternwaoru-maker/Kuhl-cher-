import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsletterBox from "@/components/NewsletterBox";
import { Lines, Reveal } from "@/components/Motion";

export const metadata: Metadata = { title: "Notes on Culture" };

export default function Blog() {
  return (
    <>
      <PageHero image="https://images.unsplash.com/photo-1663743669853-2ac159c92445?w=2000&q=80" kicker="Notes on culture" lines={[<>Writing on culture, strategy,</>, <>and <em>resilience</em>.</>]} />
      <section className="section on-light" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap statement">
          <Reveal className="l"><span className="pill gold">Coming soon</span></Reveal>
          <div className="r">
            <Lines lines={["Our first pieces are being written.", <em key="c">Case studies from real engagements.</em>]} className="h2-sm" />
            <Reveal delay={0.15}><p className="body">Subscribe below and we’ll send them to you when they’re published.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "clamp(30px, 4vw, 60px)" }}>
        <div className="wrap"><NewsletterBox /></div>
      </section>
    </>
  );
}
