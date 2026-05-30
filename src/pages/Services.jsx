import { useState } from "react";
import AnimateIn from "../components/AnimateIn";
const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
const SERVICES = [
  { num: "01", title: "Website Design & Development", tagline: "Your digital home — built right.", desc: "A proper website that looks great on every screen, loads fast, and actually represents your business well. Built with React so it's fast and flexible.", includes: ["Mobile responsive design","Up to 6 pages","WhatsApp contact integration","Social media links","SEO setup","30 days free support"], time: "1 — 2 weeks", from: "₦80,000", tags: ["React","Node.js","Custom Code"] },
  { num: "02", title: "Landing Pages", tagline: "One page. One goal. Maximum results.", desc: "When you need to capture leads, sell one product, or promote an event — a sharp landing page does it better than a full site.", includes: ["Single page design","Strong call-to-action","WhatsApp integration","Mobile first","Fast load time","Free revisions"], time: "3 — 5 days", from: "₦30,000", tags: ["Fast Delivery","Conversion"] },
  { num: "03", title: "E-commerce Stores", tagline: "Sell online. Get paid in Naira.", desc: "A full online store with product pages, cart, and Paystack payment integration. Your customers browse, add to cart, and pay — all on your website.", includes: ["Product catalogue","Paystack integration","Order management","Mobile responsive","WhatsApp notifications","Admin panel"], time: "2 — 4 weeks", from: "₦150,000", tags: ["Paystack","Shopping Cart"] },
  { num: "04", title: "School Websites", tagline: "Where we started. Where we excel.", desc: "We built our first website for Prudential International School, Abuja. We understand what school websites need — galleries, staff pages, news, and academic info.", includes: ["All pages from Website package","Gallery section","News & events","Staff directory","School values & curriculum","Optional: admission + Paystack"], time: "2 — 3 weeks", from: "₦120,000", tags: ["Our Speciality","Full Featured"] },
  { num: "05", title: "Monthly Maintenance", tagline: "We keep it running. You keep it growing.", desc: "Like your generator subscription — but for your website. We handle updates, fixes, content changes, and make sure your site is always online.", includes: ["Content updates","Bug fixes","Security checks","Uptime monitoring","WhatsApp support","Monthly report"], time: "Ongoing", from: "₦20,000/month", tags: ["Ongoing","Support"] },
  { num: "06", title: "Logo Design", tagline: "The face of your brand.", desc: "A clean, professional logo that works on your website, business cards, and social media. We design, you approve, multiple formats delivered.", includes: ["2 concept directions","Unlimited revisions","PNG, SVG, PDF files","Light & dark versions","Favicon version","Brand color palette"], time: "3 — 5 days", from: "₦10,000", tags: ["Branding","Identity"] },
];
function ServiceAccordion({ s, i }) {
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
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 400, color: "var(--gold)", whiteSpace: "nowrap" }}>From {s.from}</span>
          <span className="service-row-arrow" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>+</span>
        </div>
      </div>
      {open && (
        <div style={{ paddingBottom: 40, display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, animation: "fadeUp 0.3s ease both" }}>
          <div/>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p style={{ fontSize: 15, color: "var(--mid)", lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                <div><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", marginBottom: 6 }}>TIMELINE</div><div style={{ fontSize: 15 }}>{s.time}</div></div>
                <div><div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", marginBottom: 6 }}>FROM</div><div style={{ fontSize: 15, color: "var(--gold)", fontFamily: "var(--font-serif)", fontWeight: 400 }}>{s.from}</div></div>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-black" style={{ fontSize: 13, padding: "10px 24px" }} onClick={e => e.stopPropagation()}>Get a Quote ↗</a>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.15em", marginBottom: 16 }}>WHAT'S INCLUDED</div>
              {s.includes.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--mid)", marginBottom: 10 }}>
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
        <p>Click any service to see what's included, how long it takes, and what it costs. No hidden fees.</p>
      </div>
    </div>
    <section className="services-section">
      <div className="ef-container">
        {SERVICES.map((s, i) => <ServiceAccordion key={s.num} s={s} i={i} />)}
        <div style={{ borderBottom: "1px solid var(--border)" }}/>
      </div>
    </section>
    <section className="cta-section">
      <div className="ef-container">
        <AnimateIn><h2>Not sure what<br/><em>you need?</em></h2></AnimateIn>
        <AnimateIn delay={1} className="cta-actions">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-black" style={{ fontSize: 16, padding: "16px 40px" }}>Chat on WhatsApp ↗</a>
        </AnimateIn>
      </div>
    </section>
  </>);
}
