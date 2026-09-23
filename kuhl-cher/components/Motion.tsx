"use client";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const EASE = [0.22, 0.8, 0.2, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "li" | "article";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Heading whose lines slide up one after another. */
export function Lines({
  lines,
  as = "h2",
  className,
  delay = 0,
  onMount = false,
}: {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  onMount?: boolean;
}) {
  const Tag = as;
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const show = onMount || inView;
  return (
    <Tag className={className} ref={ref}>
      {lines.map((l, i) => (
        <span className="line" key={i}>
          <motion.span
            style={{ display: "block" }}
            initial={{ y: "110%" }}
            animate={{ y: show ? "0%" : "110%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.1 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Rounded image that wipes open when it enters and drifts slightly while scrolling. */
export function Media({
  src,
  alt = "",
  height,
  className = "",
  radius,
  parallax = true,
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt?: string;
  height?: number | string;
  className?: string;
  radius?: number;
  parallax?: boolean;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <motion.div
      ref={ref}
      className={`media ${className}`}
      style={{ height, borderRadius: radius }}
      initial={{ clipPath: "inset(14% 0% 0% 0% round 28px)" , opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 1.3, ease: EASE }}
    >
      <motion.div className="par-inner" style={parallax ? { y } : { inset: 0 }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </motion.div>
    </motion.div>
  );
}

export function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = prefix + Math.round(v).toLocaleString("en-US") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix]);
  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
