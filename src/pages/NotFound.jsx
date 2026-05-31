import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.3em", marginBottom: 24 }}>404</div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,6vw,72px)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
        This page doesn't exist.<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>But your website should.</em>
      </h1>
      <p style={{ fontSize: 16, color: "var(--mid)", marginBottom: 40, fontWeight: 500 }}>Looks like you took a wrong turn. Let's get you back on track.</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" className="btn-black">Back to Home →</Link>
        <Link to="/start" className="btn-ghost" style={{ background: "var(--gold)", color: "var(--black)", border: "none", fontWeight: 700 }}>Start a Project →</Link>
      </div>
    </div>
  );
}
