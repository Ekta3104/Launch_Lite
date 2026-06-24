import { Hero } from "../components/sections/Hero";
import { TrustStrip } from "../components/sections/TrustStrip";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Process } from "../components/sections/Process";
import { ReadyToGrow } from "../components/sections/ReadyToGrow";
import { ComparisonSection } from "../components/sections/ComparisonSection";
import { ResultsImpact } from "../components/sections/ResultsImpact";
import { Reviews } from "../components/sections/Reviews";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyChooseUs /> {/* This should appear here (kept in LocalTrust file previously) */}
      <FeaturedWork />
      <Reviews />
      <Process />
      <ReadyToGrow />
      <ComparisonSection />
      <ResultsImpact />
      { /*<LocalTrust /> */ } {/* This section is now integrated into WhyChooseUs */}
      <FAQ />
      <FinalCTA />
    </div>
  );
}
