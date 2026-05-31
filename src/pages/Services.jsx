import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";
const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
const SERVICES = [
  { num: "01", title: "Website Design & Development", tagline: "Your digital home — built right.", desc: "A proper website that looks great on every screen, loads fast, and actually represents your business well. Built with React so it's fast and flexible.", includes: ["Mobile responsive design","Up to 6 pages","WhatsApp contact integration","Social media links","SEO setup","30 days free support"], time: "1 — 2 weeks", tags: ["React","Node.js","Custom Code"] },
  { num: "02", title: "Landing Pages", tagline: "One page. One goal. Maximum results.", desc: "When you need to capture leads, sell one product, or promote an event — a sharp landing page does it better than a full site.", includes: ["Single page design","Strong call-to-action","WhatsApp integration","Mobile first","Fast load time","Free revisions"], time: "3 — 5 days", tags: ["Fast Delivery","Conversion"] },
  { num: "03", title: "E-commerce Stores", tagline: "Sell online. Get paid in Naira.", desc: "A full online store with product pages, cart, and Paystack payment integration. Your customers browse, add to cart, and pay — all on your website.", includes: ["Product catalogue","Paystack integration","Order management","Mobile responsive","WhatsApp notifications","Admin panel"], time: "2 — 4 weeks", tags: ["Paystack","Shopping Cart"] },
  { num: "04", title: "School Websites", tagline: "Where we started. Where we excel.", desc: "We built our first website for Prudential International School, Abuja. We understand what school websites need — galleries, staff pages, news, and academic info.", includes: ["All pages from Website package","Gallery section","News & events","Staff directory","School values & curriculum","Optional: admission + Paystack"], time: "2 — 3 weeks", tags: ["Our Speciality","Full Featured"] },
  { num: "05", title: "Monthly Maintenance", tagline: "We keep it running. You keep it growing.", desc: "Like your generator subscription — but for your website. We handle updates, fixes, content changes, and make sure your site is always online.", includes: ["Content updates","Bug fixes","Security checks","Uptime monitoring","WhatsApp support","Monthly report"], time: "Ongoing", tags: ["Ongoing","Support"] },
  { num: "06", title: "Logo Design", tagline: "The face of your brand.", desc: "A clean, professional logo that works on your website, business cards, and social media. We design, you approve, multiple formats delivered.", includes: ["2 concept directions","Unlimited revisions","PNG, SVG, PDF files","Light & dark versions","Favicon version","Brand color palette"], time: "3 — 5 days", tags: ["Branding","Identity"] },
];
function ServiceAccordion({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="service-row" style={{ display: "block", padding: 0, margin: 0 }} onClick={() => setOpen(!open)}>
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto auto", gap: 32, alignItems: "center", padding: "32px 0", cursor: "none" }}>
        <span className="service-row-num">{s.num}</span>
        <div>
          <div className="service-row-title">{s.title}</div>
          <div style={{ fontSize: 13, color: "var(--mid)", marginTop: 4, fontStyle: "italic" }}>{s.tagline}</div>
        </div>
        <div className="service-row-tags" style={{ display: "flex" }}>{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mid)", letterSpacing: "0.1em" }}>{s.time}</span>
          <span className="service-row-arrow" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>+</span>
        </div>
      </div>
      {open && (
        <div style={{ paddingBottom: 40, display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, animation: "fadeUp 0.3s ease both" }}>
          <div/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.8, marginBottom: 24, fontWeight: 500 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                <div><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", marginBottom: 6 }}>TIMELINE</div><div style={{ fontSize: 15, fontWeight: 500 }}>{s.time}</div></div>
              </div>
              <Link to="/start" className="btn-black" style={{ fontSize: 13, padding: "10px 24px" }} onClick={e => e.stopPropagation()}>Start a Project →</Link>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", marginBottom: 16 }}>WHAT'S INCLUDED</div>
              {s.includes.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--mid)", marginBottom: 10, fontWeight: 500 }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default function Services() {
  return (<>
    <div className="page-hero">
      <div className="ef-container">
        <div className="page-hero-label">What we build</div>
        <h1>Services for<br/><em>real businesses.</em></h1>
        <p>Click any service to see what's included and how long it takes. Pricing is discussed personally — we quote based on your exact needs.</p>
      </div>
    </div>
    <section className="services-section">
      <div className="ef-container">
        {SERVICES.map((s) => <ServiceAccordion key={s.num} s={s} />)}
        <div style={{ borderBottom: "1px solid var(--border)" }}/>
      </div>
    </section>

    {/* WHY EDUFORGE */}
    <section style={{ padding: "120px 0", borderBottom: "1px solid var(--border)", background: "var(--off-white)" }}>
      <div className="ef-container">
        <AnimateIn>
          <div style={{ marginBottom: 64 }}>
            <div className="intro-label">Why choose us</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, letterSpacing: "-0.03em" }}>EduForge vs<br/><em style={{ color: "var(--gold)", fontStyle: "italic" }}>the alternatives</em></h2>
          </div>
        </AnimateIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)" }}>
          {[
            { label: "Freelancer", items: ["Cheap but unreliable", "Disappears after launch", "No proper code", "Hard to reach", "No support plan", "No contract"], dark: false },
            { label: "EduForge", items: ["Honest, fair pricing", "24hr response guarantee", "React — real custom code", "WhatsApp always open", "Maintenance plans", "Clear payment terms"], dark: true },
            { label: "Big Agency", items: ["Very expensive", "Slow turnaround", "Built for foreign clients", "Hard to communicate", "Overkill for SMEs", "Long contracts"], dark: false },
          ].map(col => (
            <div key={col.label} style={{ background: col.dark ? "var(--black)" : "var(--white)", padding: "40px 32px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: col.dark ? "var(--gold)" : "var(--mid)", marginBottom: 32 }}>{col.label}</div>
              {col.items.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: col.dark ? "rgba(255,255,255,0.8)" : "var(--mid)", marginBottom: 14, fontWeight: 500 }}>
                  <span style={{ color: col.dark ? "var(--gold)" : "var(--border)", flexShrink: 0 }}>{col.dark ? "✓" : "–"}</span>{item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TECHNOLOGIES */}
    <section style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
      <div className="ef-container">
        <AnimateIn>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 48, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "var(--gold)", display: "inline-block" }}/>
            Technologies we use
          </div>
        </AnimateIn>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {["React", "Node.js", "JavaScript", "CSS3", "HTML5", "Paystack", "Figma", "Git", "Vercel", "MongoDB"].map(tech => (
            <AnimateIn key={tech}>
              <div style={{ padding: "12px 24px", border: "1px solid var(--border)", borderRadius: 100, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--black)", letterSpacing: "0.1em", fontWeight: 700, transition: "all 0.2s", cursor: "default" }}>
                {tech}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="ef-container">
        <AnimateIn><h2>Not sure what<br/><em>you need?</em></h2></AnimateIn>
        <AnimateIn delay={1} className="cta-actions">
          <Link to="/start" className="btn-black" style={{ fontSize: 16, padding: "16px 40px", background: "var(--gold)", color: "var(--black)", fontWeight: 700 }}>Start a Project →</Link>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: 16, padding: "15px 40px" }}>Chat on WhatsApp ↗</a>
        </AnimateIn>
      </div>
    </section>
  </>);
}
