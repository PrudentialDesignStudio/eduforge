import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";
const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
export default function About() {
  return (<>
    <div className="page-hero">
      <div className="ef-container">
        <div className="page-hero-label">About us</div>
        <h1>A fresh studio.<br/><em>No pretence.</em></h1>
        <p>We started EduForge because too many Nigerian businesses had terrible websites — or none at all. We're here to fix that, one honest project at a time.</p>
      </div>
    </div>

    <section className="about-story">
      <div className="ef-container">
        <div className="about-story-grid">
          <AnimateIn from="left">
            <div className="about-img-block">
              <div className="about-img about-img-styled">
                <div className="about-img-grid">
                  <div className="about-img-bar" style={{ height: "60%", background: "var(--gold)" }}/>
                  <div className="about-img-bar" style={{ height: "80%", background: "var(--black)" }}/>
                  <div className="about-img-bar" style={{ height: "45%", background: "var(--gold-light)" }}/>
                  <div className="about-img-bar" style={{ height: "90%", background: "var(--black)" }}/>
                  <div className="about-img-bar" style={{ height: "55%", background: "var(--gold)" }}/>
                </div>
                <div className="about-img-label-inner">EST. 2025</div>
              </div>
              <div className="about-img-caption">EduForge Web Studio · Abuja, Nigeria · Est. 2025</div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={1}>
            <div className="about-text">
              <h2>One school. One website.<br/><em>One real beginning.</em></h2>
              <p>We're not a big agency. We don't have 10 years of experience. What we have is real technical skill, genuine dedication, and pricing that doesn't make Nigerian business owners cry.</p>
              <p>Our first project was Prudential International School in Abuja — a full custom website built with React and Node.js. Gallery, news, staff pages, admin dashboard — the works.</p>
              <div className="about-quote">"Our first project. Our best work. We'd rather do one project brilliantly than ten projects badly."</div>
              <p>EduForge is growing one honest project at a time. No hype, no shortcuts, no disappearing after launch.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
                <Link to="/start" className="btn-black" style={{ background: "var(--gold)", color: "var(--black)", fontWeight: 700 }}>Start a Project →</Link>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ borderColor: "var(--border)", color: "var(--black)" }}>Chat on WhatsApp ↗</a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section style={{ padding: "120px 0", borderBottom: "1px solid var(--border)" }}>
      <div className="ef-container">
        <AnimateIn>
          <div style={{ marginBottom: 64 }}>
            <div className="intro-label">Our values</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", maxWidth: 480 }}>What we stand for</h2>
          </div>
        </AnimateIn>
        <ul className="values-list">
          {[
            { title: "Honest Work", body: "We don't oversell. We tell you what we can build, how long it takes, and what it costs. No surprises, no hidden fees." },
            { title: "Real Code", body: "Every site is custom-coded in React and Node.js. No Wix, no WordPress shortcuts. Your site, completely yours — you own everything." },
            { title: "Built for Nigeria", body: "Paystack, WhatsApp integration, fast on Nigerian internet. We build for here, not for London or New York." },
            { title: "50/50 Payment", body: "We never ask for full payment upfront. 50% to start, 50% on delivery. Final payment due within 48 hours of project completion." },
            { title: "24hr Response", body: "We reply to every message within 24 hours — usually much faster. You'll never be left wondering what's happening with your project." },
            { title: "Long-term Partnership", body: "Monthly maintenance, fixes, updates. We don't disappear after launch. We're here for the long run." },
          ].map(v => (
            <AnimateIn key={v.title}>
              <li><strong>{v.title}</strong><span>{v.body}</span></li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>

    {/* PAYMENT PROTECTION */}
    <section style={{ padding: "80px 0", background: "var(--black)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="ef-container">
        <AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.25em", marginBottom: 16, fontWeight: 700 }}>PAYMENT PROTECTION</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", fontWeight: 400, letterSpacing: "-0.03em", color: "var(--white)", lineHeight: 1.1, marginBottom: 24 }}>
                No scams.<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>No stress.</em>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 500 }}>We understand the fear of being scammed online. That's why our payment structure is built to protect you at every step.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { step: "01", text: "50% to start — we begin work immediately" },
                { step: "02", text: "We build and share a live preview for your approval" },
                { step: "03", text: "You're happy — final 50% due within 48 hours" },
                { step: "04", text: "We hand over everything — full ownership is yours" },
              ].map(item => (
                <div key={item.step} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.15em", flexShrink: 0, fontWeight: 700 }}>{item.step}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>

    <section className="cta-section">
      <div className="ef-container">
        <AnimateIn><h2>Ready to start<br/><em>your project?</em></h2></AnimateIn>
        <AnimateIn delay={1} className="cta-actions">
          <Link to="/start" className="btn-black" style={{ fontSize: 16, padding: "16px 40px" }}>Start a Project →</Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 16, padding: "15px 40px" }}>Chat on WhatsApp ↗</a>
        </AnimateIn>
      </div>
    </section>
  </>);
}
