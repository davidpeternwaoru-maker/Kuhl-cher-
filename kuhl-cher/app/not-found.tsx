import Link from "next/link";
export default function NotFound() {
  return (
    <section style={{ minHeight: "80vh", display: "grid", placeItems: "center", background: "var(--ink)", color: "var(--cream)", textAlign: "center", padding: "140px 20px 80px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
        <span className="pill outline">404</span>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>This page doesn’t <em>exist</em>.</h1>
        <Link href="/" className="btn btn-gold">Back to home</Link>
      </div>
    </section>
  );
}
