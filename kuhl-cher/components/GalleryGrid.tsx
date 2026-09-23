"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { GALLERY } from "@/lib/content";
import { Media, Reveal } from "./Motion";
import { useLenis } from "./SmoothScroll";

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const lenis = useLenis();
  useEffect(() => {
    if (open !== null) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((open + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setOpen((open - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);
  return (
    <>
      <div className="gallery">
        {GALLERY.map((g, k) => (
          <Reveal key={g.src + k} delay={(k % 3) * 0.08}>
            <button className="hover-zoom" onClick={() => setOpen(k)} aria-label={`Open photo: ${g.caption}`}>
              <Media src={g.src} alt={g.caption} height={g.tall ? 440 : 300} parallax={false} sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw" />
              <span className="cap">{g.caption}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button className="x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
            <motion.div key={open} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}>
              <div className="frame"><Image src={GALLERY[open].src} alt={GALLERY[open].caption} fill sizes="92vw" /></div>
              <p>{GALLERY[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
