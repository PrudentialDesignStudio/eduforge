import { Link } from "react-router-dom";
const LOGO = "https://res.cloudinary.com/dagt2a1w0/image/upload/v1780104046/ChatGPT_Image_May_30_2026_01_26_42_AM_brxysy.png";
const WA = "https://wa.me/2349161103528?text=Hi%20EduForge%2C%20I%27m%20interested%20in%20a%20website.";
const IG = "https://www.instagram.com/eduforgewebstudio/";
const IgIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
export default function Footer() {
  return (
    <footer className="footer">
      <div className="ef-container">
        <div className="footer-top">
          <div>
            <img src={LOGO} alt="EduForge" style={{ height: 48, marginBottom: 16, filter: "brightness(0) invert(1) opacity(0.85)", objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
            <div className="footer-brand-name">EduForge</div>
            <div className="footer-brand-sub">Web Studio · Abuja</div>
            <p className="footer-brand-desc">Fresh web studio from Abuja. Clean, real websites for businesses and schools across Nigeria. No fake numbers, no shortcuts.</p>
            {/* Instagram CTA — same card structure as Prudential's Facebook CTA */}
            <a href={IG} target="_blank" rel="noopener noreferrer" className="footer-ig-cta">
              <div className="footer-ig-icon"><IgIcon /></div>
              <div className="footer-ig-text">
                <span className="footer-ig-label">Follow us on Instagram</span>
                <span className="footer-ig-sub">See our latest work & projects</span>
              </div>
              <span className="footer-ig-arrow">→</span>
            </a>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {["Website Design","Landing Pages","E-commerce","School Websites","Monthly Maintenance","Logo Design"].map(s => <span key={s} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>{s}</span>)}
          </div>
          <div className="footer-col">
            <h4>Our Values</h4>
            <div className="footer-values-row">
              {["Honest Work","Real Code","Built for Nigeria","Fast Delivery","Fair Pricing","Long-term"].map(v => <span key={v} className="footer-val-tag">{v}</span>)}
            </div>
            <h4 style={{ marginTop: 32 }}>Contact</h4>
            <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp: 09161103528</a>
            <span style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>Abuja, FCT, Nigeria</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EduForge Web Studio. All rights reserved.</p>
          <p>Built by <span className="elite">EduForge Web Studio</span> · Abuja, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
