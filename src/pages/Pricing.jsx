import { useState } from "react";
import AnimateIn from "../components/AnimateIn";
const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
const PKG = [
  { name: "Basic", price: "₦80k", desc: "For small businesses and individuals who need a clean online presence.", features: ["Up to 5 pages","Mobile responsive","WhatsApp contact","Social media links","Basic SEO","30 days support"], excl: ["E-commerce","Blog section"], featured: false },
  { name: "Standard", price: "₦120k", desc: "For businesses that want more features and a more complete digital identity.", features: ["Up to 10 pages","Everything in Basic","Gallery section","Blog / news section","Google Maps","Custom animations","SEO optimisation","60 days support"], excl: [], featured: true },
  { name: "Premium", price: "₦300k", desc: "Full-featured with payment integration, online store, or advanced features.", features: ["Unlimited pages","Everything in Standard","Paystack / e-commerce","Admin dashboard","Order management","Priority support","90 days support"], excl: [], featured: false },
];
const FAQS = [
  { q: "Do I pay everything upfront?", a: "No. We take 50% to start and 50% when the site is ready and you're happy with it. Simple." },
  { q: "What if I need changes after launch?", a: "Every package includes free support days. After that, subscribe to our ₦15,000/month maintenance for ongoing changes." },
  { q: "Do you use Wix or WordPress?", a: "Never. We write real code — React for the frontend, Node.js for the backend. Your site is completely yours." },
  { q: "What do I need to provide?", a: "Your business name, logo if you have one, photos, and your content. We help you figure out everything else." },
  { q: "Can you host the website?", a: "Yes. We set everything up on Netlify (free) or help with paid hosting. We guide you through the whole process." },
  { q: "Can we negotiate pricing?", a: "Message us on WhatsApp. We're honest people — if we can work something out, we will. If we can't, we'll say so straight." },
];
export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);
  return (<>
    <div className="page-hero">
      <div className="ef-container">
        <div className="page-hero-label">Transparent pricing</div>
        <h1>Clear pricing.<br/><em>No surprises.</em></h1>
        <p>Three honest packages. You know exactly what you're getting before you pay a single naira. 50% to start, 50% on delivery.</p>
      </div>
    </div>
    <section className="pricing-section">
      <div className="ef-container">
        <AnimateIn className="pricing-header">
          <h2>Choose your package</h2>
          <p>All prices are one-time setup fees. Add ₦15,000/month for ongoing maintenance.</p>
        </AnimateIn>
        <AnimateIn delay={1}>
          <div className="pricing-grid">
            {PKG.map(pkg => (
              <div key={pkg.name} className={`pricing-col${pkg.featured ? " featured" : ""}`}>
                {pkg.featured && <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.3em", color: "var(--gold)", marginBottom: 8 }}>MOST POPULAR</div>}
                <div className="pricing-col-name">{pkg.name}</div>
                <div className="pricing-col-price">{pkg.price}</div>
                <div className="pricing-col-period">one-time setup fee</div>
                <p className="pricing-col-period" style={{ marginBottom: 32, fontSize: 14 }}>{pkg.desc}</p>
                <div className="pricing-col-features">
                  {pkg.features.map(f => <div key={f} className="pricing-feature"><span className="pricing-feature-check">✓</span>{f}</div>)}
                  {pkg.excl.map(f => <div key={f} className="pricing-feature dim"><span className="pricing-feature-check" style={{ color: "currentColor" }}>×</span>{f}</div>)}
                </div>
                <a href={`${WA}&text=Hi%20EduForge%2C%20I%27m%20interested%20in%20the%20${pkg.name}%20package.`} target="_blank" rel="noopener noreferrer" className="pricing-col-cta">{pkg.featured ? "Get Started ↗" : "Choose Plan ↗"}</a>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={2}>
          <div style={{ marginTop: 2, padding: "40px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, background: "var(--off-white)" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.2em", marginBottom: 8 }}>ADD-ON</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, letterSpacing: "-0.02em", marginBottom: 8 }}>Monthly Maintenance</div>
              <p style={{ fontSize: 14, color: "var(--mid)", maxWidth: 400 }}>Like your generator subscription — but for your website. Updates, fixes, content changes, and uptime monitoring.</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 44, letterSpacing: "-0.04em", marginBottom: 4 }}>₦15k</div>
              <div style={{ fontSize: 13, color: "var(--mid)", marginBottom: 16 }}>per month</div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost">Add to my package</a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
    <section className="faq-section">
      <div className="ef-container">
        <AnimateIn>
          <div className="faq-header">
            <h2>Got questions?</h2>
            <p>We've answered the most common ones. Can't find what you're looking for? Message us on WhatsApp.</p>
          </div>
        </AnimateIn>
        {FAQS.map(({ q, a }, i) => (
          <AnimateIn key={q}>
            <div className={`faq-item${openFaq === i ? " open" : ""}`}>
              <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span className="faq-q">{q}</span>
                <div className="faq-icon">{openFaq === i ? "−" : "+"}</div>
              </button>
              {openFaq === i && <p className="faq-a">{a}</p>}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  </>);
}
