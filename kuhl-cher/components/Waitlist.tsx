"use client";
import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";
import { Arrow } from "./Icons";

const Ctx = createContext<() => void>(() => {});
export const useWaitlist = () => useContext(Ctx);

export function WaitlistButton({ className = "btn btn-gold", children }: { className?: string; children: React.ReactNode }) {
  const open = useWaitlist();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

export default function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const lenis = useLenis();
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  return (
    <Ctx.Provider value={() => { setDone(false); setOpen(true); }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="wl-title"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <button className="x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
              <span className="pill gold">Coming soon</span>
              <h3 id="wl-title">The Kuhl-Cher Culture Diagnostic</h3>
              <p className="body">
                See whether your culture is a source of resilience, or a hidden vulnerability. Assess your culture in
                minutes, across the four pillars. The diagnostic is in final preparation. Join the waitlist to be first in.
              </p>
              {done ? (
                <div className="success">You’re on the list. We’ll let you know the moment it opens.</div>
              ) : (
                <form
                  className="form"
                  style={{ gridTemplateColumns: "1fr" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDone(true);
                  }}
                >
                  <div className="field">
                    <label htmlFor="wl-name">Name</label>
                    <input id="wl-name" name="name" autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="wl-email">Email *</label>
                    <input id="wl-email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div>
                    <button className="btn btn-dark" type="submit">Join the waitlist <Arrow /></button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
