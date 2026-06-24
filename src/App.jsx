import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageLoader } from "./components/PageLoader";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileStickyContactBar } from "./components/MobileStickyContactBar";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home | LaunchLite",
      "/about": "About Us | LaunchLite",
      "/services": "Our Services | LaunchLite",
      "/portfolio": "Portfolio | LaunchLite",
      "/pricing": "Pricing Plans | LaunchLite",
      "/contact": "Contact Us | LaunchLite"
    };
    
    document.title = titles[location.pathname] || "LaunchLite | Digital Agency";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-inter text-body selection:bg-accent selection:text-white flex flex-col relative">
      <ScrollToTop />
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyContactBar />
    </div>
  );
}

export default App;
