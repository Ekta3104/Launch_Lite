import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function WhyChooseUs() {
  const reasons = [
    {
      emoji: "🚀",
      title: "All-in-One Solutions",
      desc: "Website development, branding, printing, and marketing under one roof.",
      glowBg: "bg-rose-500/10",
      iconBg: "bg-rose-50 border-rose-100/50",
      rgbColor: "244, 63, 94", // rose-500
      hoverText: "group-hover:text-rose-600",
      gradientBorder: "from-rose-500/20 via-orange-500/20 to-pink-500/20",
      hoverGradientBorder: "group-hover:from-rose-500/60 group-hover:via-orange-500/60 group-hover:to-pink-500/60",
    },
    {
      emoji: "💡",
      title: "Expert Team",
      desc: "A blend of developers, designers, and marketers working together for your success.",
      glowBg: "bg-amber-500/10",
      iconBg: "bg-amber-50 border-amber-100/50",
      rgbColor: "245, 158, 11", // amber-500
      hoverText: "group-hover:text-amber-600",
      gradientBorder: "from-amber-400/20 via-orange-400/20 to-yellow-500/20",
      hoverGradientBorder: "group-hover:from-amber-400/60 group-hover:via-orange-500/60 group-hover:to-yellow-500/60",
    },
    {
      emoji: "🎯",
      title: "Business-Focused Approach",
      desc: "Every solution is designed to help you attract customers and grow.",
      glowBg: "bg-orange-500/10",
      iconBg: "bg-orange-50 border-orange-100/50",
      rgbColor: "234, 88, 12", // orange-600
      hoverText: "group-hover:text-orange-600",
      gradientBorder: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      hoverGradientBorder: "group-hover:from-orange-500/60 group-hover:via-red-500/60 group-hover:to-pink-500/60",
    },
    {
      emoji: "⚡",
      title: "Fast Turnaround",
      desc: "Quality work delivered on time without unnecessary delays.",
      glowBg: "bg-emerald-500/10",
      iconBg: "bg-emerald-50 border-emerald-100/50",
      rgbColor: "16, 185, 129", // emerald-500
      hoverText: "group-hover:text-emerald-600",
      gradientBorder: "from-emerald-400/20 via-teal-500/20 to-cyan-500/20",
      hoverGradientBorder: "group-hover:from-emerald-400/60 group-hover:via-teal-500/60 group-hover:to-cyan-500/60",
    },
    {
      emoji: "🎨",
      title: "Creative & Professional Design",
      desc: "Modern designs that make your business stand out from competitors.",
      glowBg: "bg-violet-500/10",
      iconBg: "bg-violet-50 border-violet-100/50",
      rgbColor: "139, 92, 246", // violet-500
      hoverText: "group-hover:text-violet-600",
      gradientBorder: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
      hoverGradientBorder: "group-hover:from-violet-500/60 group-hover:via-purple-500/60 group-hover:to-pink-500/60",
    },
    {
      emoji: "🤝",
      title: "Dedicated Support",
      desc: "We're here to support you even after your project goes live.",
      glowBg: "bg-blue-500/10",
      iconBg: "bg-blue-50 border-blue-100/50",
      rgbColor: "59, 130, 246", // blue-500
      hoverText: "group-hover:text-blue-600",
      gradientBorder: "from-blue-500/20 via-sky-500/20 to-teal-500/20",
      hoverGradientBorder: "group-hover:from-blue-500/60 group-hover:via-sky-500/60 group-hover:to-teal-500/60",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="why-choose-us" className="bg-[#FAFBFC] border-y border-slate-100 py-24 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Glowing decorative circles in the background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-200/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-purple-200/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container-premium relative z-10">
        <SectionHeading 
          badge="WHY CHOOSE US"
          title="Why Businesses Choose LaunchLite"
          subtitle="We combine technology, creativity, and marketing expertise to help businesses build a powerful presence online and offline."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseMove={handleMouseMove}
              className={`group relative p-[1px] rounded-3xl bg-gradient-to-br ${reason.gradientBorder} ${reason.hoverGradientBorder} shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Card Inner Container with glassmorphism background */}
              <div className="h-full bg-white/90 backdrop-blur-md p-8 rounded-[23px] relative overflow-hidden z-10 flex flex-col justify-between">
                
                {/* Radial Spotlight Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(${reason.rgbColor}, 0.08), transparent 80%)`
                  }}
                />

                {/* Grid dot overlay inside card on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_100%)] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none z-0" />

                {/* Decorative Giant Watermark Emoji */}
                <span className="absolute -bottom-6 -right-6 text-[110px] select-none opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 pointer-events-none z-0 font-emoji">
                  {reason.emoji}
                </span>

                <div className="relative z-10 flex flex-col items-start">
                  {/* Two-layered Icon Container */}
                  <div className="relative mb-6">
                    {/* Glow behind */}
                    <div className={`absolute -inset-2 rounded-2xl ${reason.glowBg} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500`} />
                    
                    {/* Active Icon container */}
                    <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100/60 ${reason.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-3xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.05)] select-none">
                        {reason.emoji}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className={`font-outfit font-extrabold text-[#111827] text-xl mb-3 leading-snug ${reason.hoverText} transition-colors duration-300`}>
                    {reason.title}
                  </h4>

                  {/* Description */}
                  <p className="font-inter text-[#4B5563] text-[14px] leading-relaxed max-w-[270px] group-hover:text-slate-700 transition-colors duration-300">
                    {reason.desc}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="w-8 h-1 rounded-full bg-slate-200 mt-6 group-hover:w-16 transition-all duration-500" 
                     style={{ 
                       background: `linear-gradient(90deg, rgba(${reason.rgbColor}, 1) 0%, rgba(${reason.rgbColor}, 0.4) 100%)` 
                     }} 
                />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
