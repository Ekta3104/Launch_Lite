import { motion } from "framer-motion";
import { Users, Award, Star, Clock } from "lucide-react";

const WA_HERO = "https://wa.me/917350583530?text=Hello%20Launchlite%2C%20I%20need%20a%20free%20quote.";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Award, value: "Premium", label: "Quality" },
  { icon: Star, value: "On-Time", label: "Delivery" },
];

const fadeLeft = { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } };

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-12 min-h-[480px] lg:min-h-[520px] flex items-center bg-[#FAFBFC]">
      {/* ── Background Layer (Uncontained Image) ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="/hero-printing.png"
          alt="LaunchLite printing studio background"
          className="w-full h-full object-cover object-center lg:object-right"
          loading="eager"
        />
      </div>

      <div className="container-premium relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ── Left Content ── */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="col-span-12 lg:col-span-7 flex flex-col gap-5 pb-4 lg:pb-0"
          >
            {/* Eyebrow */}
            <p className="font-outfit font-bold text-[#EA580C] text-sm tracking-widest uppercase">
              Digital Solutions. Premium Printing.
            </p>

            {/* Heading */}
            <h1 className="font-outfit font-extrabold text-[#111827] text-3xl md:text-4xl lg:text-[44px] tracking-tight flex flex-col gap-2">
              <span>Grow Your Business with</span>
              <span>Smart Digital Solutions &amp;</span>
              <span className="text-[#EA580C]">Premium Printing</span>
            </h1>

            {/* Subtext */}
            <p className="font-inter text-[#4B5563] text-base md:text-lg leading-relaxed max-w-[500px]">
              Websites, Branding, Digital Marketing, Printing &amp; More{" "}
              <span className="text-[#111827] font-medium">– All Under One Roof.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#EA580C] text-white font-outfit font-bold text-base px-7 py-3.5 rounded-full hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 group"
              >
                Get Free Quote
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border-2 border-[#CBD5E1] text-[#111827] font-outfit font-bold text-base px-7 py-3.5 rounded-full hover:border-[#0B2A5B] hover:text-[#0B2A5B] transition-all bg-white group"
              >
                View Our Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stat Badges */}
            <div className="flex flex-wrap gap-5 pt-3 border-t border-slate-200/60 mt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-9 h-9 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:border-orange-300 group-hover:bg-orange-50 transition-colors">
                    <stat.icon
                      size={16}
                      className="text-slate-500 group-hover:text-[#EA580C] transition-colors"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-outfit font-extrabold text-[#111827] text-base leading-none">
                      {stat.value}
                    </span>
                    <span className="font-inter text-[#64748B] text-[11px] mt-0.5">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column (Only for Floating Badges over the background image) ── */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[150px] lg:min-h-[300px] w-full flex items-center justify-center lg:justify-end">
            {/* Floating badge 1 — Top Left of this region */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 left-4 lg:top-12 lg:left-0 z-20 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 hover:scale-105 transition-transform duration-300 pointer-events-auto"
            >
              <span className="text-2xl drop-shadow-sm">💻</span>
              <div>
                <p className="font-outfit font-bold text-[#111827] text-sm leading-none">Website Design</p>
                <p className="font-inter text-[11px] text-[#4B5563] mt-1 font-medium">Modern &amp; Responsive</p>
              </div>
            </motion.div>

            {/* Floating badge 2 — Bottom Right of this region */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-4 lg:bottom-16 lg:right-4 z-20 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 hover:scale-105 transition-transform duration-300 pointer-events-auto"
            >
              <span className="text-2xl drop-shadow-sm">🖨️</span>
              <div>
                <p className="font-outfit font-bold text-[#111827] text-sm leading-none">Premium Printing</p>
                <p className="font-inter text-[11px] text-[#4B5563] mt-1 font-medium">Fast &amp; High Quality</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
