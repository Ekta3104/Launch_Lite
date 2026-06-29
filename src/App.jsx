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
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageMeta = {
      "/": { title: "Home | LaunchLite", desc: "Professional printing, wedding cards, brochures, branding, website development and digital solutions across Maharashtra." },
      "/about": { title: "About Us | LaunchLite", desc: "Learn about LaunchLite - forming pixels, crafting prints, and growing brands in Ahilyanagar." },
      "/services": { title: "Our Services | LaunchLite", desc: "Explore our digital solutions, custom web applications, branding kits, and premium printing services." },
      "/portfolio": { title: "Portfolio | LaunchLite", desc: "Browse our portfolio of digital web portals, mobile application builds, and custom print layouts." },
      "/pricing": { title: "Pricing Plans | LaunchLite", desc: "Simple, transparent pricing packages for startups, growing businesses, and custom enterprise needs." },
      "/contact": { title: "Contact Us | LaunchLite", desc: "Get in touch with LaunchLite to request a free quote for your next digital or printing project." },
      "/privacy": { title: "Privacy Policy | LaunchLite", desc: "Read LaunchLite's privacy policy, detailing how we collect, store, and protect your information." },
      "/terms": { title: "Terms of Service | LaunchLite", desc: "Review LaunchLite's terms of service, payment parameters, revision policies, and delivery terms." }
    };

    const meta = pageMeta[location.pathname] || { title: "LaunchLite | Digital Agency", desc: "Professional Printing & Digital Agency Solutions" };
    document.title = meta.title;

    // Update Meta Description
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.desc);

    // Update Open Graph Description
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", meta.desc);

    // Update Open Graph Title
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", meta.title);

    // Update Canonical Link
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute("href", `https://launchlite.com${location.pathname === "/" ? "" : location.pathname}`);
    }
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
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
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
