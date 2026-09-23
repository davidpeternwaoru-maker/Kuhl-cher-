"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;

/** Dark curtain that sweeps up over the page on navigation, then lifts away on the new page. */
export default function Transition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const pending = useRef<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page (hash links scroll instead)
      e.preventDefault();
      pending.current = url.pathname + url.search + url.hash;
      setPhase("cover");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => setPhase("idle"), 900);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "cover" && pending.current === null) setPhase("reveal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          key="curtain"
          className="curtain"
          initial={{ y: "100%" }}
          animate={{ y: phase === "cover" ? "0%" : "-100%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: phase === "cover" ? 0.6 : 0.8, ease: EASE }}
          onAnimationComplete={() => {
            if (phase === "cover" && pending.current) {
              const to = pending.current;
              pending.current = null;
              router.push(to, { scroll: false });
            }
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
