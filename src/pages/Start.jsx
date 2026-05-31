import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";

const WA_NUM = "2349161103528";

const SERVICES = [
  "A business website",
  "A landing page",
  "An e-commerce store",
  "A school website",
  "Monthly maintenance",
  "A logo design",
  "Something else",
];

const HEARD_FROM = ["Instagram", "WhatsApp", "Referral from a friend", "Google", "Other"];

export default function Start() {
  const [step, setStep] = useState(1);
  const TOTAL = 4;
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [service, setService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [hadWebsite, setHadWebsite] = useState("");
  const [hasDomain, setHasDomain] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [desc, setDesc] = useState("");
  const [sent, setSent] = useState(false);

  const next = () => setStep(s => Math.min(s + 1, TOTAL));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const canNext = () => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return service.length > 0 && (service !== "Something else" || serviceOther.trim().length > 0);
    if (step === 3) return hadWebsite.length > 0 && hasDomain.length > 0;
    return true;
  };

  const submit = () => {
    const finalService = service === "Something else" ? serviceOther : service;
    const lines = [
      `Hey EduForge! I'd like to start a project.`,
      ``,
      `Name: ${name}`,
      biz ? `Business: ${biz}` : null,
      `Service needed: ${finalService}`,
      `Had a website before: ${hadWebsite}`,
      `Has domain already: ${hasDomain}`,
      heardFrom ? `Heard about EduForge via: ${heardFrom}` : null,
      desc ? `\nMore details:\n${desc}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(lines)}`, "_blank");
    setSent(true);
  };

  const progress = (step / TOTAL) * 100;

  if (sent) return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: "0.3em", marginBottom: 24 }}>SENT</div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: 16 }}>
        We'll get back to you<br/><em style={{ color: "var(--gold)", fontStyle: "italic" }}>within 24 hours.</em>
      </h1>
      <p style={{ fontSize: 16, color: "var(--mid)", marginBottom: 40, maxWidth: 480, fontWeight: 500 }}>Your brief is on its way. Check WhatsApp — we'll reply with questions, ideas, and next steps.</p>
      <Link to="/" className="btn-black">Back to Home →</Link>
    </div>
  );

  return (<>
    <div className="page-hero">
      <div className="ef-container">
        <div className="page-hero-label">Start a project</div>
        <h1>Tell us what<br/><em>you're building.</em></h1>
        <p>Four quick questions and we'll have everything we need to reach out to you on WhatsApp within 24 hours.</p>
      </div>
    </div>

    {/* TRUST BAR */}
    <div style={{ background: "var(--black)", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="ef-container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "center" }}>
          {[
            "50% to start · 50% on delivery",
            "Never full payment upfront",
            "Final payment due within 48hrs of delivery",
            "We reply within 24 hours",
          ].map(item => (
            <div key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--gold)" }}>✓</span>{item}
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="start-section">
      <div className="ef-container">
        <div className="start-wrap">
          {/* Progress */}
          <div className="start-progress-row">
            <div className="start-progress-bar"><div className="start-progress-fill" style={{ width: `${progress}%` }} /></div>
            <div className="start-progress-label">{step} / {TOTAL}</div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <AnimateIn>
              <div className="start-step">
                <div className="start-step-num">01</div>
                <h2 className="start-step-title">First, who are you?</h2>
                <p className="start-step-sub">Just your name and business — so we know who we're talking to.</p>
                <div className="start-fields">
                  <div>
                    <label className="contact-form-label">Your Name *</label>
                    <input className="contact-form-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Tunde Balogun" autoFocus/>
                  </div>
                  <div>
                    <label className="contact-form-label">Business / School Name</label>
                    <input className="contact-form-input" type="text" value={biz} onChange={e => setBiz(e.target.value)} placeholder="Optional — leave blank if you don't have one yet"/>
                  </div>
                </div>
              </div>
            </AnimateIn>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <AnimateIn>
              <div className="start-step">
                <div className="start-step-num">02</div>
                <h2 className="start-step-title">What do you need?</h2>
                <p className="start-step-sub">Pick the service that best describes what you're after.</p>
                <div className="start-options">
                  {SERVICES.map(s => (
                    <button key={s} className={`start-option${service === s ? " selected" : ""}`} onClick={() => setService(s)}>
                      {s}{service === s && <span className="start-option-check">✓</span>}
                    </button>
                  ))}
                </div>
                {service === "Something else" && (
                  <div style={{ marginTop: 16 }}>
                    <label className="contact-form-label">Tell us what you need</label>
                    <input className="contact-form-input" type="text" value={serviceOther} onChange={e => setServiceOther(e.target.value)} placeholder="Describe what you're looking for..." autoFocus/>
                  </div>
                )}
              </div>
            </AnimateIn>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <AnimateIn>
              <div className="start-step">
                <div className="start-step-num">03</div>
                <h2 className="start-step-title">A few quick questions.</h2>
                <p className="start-step-sub">This helps us understand where you're starting from.</p>
                <div className="start-fields">
                  <div>
                    <label className="contact-form-label">Have you had a website before?</label>
                    <div className="start-options" style={{ marginTop: 12 }}>
                      {["Yes — I need a redesign", "No — this is my first website", "I have one but it needs major fixes"].map(o => (
                        <button key={o} className={`start-option${hadWebsite === o ? " selected" : ""}`} onClick={() => setHadWebsite(o)}>
                          {o}{hadWebsite === o && <span className="start-option-check">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <label className="contact-form-label">Do you already have a domain name?</label>
                    <div className="start-options" style={{ marginTop: 12 }}>
                      {["Yes — I have a domain", "No — I need one", "Not sure what that is"].map(o => (
                        <button key={o} className={`start-option${hasDomain === o ? " selected" : ""}`} onClick={() => setHasDomain(o)}>
                          {o}{hasDomain === o && <span className="start-option-check">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <AnimateIn>
              <div className="start-step">
                <div className="start-step-num">04</div>
                <h2 className="start-step-title">Anything else to add?</h2>
                <p className="start-step-sub">Describe your project, share a reference site, or just say hello. Totally optional.</p>
                <textarea className="contact-form-input" rows={5} value={desc} onChange={e => setDesc(e.target.value)} placeholder="e.g. I run a pharmacy in Lagos and I need an online catalogue with Paystack checkout..." style={{ resize: "vertical", marginTop: 8 }}/>
                <div style={{ marginTop: 24 }}>
                  <label className="contact-form-label">How did you hear about us?</label>
                  <div className="start-options" style={{ marginTop: 12 }}>
                    {HEARD_FROM.map(o => (
                      <button key={o} className={`start-option${heardFrom === o ? " selected" : ""}`} onClick={() => setHeardFrom(o)}>
                        {o}{heardFrom === o && <span className="start-option-check">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Summary */}
                <div className="start-summary">
                  <div className="start-summary-label">Your brief summary</div>
                  <div className="start-summary-grid">
                    {[
                      { k: "Name", v: name + (biz ? ` · ${biz}` : "") },
                      { k: "Service", v: service === "Something else" ? serviceOther : service },
                      { k: "Website", v: hadWebsite },
                      { k: "Domain", v: hasDomain },
                    ].map(({ k, v }) => (
                      <div key={k} className="start-summary-item">
                        <span className="start-summary-key">{k}</span>
                        <span className="start-summary-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          )}

          {/* Nav */}
          <div className="start-nav">
            {step > 1 && <button className="btn-ghost" onClick={back}>← Back</button>}
            <div style={{ flex: 1 }}/>
            {step < TOTAL ? (
              <button className="btn-black" onClick={next} disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.35 }}>Continue →</button>
            ) : (
              <button className="btn-black" onClick={submit} style={{ fontSize: 15, padding: "14px 36px", background: "var(--gold)", color: "var(--black)", fontWeight: 700 }}>
                Send Brief on WhatsApp ↗
              </button>
            )}
          </div>
          <p className="start-footer-note">Opens WhatsApp with your brief pre-filled. We reply within 24 hours — usually much faster.</p>
        </div>
      </div>
    </section>
  </>);
}
