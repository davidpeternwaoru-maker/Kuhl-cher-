import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COMPANY, CONTACT } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy" };

const UPDATED = "October 2026";

export default function Privacy() {
  const name = COMPANY.legalName || "Kuhl-Cher";
  return (
    <>
      <PageHero image="/images/office.webp" kicker="Privacy Policy" lines={[<>How we handle</>, <>your <em>information</em>.</>]} />
      <section className="section on-light" style={{ paddingTop: "clamp(50px, 6vw, 80px)" }}>
        <div className="wrap legal">
          <p className="muted">Last updated: {UPDATED}</p>

          <p>
            This policy explains what personal information {name} (“Kuhl-Cher”, “we”, “us”) collects through this website,
            why we collect it, how we use, store and share it, and the rights you have over it. We handle personal
            information in line with the Nigeria Data Protection Act 2023 (NDPA) and guidance from the Nigeria Data
            Protection Commission (NDPC).
          </p>

          <h2>Who we are</h2>
          <p>
            {name} is a culture consulting firm based in {COMPANY.address || CONTACT.location}.
            {COMPANY.rc && <> Registered with the Corporate Affairs Commission under {COMPANY.rc}.</>} For anything to do
            with your personal information, email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>

          <h2>What we collect</h2>
          <p>We only collect what you choose to give us through the forms on this site:</p>
          <ul>
            <li><b>Contact form:</b> your name and email address, and if you choose to add them, your organization, role, company size, the topic of your enquiry and your message.</li>
            <li><b>Newsletter:</b> your email address.</li>
            <li><b>Culture Resilience Index waitlist:</b> your email address and, if you add it, your name.</li>
          </ul>
          <p>
            We do not ask for sensitive personal information on this website, and we ask that you do not include it in
            your message.
          </p>

          <h2>Why we use it, and our lawful basis</h2>
          <ul>
            <li>To reply to your enquiry and, if you ask, to discuss working with us. We rely on your consent, which you give when you tick the box on the form, and on the steps needed before entering into a contract with you.</li>
            <li>To send you our newsletter or tell you when the Culture Resilience Index opens. We rely on your consent, and you can withdraw it at any time.</li>
          </ul>
          <p>We do not sell your information, and we do not use it for advertising or automated decision-making.</p>

          <h2>Who we share it with</h2>
          <p>
            We share personal information only with service providers who help us run this website and our email, such
            as our website host and email provider. They process it on our behalf, under our instructions, and only for
            the purposes above. We may also disclose information where the law requires us to.
          </p>
          <p>
            Some of these providers store data on servers outside Nigeria. Where that happens, we rely on the transfer
            safeguards allowed under Part VIII of the NDPA, such as the provider’s contractual commitments to protect
            your data.
          </p>

          <h2>How long we keep it</h2>
          <ul>
            <li>Enquiries: up to two years after our last contact with you, unless we go on to work together.</li>
            <li>Newsletter and waitlist: until you unsubscribe or ask us to remove you.</li>
          </ul>

          <h2>How we protect it</h2>
          <p>
            The site is served over an encrypted connection (HTTPS). Access to the information you send us is limited to
            the Kuhl-Cher team members who need it to respond to you.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            This website does not use advertising, analytics or tracking cookies. It stores one small item in your
            browser to remember that you have closed the cookie notice. You can clear it at any time through your
            browser settings. If we ever add cookies that are not strictly necessary, we will update this policy and
            ask for your consent first.
          </p>

          <h2>Your rights</h2>
          <p>Under the NDPA you have the right to:</p>
          <ul>
            <li>be told how your personal information is used, and get a copy of it;</li>
            <li>have inaccurate information corrected;</li>
            <li>have your information deleted;</li>
            <li>restrict or object to how we use it;</li>
            <li>withdraw your consent at any time, without affecting what we did before you withdrew it;</li>
            <li>receive your information in a commonly used format.</li>
          </ul>
          <p>
            To use any of these rights, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We will respond
            within the time the law allows. Every newsletter email also has an unsubscribe link.
          </p>
          <p>
            If you are not satisfied with how we have handled your information, you can complain to the Nigeria Data
            Protection Commission at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer">ndpc.gov.ng</a>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top shows when it last changed. If you have any
            questions, <Link href="/contact">get in touch</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
