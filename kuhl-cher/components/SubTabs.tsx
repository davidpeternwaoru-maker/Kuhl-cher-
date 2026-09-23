"use client";
import { useEffect, useState } from "react";
import { scrollToHash, useLenis } from "./SmoothScroll";

const TABS = [
  { id: "csi", n: "01", label: "The C.S.I Course" },
  { id: "convergence", n: "02", label: "The Convergence Seminar" },
  { id: "advisory", n: "03", label: "Culture Advisory" },
];

export default function SubTabs() {
  const [on, setOn] = useState("csi");
  const lenis = useLenis();
  useEffect(() => {
    const onScroll = () => {
      let cur = "csi";
      for (const t of TABS) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = t.id;
      }
      setOn(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="subtabs">
      <div className="wrap">
        {TABS.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`subtab ${on === t.id ? "on" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              history.replaceState(null, "", `#${t.id}`);
              scrollToHash(lenis, t.id);
            }}
          >
            <b>{t.n}</b>
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
