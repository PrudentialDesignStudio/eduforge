import { useState, useEffect, useRef } from "react";
const LOGO = "https://res.cloudinary.com/dagt2a1w0/image/upload/v1780104046/ChatGPT_Image_May_30_2026_01_26_42_AM_brxysy.png";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  dur: 5 + Math.random() * 7,
  delay: Math.random() * 5,
  gold: Math.random() > 0.5,
}));

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => {
      if (c >= 100) { clearInterval(interval); return 100; }
      return c + 2;
    }), 56);
    const t = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onComplete?.(), 900);
    }, 3400);
    return () => { clearInterval(interval); clearTimeout(t); };
  }, [onComplete]);

  return (
    <div className={`ef-loader${leaving ? " ef-loader-leaving" : ""}`}>
      {/* Background orbs */}
      <div className="ef-loader-orb ef-loader-orb-1" />
      <div className="ef-loader-orb ef-loader-orb-2" />

      {/* Particles */}
      <div className="ef-loader-particles">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className={`ef-loader-particle${p.gold ? " gold" : ""}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="ef-loader-center">
        {/* Logo with spinning rings */}
        <div className="ef-loader-logo-wrap">
          <div className="ef-loader-ring ef-loader-ring-a" />
          <div className="ef-loader-ring ef-loader-ring-b" />
          <div className="ef-loader-ring ef-loader-ring-c" />
          <div className="ef-loader-glow" />
          {!imgErr
            ? <img src={LOGO} alt="EduForge" className="ef-loader-img" onError={() => setImgErr(true)} />
            : <div className="ef-loader-fallback">E</div>
          }
        </div>

        {/* Studio name */}
        <div className="ef-loader-name">
          <strong>EduForge</strong>
          <span>Web Studio</span>
        </div>

        {/* Tagline */}
        <div className="ef-loader-sub">Abuja, Nigeria · Est. 2025</div>

        {/* Progress bar */}
        <div className="ef-loader-track">
          <div className="ef-loader-fill" style={{ width: `${count}%` }} />
        </div>

        {/* Counter */}
        <div className="ef-loader-count">{String(count).padStart(3, "0")}</div>

        {/* Bottom tagline */}
        <div className="ef-loader-tagline">Websites that educate. Technology that empowers.</div>
      </div>
    </div>
  );
}
