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
            <iframe
              src="https://prudentialschool.com.ng"
              title="Prudential International School"
              className="portfolio-iframe"
              loading="lazy"
            />
            <button className="portfolio-close-btn" onClick={() => setPreviewing(false)}>✕ Close Preview</button>
          </div>
        ) : (
          <div className="portfolio-preview-placeholder">
            <div className="portfolio-preview-url">prudentialschool.com.ng</div>
            <button className="portfolio-preview-btn" onClick={() => setPreviewing(true)}>
              Preview Website
            </button>
            <a href="https://prudentialschool.com.ng" target="_blank" rel="noopener noreferrer" className="portfolio-preview-open">
              Open in new tab ↗
            </a>
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
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="ef-container">
          <div className="hero-eyebrow">Based in Abuja, Nigeria · Est. 2025</div>
          <h1>
            We build websites<br/>
            Nigeria is <em>proud of.</em>
          </h1>
          <div className="hero-sub-row">
            <p className="hero-sub">Fresh studio. Real skills. Custom-built websites for businesses and schools across Nigeria — with pricing that actually makes sense.</p>
            <div className="hero-actions">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-black">Start a Project ↗</a>
              <Link to="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="hero-scroll">Scroll to explore</div>
        </div>
        <div className="hero-number">001</div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="marquee-item">{item}</div>
          ))}
        </div>
      </div>

      {/* ── SERVICES LIST ── */}
      <section className="services-section">
        <div className="ef-container">
          <AnimateIn>
            <div className="services-header">
              <h2>What we<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>build</em></h2>
              <p>From simple landing pages to complex school portals. Click a service to learn more and get a quote.</p>
            </div>
          </AnimateIn>
          {SERVICES.map((s, i) => (
            <Link to="/services" key={s.num}>
              <div className={`service-row${i === SERVICES.length - 1 ? " service-last-row" : ""}`}>
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
              { num: "01", title: "Discovery", time: "Day 1", desc: "You tell us what you need — your business, your goals, your budget. We ask the right questions and make sure we understand exactly what we're building before anything starts." },
              { num: "02", title: "Proposal", time: "Day 1–2", desc: "We send you a clear proposal: what we'll build, how long it'll take, and exactly what it costs. No vague estimates. You approve it, we start." },
              { num: "03", title: "Design & Build", time: "Week 1–3", desc: "We build your site in React with clean, custom code. You get progress updates along the way. No disappearing acts." },
              { num: "04", title: "Review", time: "Final week", desc: "We share the live preview. You review it, request changes, and we refine until you're genuinely happy. Free revisions included." },
              { num: "05", title: "Launch", time: "Go live", desc: "We deploy your site, set up hosting, and hand everything over. You get full ownership — the code, the domain, everything is yours." },
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
                  {[{ num: "1+", label: "Project delivered\nProud of every one" }, { num: "100%", label: "Client satisfaction\nNo fake numbers" }, { num: "₦80k", label: "Starting price\nHonest, fair, clear" }, { num: "∞", label: "Dedication\nEvery project, our best" }].map(({ num, label }) => (
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
                <p>We're not a big agency. We don't have 10 years of experience. What we have is real technical skill, genuine dedication, and pricing that doesn't make Nigerian business owners cry.</p>
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
            <AnimateIn delay={1}>
              <PortfolioPreview />
            </AnimateIn>
            <AnimateIn delay={2}>
              <div className="portfolio-card portfolio-coming">
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
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-link">Start a conversation →</a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="ef-container">
          <AnimateIn>
            <h2>
              Ready to build<br/>
              <em>something real?</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={1} className="cta-actions">
            <Link to="/start" className="btn-black" style={{ fontSize: 16, padding: "16px 40px", background: "var(--gold)", color: "var(--black)", fontWeight: 600 }}>Start a Project →</Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 16, padding: "15px 40px" }}>Message on WhatsApp ↗</a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
