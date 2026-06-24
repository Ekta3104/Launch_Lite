import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your brand, goals, and requirements." },
    { num: "02", title: "Planning", desc: "Strategic roadmap and project architecture definition." },
    { num: "03", title: "Design", desc: "Creating premium UI/UX mockups and print layouts." },
    { num: "04", title: "Development", desc: "Building scalable digital solutions and preparing print files." },
    { num: "05", title: "Testing", desc: "Rigorous quality assurance and cross-device testing." },
    { num: "06", title: "Delivery", desc: "Final launch, handover, and physical print delivery." }
  ];

  const [state, setState] = useState({ activeStep: 0, progress: 0 });

  // Auto-play timer (cycles steps every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        const nextProgress = prev.progress + 0.6; // Increment per 30ms (100 / 0.6 * 30ms = 5000ms = 5s duration)
        if (nextProgress >= 100) {
          return {
            activeStep: (prev.activeStep + 1) % steps.length,
            progress: 0,
          };
        }
        return {
          ...prev,
          progress: nextProgress,
        };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [steps.length]);

  const { activeStep, progress } = state;

  const handleStepClick = (index) => {
    setState({ activeStep: index, progress: 0 });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-100/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="How We Work"
          title="Our Proven Process"
          subtitle="A systematic approach to ensuring quality, transparency, and timely delivery for every project."
          centered={true}
        />

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative mt-16"
        >
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            const isCompleted = activeStep > i;
            
            return (
              <motion.div
                key={i}
                onClick={() => handleStepClick(i)}
                animate={{
                  scale: isActive ? 1.04 : 1,
                  y: isActive ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer group transition-all duration-300 ${
                  isActive 
                    ? "bg-slate-50/50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100" 
                    : "border border-transparent"
                }`}
              >
                {/* 1. Desktop Connector Line (Lg Screen: columns 1->2, 2->3, and 4->5, 5->6) */}
                {(i !== 2 && i !== 5) && (
                  <div className="hidden lg:block absolute top-[54px] left-[calc(50%+48px)] right-[calc(-50%+48px)] h-[2px] bg-slate-100 -z-10">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
                      style={{
                        width: isActive ? `${progress}%` : isCompleted ? "100%" : "0%"
                      }}
                    />
                  </div>
                )}

                {/* 2. Tablet Connector Line (Md Screen: columns 1->2, 3->4, and 5->6) */}
                {(i % 2 === 0) && (
                  <div className="hidden md:block lg:hidden absolute top-[54px] left-[calc(50%+48px)] right-[calc(-50%+48px)] h-[2px] bg-slate-100 -z-10">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
                      style={{
                        width: isActive ? `${progress}%` : isCompleted ? "100%" : "0%"
                      }}
                    />
                  </div>
                )}

                {/* 3. Mobile Connector Line (Vertical line from center to next card's center) */}
                {i !== 5 && (
                  <div className="md:hidden absolute top-[54px] bottom-[-68px] left-1/2 -translate-x-1/2 w-[2px] bg-slate-100 -z-10">
                    <div 
                      className="w-full bg-gradient-to-b from-orange-500 to-pink-500 transition-all duration-300"
                      style={{
                        height: isActive ? `${progress}%` : isCompleted ? "100%" : "0%"
                      }}
                    />
                  </div>
                )}

                {/* Circular Indicator with SVG Progress Ring */}
                <div className="relative mb-6">
                  {/* Outer glow ring for active step */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute -inset-3 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 blur-md"
                      transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    />
                  )}

                  <div className={`w-24 h-24 rounded-full flex items-center justify-center relative transition-all duration-500 bg-white ${
                    isActive 
                      ? "shadow-md border border-orange-100" 
                      : "border-2 border-slate-100 shadow-sm group-hover:border-slate-200"
                  }`}>
                    {/* SVG progress ring around the circle */}
                    <svg className="absolute -inset-[3px] w-[102px] h-[102px] -rotate-90 pointer-events-none select-none">
                      {/* Background ring */}
                      <circle
                        cx="51"
                        cy="51"
                        r="47"
                        stroke={isActive ? "#f8fafc" : "transparent"}
                        strokeWidth="3"
                        fill="transparent"
                      />
                      {/* Active animated progress stroke */}
                      <circle
                        cx="51"
                        cy="51"
                        r="47"
                        stroke="url(#process-gradient)"
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray="295.3"
                        strokeDashoffset={isActive ? 295.3 - (295.3 * progress) / 100 : isCompleted ? 0 : 295.3}
                        strokeLinecap="round"
                        className="transition-all duration-75 ease-linear"
                      />
                      <defs>
                        <linearGradient id="process-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span className={`font-outfit font-extrabold text-3xl transition-colors duration-500 ${
                      isActive 
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600" 
                        : isCompleted 
                          ? "text-slate-800" 
                          : "text-slate-300 group-hover:text-slate-400"
                    }`}>
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-outfit font-bold text-xl mb-3 transition-colors duration-300 ${
                  isActive 
                    ? "text-[#111827] scale-105" 
                    : "text-slate-800 group-hover:text-slate-900"
                }`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`font-inter text-sm leading-relaxed transition-colors duration-300 max-w-[260px] ${
                  isActive 
                    ? "text-slate-600" 
                    : "text-slate-500 group-hover:text-slate-600"
                }`}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quick navigation timeline bar at the bottom */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => handleStepClick(i)}
              className={`h-3 rounded-full transition-all duration-500 ${
                activeStep === i 
                  ? "w-10 bg-gradient-to-r from-orange-500 to-pink-500 shadow-sm" 
                  : "w-3 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
