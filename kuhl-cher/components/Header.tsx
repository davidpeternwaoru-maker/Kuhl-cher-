"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { WaitlistButton } from "./Waitlist";
import { useLenis } from "./SmoothScroll";
import { Arrow } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      const hide = y > last && y > 400;
      setHidden(hide);
      document.documentElement.classList.toggle("header-hidden", hide);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    if (menu) lenis?.stop();
    else lenis?.start();
  }, [menu, lenis]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={`header ${solid && !menu ? "solid" : ""} ${hidden && !menu ? "hidden" : ""}`}>
        <div className="wrap inner">
          <Link href="/" className="brand" aria-label="Kuhl-Cher home">
            <Image src="/images/logo.png" alt="" width={30} height={39} priority />
            Kuhl-Cher
          </Link>
          <nav className="navpill" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={isActive(n.href) ? "is-active" : ""}>
                {isActive(n.href) && (
                  <motion.span layoutId="nav-active" className="active-bg" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
                )}
                <span>{n.label}</span>
              </Link>
            ))}
          </nav>
          <div className="cta">
            <WaitlistButton className="btn btn-gold btn-sm">Take the Diagnostic</WaitlistButton>
          </div>
          <button className={`burger ${menu ? "open" : ""}`} aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
            <i />
            <i />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {[...NAV, { label: "Gallery", href: "/gallery" }].map((n, i) => (
              <motion.div key={n.href} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: [0.22, 0.8, 0.2, 1] }}>
                <Link href={n.href} className={`big ${isActive(n.href) ? "is-active" : ""}`}>{n.label}</Link>
              </motion.div>
            ))}
            <div className="foot">
              <WaitlistButton className="btn btn-gold">Take the Diagnostic <Arrow /></WaitlistButton>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--gold)" }}>It’s how you say culture.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
