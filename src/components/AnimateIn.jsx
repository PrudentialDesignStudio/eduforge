import { useEffect, useRef, useState } from "react";
export default function AnimateIn({ children, className = "", delay = 0, from = "bottom", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const fromClass = from === "left" ? " from-left" : from === "right" ? " from-right" : "";
  return (
    <div ref={ref} className={`animate-in${fromClass}${delay ? ` delay-${delay}` : ""}${visible ? " visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
