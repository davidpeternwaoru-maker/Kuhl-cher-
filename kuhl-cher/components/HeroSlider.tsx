"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";
import { WaitlistButton } from "./Waitlist";

const EASE = [0.22, 0.8, 0.2, 1] as const;
const DURATION = 7000;

const SLIDES = [
  {
    image: "/images/hero-lagos.webp",
    tab: "Kuhl-Cher",
    kicker: "Boutique culture consulting",
    lines: [<>Every business faces disruption.</>, <><em>Culture</em> decides who survives it.</>],
    lead: "We help organizations build cultures strong enough to withstand disruption and sustain performance.",
    cta: { label: "Explore our approach", href: "/pillars" },
    diagnostic: true,
  },
  {
    image: "/images/workshop.webp",
    tab: "The C.S.I Course",
    kicker: "A two-day intensive course",
    lines: [<>Strategy tells you where to go.</>, <><em>Culture</em> determines whether you get there.</>],
    lead: "Diagnose the culture you really have, align it with strategy, and measure the impact.",
    cta: { label: "Book this course", href: "/interventions#csi" },
  },
  {
    image: "/images/seminar.webp",
    tab: "The Convergence Seminar",
    kicker: "A one-day seminar",
    lines: [<>A real founder. A real disruption.</>, <>The <em>culture</em> that carried them through.</>],
    lead: "Hear the story firsthand and leave with an action plan for your own organization.",
    cta: { label: "Reserve a seat", href: "/interventions#convergence" },
  },
  {
    image: "/images/team-meeting.webp",
    tab: "Culture Advisory",
    kicker: "Ongoing advisory",
    lines: [<><em>Culture</em>, treated with the</>, <>rigour of your balance sheet.</>],
    lead: "From structured diagnosis to twelve months of performance tracking.",
    cta: { label: "Start a conversation", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((v) => (v + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused]);

  // pause autoplay while the hero is off screen
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setPaused(v > 0.85));
    return () => unsub();
  }, [scrollYProgress]);

  const s = SLIDES[i];
  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-media" style={{ y }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            style={{ position: "absolute", inset: 0 }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2, ease: EASE }, scale: { duration: DURATION / 1000 + 1.5, ease: "linear" } }}
          >
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="wrap hero-content" style={{ opacity: fade }}>
        <AnimatePresence mode="wait">
          <motion.div key={i} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }}>
            <motion.span className="pill outline" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              {s.kicker}
            </motion.span>
            <h1>
              {s.lines.map((l, k) => (
                <span className="line" key={k}>
                  <motion.span initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 + k * 0.12 }}>
                    {l}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }}>
              {s.lead}
            </motion.p>
            <motion.div className="ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.9 }}>
              <Link href={s.cta.href} className="btn btn-gold">{s.cta.label} <Arrow /></Link>
              {s.diagnostic && <WaitlistButton className="btn btn-ghost">Take the diagnostic</WaitlistButton>}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="hero-bottom">
        <div className="wrap">
          <div className="tabs4" role="tablist" aria-label="Slides">
            {SLIDES.map((sl, k) => (
              <button key={k} role="tab" aria-selected={k === i} className={`tab4 ${k === i ? "on" : ""}`} onClick={() => setI(k)}>
                <span className="track">
                  {k === i && (
                    <motion.span
                      key={`${i}-${paused}`}
                      className="fill"
                      style={{ display: "block" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: paused ? 0 : 1 }}
                      transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                    />
                  )}
                  {k < i && <span className="fill" style={{ display: "block", opacity: 0.5 }} />}
                </span>
                <span>
                  {String(k + 1).padStart(2, "0")}
                  <span className="t">  {sl.tab}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="next-card">
            <div>
              <small>Next session</small>
              <b>The Convergence Seminar</b>
            </div>
            <Link href="/interventions#convergence" className="btn btn-dark btn-sm">Reserve a seat</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
