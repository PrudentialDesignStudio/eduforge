import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";
const WA_NUM = "2349161103528";
const IG = "https://www.instagram.com/eduforgewebstudio/";

const WhatsAppIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const LocationIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IgIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;

export default function Contact() {
  const [name, setName] = useState(""); const [biz, setBiz] = useState(""); const [service, setService] = useState(""); const [msg, setMsg] = useState("");
  const send = () => {
    if (!name.trim()) return;
    const text = encodeURIComponent(`Hi EduForge!\n\nMy name is ${name}${biz ? `, from ${biz}` : ""}.\nInterested in: ${service || "a website"}\n\n${msg}`);
    window.open(`https://wa.me/${WA_NUM}?text=${text}`, "_blank");
  };
  return (<>
    <div className="page-hero">
      <div className="ef-container">
        <div className="page-hero-label">Get in touch</div>
        <h1>Let's build something<br/><em>real together.</em></h1>
        <p>Tell us about your project. We'll get back to you on WhatsApp — usually within a few hours.</p>
      </div>
    </div>
    <section className="contact-section">
      <div className="ef-container">
        <div className="contact-grid">
          <AnimateIn from="left">
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.25em", marginBottom: 48 }}>CONTACT INFO</div>
              {[
                { label: "WhatsApp", value: "09161103528", href: `https://wa.me/${WA_NUM}`, Icon: WhatsAppIcon },
                { label: "Location", value: "Abuja, FCT, Nigeria", href: null, Icon: LocationIcon },
                { label: "Instagram", value: "@eduforgewebstudio", href: IG, Icon: IgIcon },
              ].map(({ label, value, href, Icon }) => (
                <div key={label} className="contact-info-item">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none", color: "inherit", width: "100%" }}>
                      <div className="contact-info-icon"><Icon /></div>
                      <div><div className="contact-info-label">{label}</div><div className="contact-info-value">{value}</div></div>
                    </a>
                  ) : (
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <div className="contact-info-icon"><Icon /></div>
                      <div><div className="contact-info-label">{label}</div><div className="contact-info-value">{value}</div></div>
                    </div>
                  )}
                </div>
              ))}
              <div style={{ marginTop: 48, padding: "32px 40px", background: "var(--off-white)", border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontStyle: "italic", marginBottom: 12, lineHeight: 1.5, color: "var(--black)" }}>"The fastest way to reach us is WhatsApp. We respond within hours."</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.2em" }}>— EduForge Web Studio</div>
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/start" className="btn-black" style={{ width: "100%", justifyContent: "center", display: "flex" }}>Start with a proper brief →</Link>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={1}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mid)", letterSpacing: "0.25em", marginBottom: 48 }}>SEND A MESSAGE</div>
              <div>
                <label className="contact-form-label">Your Name *</label>
                <input className="contact-form-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="What do we call you?"/>
              </div>
              <div>
                <label className="contact-form-label">Business Name</label>
                <input className="contact-form-input" type="text" value={biz} onChange={e => setBiz(e.target.value)} placeholder="Your business or school (optional)"/>
              </div>
              <div>
                <label className="contact-form-label">What do you need?</label>
                <select className="contact-form-input contact-form-select" value={service} onChange={e => setService(e.target.value)}>
                  <option value="">Select a service...</option>
                  {["a business website","a landing page","an e-commerce store","a school website","monthly maintenance","a logo design","something else"].map(o => <option key={o} value={o}>{o.charAt(0).toUpperCase() + o.slice(1)}</option>)}
                </select>
              </div>
              <div>
                <label className="contact-form-label">Tell us more</label>
                <textarea className="contact-form-input" rows={4} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Budget, timeline, anything helpful..." style={{ resize: "vertical" }}/>
              </div>
              <button onClick={send} disabled={!name.trim()} className="btn-black" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "16px", opacity: name.trim() ? 1 : 0.4 }}>
                Send via WhatsApp ↗
              </button>
              <p style={{ fontSize: 12, color: "var(--mid)", textAlign: "center", marginTop: 12 }}>Opens WhatsApp with your message pre-filled. No email needed.</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  </>);
}
