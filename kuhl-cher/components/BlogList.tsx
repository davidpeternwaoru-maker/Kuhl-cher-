"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { POSTS } from "@/lib/content";
import { Media, Reveal } from "./Motion";
import { Arrow } from "./Icons";

const CATS = ["All", "Culture", "Resilience", "Leadership", "Finance"] as const;

export default function BlogList() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [featured, ...rest] = POSTS;
  const showFeat = cat === "All" || featured.category === cat;
  const list = rest.filter((p) => cat === "All" || p.category === cat);
  return (
    <>
      <Reveal className="chips" style={{ marginBottom: "clamp(40px, 5vw, 60px)" }}>
        {CATS.map((c) => (
          <button key={c} className={`chip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
            {c}
          </button>
        ))}
      </Reveal>
      <AnimatePresence mode="popLayout">
        {showFeat && (
          <motion.div key="feat" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Link href={`/blog/${featured.slug}`} className="feat hover-zoom" style={{ marginBottom: "clamp(60px, 7vw, 100px)" }}>
              <Media src={featured.image} alt="" />
              <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
                <span className="pill">Featured · {featured.category}</span>
                <h2>{featured.title}</h2>
                <p className="body" style={{ fontSize: 18 }}>{featured.excerpt}</p>
                <span className="muted" style={{ fontSize: 15 }}>{featured.author} · {featured.date} · {featured.read}</span>
                <span className="btn btn-dark">Read the essay <Arrow /></span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="posts" layout>
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }}>
              <Link href={`/blog/${p.slug}`} className="post-card hover-zoom">
                <Media src={p.image} alt="" parallax={false} />
                <span className="pill">{p.category}</span>
                <h3>{p.title}</h3>
                <span className="muted" style={{ fontSize: 15 }}>{p.author} · {p.date} · {p.read}</span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {!showFeat && list.length === 0 && <p className="body">No essays in this category yet.</p>}
    </>
  );
}
