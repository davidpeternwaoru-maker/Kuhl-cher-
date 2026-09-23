"use client";
import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const LenisCtx = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisCtx);

export function scrollToHash(lenis: Lenis | null, hash: string, immediate = false) {
  const el = document.getElementById(hash.replace("#", ""));
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -150, immediate, duration: 1.4 });
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const l = new Lenis({ duration: 1.25, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), anchors: { offset: -150 } });
    let raf = 0;
    const loop = (time: number) => {
      l.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    setLenis(l);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
    };
  }, []);

  // New page: start at the top, or at the #section the link pointed to
  useEffect(() => {
    const hash = window.location.hash;
    if (first.current) {
      first.current = false;
      if (hash) setTimeout(() => scrollToHash(lenis, hash, true), 300);
      return;
    }
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
    if (hash) setTimeout(() => scrollToHash(lenis, hash), 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <LenisCtx.Provider value={lenis}>{children}</LenisCtx.Provider>;
}
