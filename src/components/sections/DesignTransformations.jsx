import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const ComparisonSlider = ({ beforeLabel, afterLabel, beforeColor, afterColor, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-outfit font-bold text-xl text-heading text-center">{title}</h4>
      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-premium overflow-hidden select-none bg-slate-100 border border-borderLight shadow-sm cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Background) */}
        <div className={`absolute inset-0 flex items-center justify-center ${afterColor}`}>
          <span className="font-outfit font-bold text-white text-2xl px-4 text-center">{afterLabel}</span>
        </div>

        {/* Before Image (Clipped) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center ${beforeColor}`}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <span className="font-outfit font-bold text-white/70 text-2xl px-4 text-center">{beforeLabel}</span>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-borderLight">
            <div className="w-4 h-4 flex justify-between items-center">
               <div className="w-0.5 h-3 bg-slate-300 rounded-full"></div>
               <div className="w-0.5 h-3 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function DesignTransformations() {
  const transformations = [
    {
      title: "Business Card Redesign",
      beforeLabel: "Basic Template",
      afterLabel: "Premium Spot UV Design",
      beforeColor: "bg-slate-400",
      afterColor: "bg-primary"
    },
    {
      title: "Website Overhaul",
      beforeLabel: "Outdated Layout",
      afterLabel: "Modern React Agency App",
      beforeColor: "bg-orange-300",
      afterColor: "bg-accent"
    }
  ];

  return (
    <section className="bg-slate-50 section-padding border-y border-borderLight">
      <div className="container-premium">
        <SectionHeading 
          badge="Proven Value"
          title="Before & After Transformations"
          subtitle="Drag the sliders to see how our premium design services instantly elevate brand perception."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <ComparisonSlider {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
