"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Lines } from "./Motion";

export default function PageHero({
  image,
  kicker,
  lines,
  lead,
  children,
}: {
  image: string;
  kicker: string;
  lines: React.ReactNode[];
  lead?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  return (
    <section className="phero" ref={ref}>
      <motion.div className="hero-media" style={{ y, scale }}>
        <motion.div style={{ position: "absolute", inset: 0 }} initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 0.8, 0.2, 1] }}>
          <Image src={image} alt="" fill priority sizes="100vw" />
        </motion.div>
      </motion.div>
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <motion.span className="pill outline" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
          {kicker}
        </motion.span>
        <Lines as="h1" lines={lines} onMount delay={0.45} />
        {lead && (
          <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}>
            {lead}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
