import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Lines, Reveal } from "@/components/Motion";
import { COMPANY, CONTACT } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const items = [
    { k: "Email", v: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> },
    ...(CONTACT.phone ? [{ k: "Phone", v: <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a> }] : []),
    { k: "Office", v: COMPANY.address || CONTACT.location },
    ...(COMPANY.legalName ? [{ k: "Company", v: <>{COMPANY.legalName}{COMPANY.rc && <><br />{COMPANY.rc}</>}</> }] : []),
  ];
  return (
    <>
      <PageHero image="/images/office.webp" kicker="Contact" lines={[<>Tell us where your organization</>, <>feels the <em>strain</em>.</>]} />
      <section className="section on-light">
        <div className="wrap contact-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Lines lines={["We’ll tell you honestly whether", "it’s a culture problem."]} className="h2-sm" />
            {items.map((it, k) => (
              <Reveal key={it.k} className="cinfo" delay={k * 0.08}>
                <span className="label">{it.k}</span>
                <b>{it.v}</b>
              </Reveal>
            ))}
          </div>
          <Reveal className="form-card" delay={0.15}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
