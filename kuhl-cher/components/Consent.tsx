import Link from "next/link";

export default function Consent({ id, text, dark = false }: { id: string; text: string; dark?: boolean }) {
  return (
    <label htmlFor={id} className={`consent ${dark ? "dark" : ""}`}>
      <input id={id} name="consent" type="checkbox" required />
      <span>
        {text} See our <Link href="/privacy">Privacy Policy</Link>.
      </span>
    </label>
  );
}
