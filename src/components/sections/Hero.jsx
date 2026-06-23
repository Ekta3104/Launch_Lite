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
const fadeRight = { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } };

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-8 pb-0">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[520px]">

          {/* ── Left Content ── */}
          <motion.div
            variants={fadeLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-5 pb-12 lg:pb-16"
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
            <p className="font-inter text-[#4B5563] text-base md:text-lg leading-relaxed max-w-[480px]">
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
            <div className="flex flex-wrap gap-5 pt-3 border-t border-slate-100 mt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-9 h-9 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-orange-300 group-hover:bg-orange-50 transition-colors">
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

          {/* ── Right Hero Image ── */}
          <motion.div
            variants={fadeRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="relative h-[420px] md:h-[500px] lg:h-[560px] w-full hidden sm:block"
          >
            {/* Subtle background blob */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute top-8 right-8 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-8 left-4 w-56 h-56 bg-blue-50 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Hero Image */}
            <div className="relative z-10 h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero-printing.png"
                alt="LaunchLite printing studio — large-format printer, branded materials, and computer"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Subtle gradient overlay at bottom for clean edge */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            {/* Floating badge — top-left */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-6 -left-4 z-20 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2"
            >
              <span className="text-lg">💻</span>
              <div>
                <p className="font-outfit font-bold text-[#111827] text-xs leading-none">Website Design</p>
                <p className="font-inter text-[10px] text-[#64748B] mt-0.5">Modern &amp; Responsive</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom-right */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -right-4 z-20 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2"
            >
              <span className="text-lg">🖨️</span>
              <div>
                <p className="font-outfit font-bold text-[#111827] text-xs leading-none">Premium Printing</p>
                <p className="font-inter text-[10px] text-[#64748B] mt-0.5">Fast &amp; High Quality</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
