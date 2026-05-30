import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Start from "./pages/Start";

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
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/start" element={<Start/>}/>
      </Routes>
    </main>
    <Footer/>
  </>);
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <BrowserRouter>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)}/>}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease", pointerEvents: loaded ? "all" : "none" }}>
        <AppInner/>
      </div>
    </BrowserRouter>
  );
}
