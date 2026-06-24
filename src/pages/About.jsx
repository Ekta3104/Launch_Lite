import { About as AboutSection } from "../components/sections/About";
import { IndustriesWeServe } from "../components/sections/IndustriesWeServe";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <IndustriesWeServe />
    </div>
  );
}
