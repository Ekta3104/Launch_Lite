import { DigitalPortfolio } from "../components/sections/DigitalPortfolio";
import { CaseStudies } from "../components/sections/CaseStudies";
import {PrintingShowcase} from "../components/sections/PrintingShowcase"

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <DigitalPortfolio />
      
      <PrintingShowcase />
      <CaseStudies />
    </div>
  );
}
