import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";

const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
const SERVICES = [
  { num: "01", title: "Website Design & Development", tags: ["React", "Node.js", "Custom Code"] },
  { num: "02", title: "Landing Pages", tags: ["Fast Delivery", "Conversion-Focused"] },
  { num: "03", title: "E-commerce Stores", tags: ["Paystack", "Product Catalogue"] },
  { num: "04", title: "School Websites", tags: ["Our Speciality", "Full Featured"] },
  { num: "05", title: "Monthly Maintenance", tags: ["Ongoing", "Support"] },
  { num: "06", title: "Logo Design", tags: ["Brand Identity", "Multiple Formats"] },
];
const MARQUEE_ITEMS = ["Website Design","School Websites","E-commerce","Paystack Integration","React Development","Landing Pages","Logo Design","Mobile Responsive","WhatsApp Ready","Nigerian Market"];

function PortfolioPreview() {
  const [previewing, setPreviewing] = useState(false);
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-preview">
        {previewing ? (
          <div className="portfolio-iframe-wrap">
            <iframe src="https://prudentialschool.com.ng" title="Prudential International School" className="portfolio-iframe" loading="lazy"/>
            <button className="portfolio-close-btn" onClick={() => setPreviewing(false)}>✕ Close Preview</button>
          </div>
        ) : (
          <div className="portfolio-preview-placeholder">
            <div className="portfolio-preview-url">prudentialschool.com.ng</div>
            <button className="portfolio-preview-btn" onClick={() => setPreviewing(true)}>Preview Website</button>
            <a href="https://prudentialschool.com.ng" target="_blank" rel="noopener noreferrer" className="portfolio-preview-open">Open in new tab ↗</a>
          </div>
        )}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-cat">School Website · React + Node.js</div>
        <div className="portfolio-card-title">Prudential International School</div>
        <p className="portfolio-card-desc">Full custom website for a British-Nigerian curriculum school in Abuja. Gallery, news, staff pages, admin dashboard.</p>
        <a href="https://prudentialschool.com.ng" target="_blank" rel="noopener noreferrer" className="btn-link">Visit live site →</a>
      </div>
    </div>
  );
}

