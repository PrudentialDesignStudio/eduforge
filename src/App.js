import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Start from "./pages/Start";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AppInner() {
  return (<>
    <ScrollToTop/>
    <ScrollProgress/>
    <Cursor/>
    <Navbar/>
    <WhatsAppButton/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer/>
  </>);
}

export default function App() {
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem("ef_loaded") === "1");
  const handleComplete = () => { sessionStorage.setItem("ef_loaded", "1"); setLoaded(true); };
  return (
    <BrowserRouter>
      {!loaded && <LoadingScreen onComplete={handleComplete}/>}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease", pointerEvents: loaded ? "all" : "none" }}>
        <AppInner/>
      </div>
    </BrowserRouter>
  );
}
