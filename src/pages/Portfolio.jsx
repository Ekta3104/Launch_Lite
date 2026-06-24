import { DigitalPortfolio } from "../components/sections/DigitalPortfolio";
import { CaseStudies } from "../components/sections/CaseStudies";

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <DigitalPortfolio />
      <CaseStudies />
    </div>
  );
}
