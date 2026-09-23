import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import NewsletterBox from "@/components/NewsletterBox";
import { Reveal } from "@/components/Motion";
import { Arrow } from "@/components/Icons";
import { WaitlistButton } from "@/components/Waitlist";
import { POSTS } from "@/lib/content";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? "Notes on Culture", description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const initials = post.author === "POA" ? "POA" : post.author.split(" ").map((w) => w[0]).join("");
  return (
    <>
      <PageHero image={post.image} kicker={post.category} lines={[post.title]} />
      <section className="section on-light" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap">
          <article className="article">
            <Reveal className="by">
              <span className="av">{initials}</span>
              <div>
                <b>{post.author}</b>
                <div className="muted" style={{ fontSize: 14 }}>Partner, Kuhl-Cher · {post.date} · {post.read}</div>
              </div>
            </Reveal>
            {post.body ? (
              post.body.map((b, k) =>
                b.type === "pull" ? (
                  <Reveal key={k}><p className="pull">{b.text}</p></Reveal>
                ) : (
                  <Reveal key={k}><p className={k === 0 ? "first" : ""}>{b.text}</p></Reveal>
                )
              )
            ) : (
              <Reveal>
                <p className="first">{post.excerpt}</p>
                <p>The full essay is being prepared for publication. Subscribe below to receive it, and future notes on culture, strategy and resilience, when it goes live.</p>
              </Reveal>
            )}
            <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap", borderTop: "1px solid var(--line)", paddingTop: 28, marginTop: 20 }}>
              <Link href="/blog" className="btn btn-outline">All writing</Link>
              <WaitlistButton className="btn btn-dark">Take the culture diagnostic <Arrow /></WaitlistButton>
            </Reveal>
          </article>
        </div>
      </section>
      <section className="section"><div className="wrap"><NewsletterBox /></div></section>
    </>
  );
}
