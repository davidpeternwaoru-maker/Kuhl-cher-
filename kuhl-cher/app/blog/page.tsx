import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import NewsletterBox from "@/components/NewsletterBox";

export const metadata: Metadata = { title: "Notes on Culture" };

export default function Blog() {
  return (
    <>
      <PageHero image="/images/writing.webp" kicker="Notes on culture" lines={[<>Writing on culture, strategy,</>, <>and <em>resilience</em>.</>]} />
      <section className="section on-light" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap"><BlogList /></div>
      </section>
      <section className="section">
        <div className="wrap"><NewsletterBox /></div>
      </section>
    </>
  );
}
