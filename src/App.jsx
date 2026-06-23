import { PageLoader } from "./components/PageLoader";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { QuickInquiryBar } from "./components/sections/QuickInquiryBar";
import { TrustStrip } from "./components/sections/TrustStrip";
import { LocalTrust } from "./components/sections/LocalTrust";
import { FeaturedWork } from "./components/sections/FeaturedWork";
import { Services } from "./components/sections/Services";
import { IndustriesWeServe } from "./components/sections/IndustriesWeServe";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { ComparisonSection } from "./components/sections/ComparisonSection";
import { About } from "./components/sections/About";
import { PrintingShowcase } from "./components/sections/PrintingShowcase";
import { CaseStudies } from "./components/sections/CaseStudies";
import { DigitalPortfolio } from "./components/sections/DigitalPortfolio";
import { Process } from "./components/sections/Process";
import { ResultsImpact } from "./components/sections/ResultsImpact";
import { Reviews } from "./components/sections/Reviews";
import { Solutions } from "./components/sections/Solutions";
import { FAQ } from "./components/sections/FAQ";
import { FreeConsultation } from "./components/sections/FreeConsultation";
import { Contact } from "./components/sections/Contact";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { MobileStickyContactBar } from "./components/MobileStickyContactBar";

function App() {
  return (
    <div className="min-h-screen bg-background font-inter text-body selection:bg-accent selection:text-white flex flex-col relative">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Hero />
        <TrustStrip />
        <QuickInquiryBar />
        <FeaturedWork />
        <Services />
        <WhyChooseUs />
        <ComparisonSection />
        <About />
        <ResultsImpact />
        <IndustriesWeServe />
        <PrintingShowcase />
        <CaseStudies />
        <DigitalPortfolio />
        <Process />
        <Reviews />
        <Solutions />
        <FAQ />
        <FreeConsultation />
        <Contact />
        <FinalCTA />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyContactBar />
    </div>
  );
}

export default App;
