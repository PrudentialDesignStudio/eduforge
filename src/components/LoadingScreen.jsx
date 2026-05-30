import { useState, useEffect } from "react";
const LOGO = "https://res.cloudinary.com/dagt2a1w0/image/upload/v1780104046/ChatGPT_Image_May_30_2026_01_26_42_AM_brxysy.png";
export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setCount(c => { if (c >= 100) { clearInterval(interval); return 100; } return c + 2; }), 56);
    const t = setTimeout(() => { setLeaving(true); setTimeout(() => onComplete?.(), 800); }, 3200);
    return () => { clearInterval(interval); clearTimeout(t); };
  }, [onComplete]);
  return (
    <div className={`loader${leaving ? " leaving" : ""}`}>
      <div className="loader-logo">
        {!imgErr
          ? <img src={LOGO} alt="EduForge" onError={() => setImgErr(true)} />
          : <div style={{ width: 64, height: 64, background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontSize: 28, color: "#000" }}>E</div>}
        <div className="loader-logo-text">
          <strong>EduForge</strong>
          <span>Web Studio</span>
        </div>
      </div>
      <div>
        <div className="loader-line-wrap"><div className="loader-line"/></div>
      </div>
      <div className="loader-count">{String(count).padStart(3,"0")}</div>
      <div className="loader-tagline">Websites that educate. Technology that empowers.</div>
    </div>
  );
}
