import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = e => {
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    const over = e => { if (e.target.closest("a,button,[data-hover]")) ring.current?.classList.add("hovering"); };
    const out = () => ring.current?.classList.remove("hovering");
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
  }, []);
  return (<>
    <div ref={dot} className="cursor cursor-dot" style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }}/>
    <div ref={ring} className="cursor cursor-ring" style={{ position: "fixed", pointerEvents: "none", zIndex: 99998, transition: "left 0.08s linear, top 0.08s linear, width 0.3s ease, height 0.3s ease" }}/>
  </>);
}
