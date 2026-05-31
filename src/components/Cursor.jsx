import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = e => {
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    const over = e => { if (e.target.closest("a,button,[data-hover]")) { dot.current?.classList.add("hovering"); ring.current?.classList.add("hovering"); } };
    const out = () => { dot.current?.classList.remove("hovering"); ring.current?.classList.remove("hovering"); };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); document.removeEventListener("mouseout", out); };
  }, []);
  return (<>
    <div ref={dot} className="cursor-dot" />
    <div ref={ring} className="cursor-ring" />
  </>);
}
