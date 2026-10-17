"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const KEY = "kc-cookie-notice";

export default function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  const close = () => {
    setShow(false);
    try { localStorage.setItem(KEY, "1"); } catch {}
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="cookie"
          role="region"
          aria-label="Cookie notice"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 2.2, duration: 0.6 } }}
          exit={{ y: 20, opacity: 0, transition: { duration: 0.3 } }}
        >
          <p>
            We don’t use advertising or tracking cookies. This site only keeps what it needs to work, such as
            remembering that you closed this notice. <Link href="/privacy#cookies">Read more</Link>
          </p>
          <button type="button" className="btn btn-dark" onClick={close}>Okay</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