export default function Home() {
  return (<>
    {/* ── HERO ── */}
    <section className="hero">
      <div className="ef-container">
        <div className="hero-eyebrow">Based in Abuja, Nigeria · Est. 2025</div>
        <h1>We build websites<br/>that actually <em>work.</em></h1>
        <div className="hero-sub-row">
          <p className="hero-sub">Custom-built websites for Nigerian businesses and schools. React-powered, Paystack-ready, and built to last.</p>
          <div className="hero-actions">
            <Link to="/start" className="btn-black">Start a Project →</Link>
            <Link to="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore</div>
      </div>
      <div className="hero-number">001</div>
    </section>

    {/* ── TRUST BAR ── */}
    <div style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}>
      <div className="ef-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "center" }}>
          {["50% to start · 50% on delivery", "Never full payment upfront", "We reply within 24 hours", "Real custom code — no Wix"].map(item => (
            <div key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: 8, fontWeight: 700 }}>
              <span style={{ color: "var(--gold)" }}>✓</span>{item}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── MARQUEE ── */}
    <div className="marquee-section">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>

    {/* ── SERVICES LIST ── */}
    <section className="services-section" style={{ background: "var(--white)" }}>
      <div className="ef-container">
        <AnimateIn>
          <div className="services-header">
            <h2>What we<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>build</em></h2>
            <p>From simple landing pages to complex school portals. Click a service to see what's included.</p>
          </div>
        </AnimateIn>
        {SERVICES.map((s, i) => (
          <Link to="/services" key={s.num}>
            <div className={`service-row${i === SERVICES.length - 1 ? " service-last-row" : ""}`} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto auto", gap: 32, alignItems: "center", padding: "32px 0" }}>
              <span className="service-row-num">{s.num}</span>
              <span className="service-row-title">{s.title}</span>
              <div className="service-row-tags">{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
              <span className="service-row-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* ── HOW WE WORK ── */}
    <section className="how-section">
      <div className="ef-container">
        <AnimateIn>
          <div className="how-header">
            <div className="intro-label">Our process</div>
            <h2>How we <em>work</em></h2>
            <p>No confusion, no surprises. Here's exactly what happens from the moment you reach out to the day your site goes live.</p>
          </div>
        </AnimateIn>
        <div className="how-steps">
          {[
            { num: "01", title: "Discovery", time: "Day 1", desc: "You tell us what you need — your business, your goals, your vision. We ask the right questions on WhatsApp and make sure we understand exactly what we're building before anything starts." },
            { num: "02", title: "Proposal & Quote", time: "Day 1–2", desc: "We send you a clear proposal via WhatsApp: what we'll build, how long it'll take, and a personal quote based on your exact needs. No vague estimates. You approve it, we start." },
            { num: "03", title: "Design & Build", time: "Week 1–3", desc: "We build your site in React with clean, custom code. You get progress updates along the way. 50% payment starts the project — no full payment upfront, ever." },
            { num: "04", title: "Review & Refine", time: "Final week", desc: "We share the live preview. You review it, request changes, and we refine until you're genuinely happy. Free revisions included — no extra charges for reasonable changes." },
            { num: "05", title: "Launch & Handover", time: "Go live", desc: "We deploy your site, set up hosting, and hand everything over. Final 50% payment due within 48 hours of delivery. You get full ownership — the code, the domain, everything is yours." },
          ].map((step, i) => (
            <AnimateIn key={step.num} delay={i % 2 === 0 ? 0 : 1}>
              <div className="how-step">
                <div className="how-step-left">
                  <div className="how-step-num">{step.num}</div>
                  <div className="how-step-connector" />
                </div>
                <div className="how-step-body">
                  <div className="how-step-meta">
                    <span className="how-step-title">{step.title}</span>
                    <span className="how-step-time">{step.time}</span>
                  </div>
                  <p className="how-step-desc">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── INTRO / ABOUT ── */}
    <section className="intro-section">
      <div className="ef-container">
        <div className="intro-grid">
          <AnimateIn from="left">
            <div className="intro-left">
              <div className="intro-label">About EduForge</div>
              <h2>One school.<br/>One website.<br/><em>One real beginning.</em></h2>
              <div className="intro-stats">
                {[
                  { num: "1+", label: "Project delivered\nOur first. Our best." },
                  { num: "100%", label: "Client satisfaction\nNo fake numbers" },
                  { num: "24hr", label: "Response time\nEvery message, answered" },
                  { num: "∞", label: "Dedication\nEvery project, our best" },
                ].map(({ num, label }) => (
                  <div key={num}>
                    <div className="intro-stat-num">{num}</div>
                    <div className="intro-stat-label" style={{ whiteSpace: "pre-line" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={1}>
            <div className="intro-right">
              <p>We're not a big agency. We don't have 10 years of experience. What we have is real technical skill, genuine dedication, and a commitment to building websites that actually work for Nigerian businesses.</p>
              <p>Our first project was Prudential International School in Abuja — a full custom website built with React and Node.js. It taught us exactly what Nigerian institutions need from their websites.</p>
              <p>We're building EduForge one honest project at a time.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link to="/about" className="btn-link">Read our story →</Link>
                <a href="https://prudentialschool.com.ng" target="_blank" rel="noopener noreferrer" className="btn-link">See our work →</a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>

    {/* ── PORTFOLIO ── */}
    <section className="portfolio-section">
      <div className="ef-container">
        <AnimateIn>
          <div className="portfolio-header">
            <h2>Our work</h2>
            <a href="https://prudentialschool.com.ng" target="_blank" rel="noopener noreferrer" className="btn-link">View live site →</a>
          </div>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <AnimateIn delay={1}><PortfolioPreview /></AnimateIn>
          <AnimateIn delay={2}>
            <Link to="/start" style={{ display: "block" }}>
              <div className="portfolio-card" style={{ opacity: 0.6, transition: "opacity 0.3s, transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}>
                <div className="portfolio-coming-placeholder">
                  <div className="portfolio-coming-inner">
                    <div className="portfolio-coming-num">02</div>
                    <div className="portfolio-coming-text">Next project</div>
                    <div className="portfolio-coming-sub">Could be yours</div>
                  </div>
                </div>
                <div className="portfolio-card-body">
                  <div className="portfolio-card-cat">Coming Soon</div>
                  <div className="portfolio-card-title">Your Project Here</div>
                  <p className="portfolio-card-desc">We're actively building our portfolio. Want to be our next case study? Let's talk.</p>
                  <span className="btn-link">Start a conversation →</span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>

    {/* ── FREE CONSULTATION ── */}
    <section style={{ padding: "80px 0", background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="ef-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.25em", marginBottom: 12, fontWeight: 700 }}>FREE CONSULTATION</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3vw,40px)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1.2 }}>
              Not sure what you need?<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Let's figure it out together.</em>
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", fontWeight: 700 }}>Currently taking new projects</div>
            <Link to="/start" className="btn-black" style={{ fontSize: 15, padding: "14px 32px" }}>Get a Free Consultation →</Link>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="cta-section">
      <div className="ef-container">
        <AnimateIn>
          <h2>Ready to build<br/><em>something real?</em></h2>
        </AnimateIn>
        <AnimateIn delay={1} className="cta-actions">
          <Link to="/start" className="btn-black" style={{ fontSize: 16, padding: "16px 40px" }}>Start a Project →</Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 16, padding: "15px 40px" }}>Message on WhatsApp ↗</a>
        </AnimateIn>
      </div>
    </section>
  </>);
}
