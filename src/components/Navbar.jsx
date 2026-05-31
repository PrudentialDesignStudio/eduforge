import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const LOGO = "https://res.cloudinary.com/dagt2a1w0/image/upload/v1780104046/ChatGPT_Image_May_30_2026_01_26_42_AM_brxysy.png";
const LINKS = [{ label: "About", path: "/about" }, { label: "Services", path: "/services" }, { label: "Pricing", path: "/pricing" }, { label: "Contact", path: "/contact" }];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const loc = useLocation();
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => setOpen(false), [loc]);
  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="ef-container">
        <div className="navbar-inner">
          <Link to="/" className="nav-brand">
            {!imgErr ? <img src={LOGO} alt="EduForge" onError={() => setImgErr(true)} /> : <div style={{ width: 40, height: 40, background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--black)", fontWeight: 700 }}>E</div>}
            <div className="nav-brand-text"><strong>EduForge</strong><span>Web Studio</span></div>
          </Link>
          <div className="nav-links">
            <Link to="/" className={`nav-link${loc.pathname === "/" ? " active" : ""}`}>Home</Link>
            {LINKS.map(({ label, path }) => <Link key={path} to={path} className={`nav-link${loc.pathname === path ? " active" : ""}`}>{label}</Link>)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link to="/start" className="nav-cta">Start a Project</Link>
            <button className="hamburger" onClick={() => setOpen(!open)}>
              <span style={{ transform: open ? "rotate(45deg) translateY(6px)" : "none" }}/>
              <span style={{ opacity: open ? 0 : 1 }}/>
              <span style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }}/>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link to="/" className="mobile-link">Home</Link>
        {LINKS.map(({ label, path }) => <Link key={path} to={path} className="mobile-link">{label}</Link>)}
        <Link to="/start" className="mobile-cta">Start a Project</Link>
      </div>
    </nav>
  );
}