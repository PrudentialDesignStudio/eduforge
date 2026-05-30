import { useState } from "react";
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

const BUDGETS = [
  "Under ₦80,000",
  "₦80,000 – ₦150,000",
  "₦150,000 – ₦300,000",
  "Above ₦300,000",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "No rush",
];

export default function Start() {
  const [step, setStep] = useState(1);
  const TOTAL = 4;

  const [name, setName]         = useState("");
  const [biz, setBiz]           = useState("");
  const [service, setService]   = useState("");
  const [budget, setBudget]     = useState("");
  const [timeline, setTimeline] = useState("");
  const [desc, setDesc]         = useState("");

  const next = () => setStep(s => Math.min(s + 1, TOTAL));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const canNext = () => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return service.length > 0;
    if (step === 3) return budget.length > 0 && timeline.length > 0;
    return true;
  };

  const submit = () => {
    const lines = [
      `Hi EduForge! I'd like to start a project.`,
      ``,
      `Name: ${name}`,
      biz ? `Business: ${biz}` : null,
      `Service: ${service}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      desc ? `\nDetails:\n${desc}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(lines)}`, "_blank");
  };

  const progress = (step / TOTAL) * 100;

  return (
    <>
      <div className="page-hero">
        <div className="ef-container">
          <div className="page-hero-label">Start a project</div>
          <h1>Tell us what<br /><em>you're building.</em></h1>
          <p>Four quick questions and we'll have everything we need to give you an honest quote on WhatsApp.</p>
        </div>
      </div>

      <section className="start-section">
        <div className="ef-container">
          <div className="start-wrap">

            {/* Progress bar */}
            <div className="start-progress-row">
              <div className="start-progress-bar">
                <div className="start-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="start-progress-label">{step} / {TOTAL}</div>
            </div>

            {/* Step 1 — Who are you */}
            {step === 1 && (
              <AnimateIn>
                <div className="start-step">
                  <div className="start-step-num">01</div>
                  <h2 className="start-step-title">First, who are you?</h2>
                  <p className="start-step-sub">Just your name and business — so we know who we're talking to.</p>
                  <div className="start-fields">
                    <div>
                      <label className="contact-form-label">Your Name *</label>
                      <input
                        className="contact-form-input"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Tunde Balogun"
                        autoFocus
                      />
                    </div>
                    <div>
                      <label className="contact-form-label">Business / School Name</label>
                      <input
                        className="contact-form-input"
                        type="text"
                        value={biz}
                        onChange={e => setBiz(e.target.value)}
                        placeholder="Optional — leave blank if you don't have one yet"
                      />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Step 2 — What do you need */}
            {step === 2 && (
              <AnimateIn>
                <div className="start-step">
                  <div className="start-step-num">02</div>
                  <h2 className="start-step-title">What do you need?</h2>
                  <p className="start-step-sub">Pick the service that best describes what you're after.</p>
                  <div className="start-options">
                    {SERVICES.map(s => (
                      <button
                        key={s}
                        className={`start-option${service === s ? " selected" : ""}`}
                        onClick={() => setService(s)}
                      >
                        {s}
                        {service === s && <span className="start-option-check">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Step 3 — Budget & Timeline */}
            {step === 3 && (
              <AnimateIn>
                <div className="start-step">
                  <div className="start-step-num">03</div>
                  <h2 className="start-step-title">Budget & timeline?</h2>
                  <p className="start-step-sub">Honest answers help us give you an honest quote.</p>
                  <div className="start-fields">
                    <div>
                      <label className="contact-form-label">Your budget range</label>
                      <div className="start-options" style={{ marginTop: 12 }}>
                        {BUDGETS.map(b => (
                          <button
                            key={b}
                            className={`start-option${budget === b ? " selected" : ""}`}
                            onClick={() => setBudget(b)}
                          >
                            {b}
                            {budget === b && <span className="start-option-check">✓</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: 32 }}>
                      <label className="contact-form-label">When do you need it?</label>
                      <div className="start-options" style={{ marginTop: 12 }}>
                        {TIMELINES.map(t => (
                          <button
                            key={t}
                            className={`start-option${timeline === t ? " selected" : ""}`}
                            onClick={() => setTimeline(t)}
                          >
                            {t}
                            {timeline === t && <span className="start-option-check">✓</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Step 4 — Details + Review */}
            {step === 4 && (
              <AnimateIn>
                <div className="start-step">
                  <div className="start-step-num">04</div>
                  <h2 className="start-step-title">Anything else to add?</h2>
                  <p className="start-step-sub">Describe your project, share a reference site, or just say hello. Totally optional.</p>
                  <textarea
                    className="contact-form-input"
                    rows={5}
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    placeholder="e.g. I run a pharmacy in Lagos and I need an online catalogue with Paystack checkout..."
                    style={{ resize: "vertical", marginTop: 8 }}
                  />

                  {/* Summary */}
                  <div className="start-summary">
                    <div className="start-summary-label">Your brief summary</div>
                    <div className="start-summary-grid">
                      <div className="start-summary-item">
                        <span className="start-summary-key">Name</span>
                        <span className="start-summary-val">{name}{biz ? ` · ${biz}` : ""}</span>
                      </div>
                      <div className="start-summary-item">
                        <span className="start-summary-key">Service</span>
                        <span className="start-summary-val">{service}</span>
                      </div>
                      <div className="start-summary-item">
                        <span className="start-summary-key">Budget</span>
                        <span className="start-summary-val">{budget}</span>
                      </div>
                      <div className="start-summary-item">
                        <span className="start-summary-key">Timeline</span>
                        <span className="start-summary-val">{timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Navigation */}
            <div className="start-nav">
              {step > 1 && (
                <button className="btn-ghost" onClick={back}>← Back</button>
              )}
              <div style={{ flex: 1 }} />
              {step < TOTAL ? (
                <button
                  className="btn-black"
                  onClick={next}
                  disabled={!canNext()}
                  style={{ opacity: canNext() ? 1 : 0.35 }}
                >
                  Continue →
                </button>
              ) : (
                <button className="btn-black" onClick={submit} style={{ fontSize: 15, padding: "14px 36px" }}>
                  Send Brief on WhatsApp ↗
                </button>
              )}
            </div>

            <p className="start-footer-note">
              Clicking "Send" opens WhatsApp with your brief pre-filled. We usually reply within a few hours.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
