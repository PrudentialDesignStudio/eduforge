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
              <div className="about-quote">"We'd rather do one project brilliantly than ten projects badly."</div>
              <p>EduForge is growing one honest project at a time. No hype, no shortcuts.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-black">Work With Us ↗</a>
                <Link to="/services" className="btn-ghost">Our Services</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
    <section style={{ padding: "120px 0", borderBottom: "1px solid var(--border)" }}>
      <div className="ef-container">
        <AnimateIn><div style={{ marginBottom: 64 }}><div className="page-hero-label">Our values</div><h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em", maxWidth: 480 }}>What we stand for</h2></div></AnimateIn>
        <ul className="values-list">
          {[
            { title: "Honest Work", body: "We don't oversell. We tell you what we can build, how long it takes, and what it costs. No surprises." },
            { title: "Real Code", body: "Every site is custom-coded in React and Node.js. No Wix, no WordPress shortcuts. Your site, completely yours." },
            { title: "Built for Nigeria", body: "Paystack, WhatsApp integration, fast on Nigerian internet. We build for here, not for London." },
            { title: "Starting Small, Growing Real", body: "One project in our portfolio. We'd rather be honest about that than fake a decade of experience." },
            { title: "Long-term Partnership", body: "Monthly maintenance, fixes, updates. We don't disappear after launch." },
          ].map((v, i) => (
            <AnimateIn key={v.title} delay={1}>
              <li><strong>{v.title}</strong><span style={{ fontSize: 16, color: "var(--mid)", lineHeight: 1.7 }}>{v.body}</span></li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
    <section className="cta-section">
      <div className="ef-container">
        <AnimateIn><h2>Ready to start<br/><em>your project?</em></h2></AnimateIn>
        <AnimateIn delay={1} className="cta-actions">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-black" style={{ fontSize: 16, padding: "16px 40px" }}>Get in Touch ↗</a>
        </AnimateIn>
      </div>
    </section>
  </>);
}
