import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, Users, Clock, Target, Quote } from "lucide-react";

export function About() {
  const highlights = [
    { icon: Target, title: "Modern Technologies", desc: "Latest tech stack ensuring high speed, SEO performance, and reliability." },
    { icon: Users, title: "Creative Craftsmanship", desc: "Design-first mindset producing elegant digital layouts and tactile prints." },
    { icon: Clock, title: "On-Time Delivery", desc: "Optimized operational workflows for punctual project shipping." },
    { icon: Award, title: "End-to-End Synergy", desc: "Visual identities that transition seamlessly from web pixels to physical card paper." }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFBFC] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── Left Side: Founder's Story & Vision ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <SectionHeading 
              badge="About LaunchLite"
              title="Forming Pixels. Crafting Print. Growing Brands."
              centered={false}
              className="mb-2"
            />
             <p className="font-inter text-body text-base leading-relaxed">We combine creativity, technology, and quality printing to deliver solutions that help businesses stand out in today's competitive market.
            </p>

                 {/* Vision Callout from Founder */}
            <div className="relative pl-6 py-4 border-l-4 border-orange-500 bg-white shadow-premium rounded-r-2xl pr-6 my-2">
              <Quote className="absolute top-2 right-4 text-slate-100/80 w-16 h-16 pointer-events-none" size={64} />
              <p className="font-outfit font-medium text-heading text-base leading-relaxed italic relative z-10">
                "As engineers and entrepreneurs, we understand that every successful business needs both strong technology and strong branding. Through LaunchLite, we help local businesses build a powerful presence online and offline."</p>
              <div className="mt-4 flex items-center gap-2 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="font-outfit font-bold text-heading text-xs">Launchlite Founders</span>
                <span className="font-inter text-body text-[10px] font-medium">— Co-Founders</span>
              </div>
            </div>

            <p className="font-inter text-body text-base leading-relaxed">
              At LaunchLite, we believe every local business deserves a strong brand presence. Whether you're a shop owner, restaurant, school, clinic, startup, or service provider, we help you attract more customers through professional digital solutions and premium printing services.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-slate-200/60 mt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="w-10 h-10 bg-white text-[#0B2A5B] rounded-xl flex items-center justify-center shrink-0 border border-slate-200/60 shadow-card group-hover:border-orange-200 group-hover:bg-orange-50/50 transition-colors">
                    <item.icon size={18} className="group-hover:text-orange-600 transition-colors" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-heading text-sm">{item.title}</h4>
                    <p className="font-inter text-xs text-body leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Side: Creative Bento Grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[620px] w-full flex flex-col gap-5"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-100/30 rounded-full filter blur-3xl -z-10"></div>
            
            {/* Top Bento Item: Design Studio */}
            <div className="relative h-[320px] w-full rounded-3xl overflow-hidden border border-slate-200/60 shadow-premium group">
              <img
                src="/about-studio.png"
                alt="LaunchLite creative design studio"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-inter text-[9px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25">
                  Design Studio
                </span>
                <h5 className="font-outfit font-bold text-lg mt-2.5 text-white">Where digital interfaces come to life</h5>
              </div>
            </div>
            
            {/* Bottom Bento Row: 2 Items */}
            <div className="grid grid-cols-12 gap-5 h-[280px]">
              {/* Bottom Left: Print Craft */}
              <div className="col-span-7 relative rounded-3xl overflow-hidden border border-slate-200/60 shadow-premium group">
                <img
                  src="/about-print.png"
                  alt="LaunchLite premium print craftsmanship"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="font-inter text-[9px] uppercase tracking-widest font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25">
                    Print Craft
                  </span>
                  <h5 className="font-outfit font-bold text-base mt-2 text-white">Physical branding, made tactile</h5>
                </div>
              </div>

              {/* Bottom Right: Value Statement / Digital Marketing Bento Card */}
              <div className="col-span-5 rounded-3xl overflow-hidden border border-slate-200/60 shadow-premium relative group flex flex-col justify-between p-5 text-white">
                <img
                  src="/about-marketing.png"
                  alt="LaunchLite digital marketing analytics"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out z-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-[#0B2A5B]/15 z-10" />
                
                <div className="relative z-20 w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-orange-400 border border-white/20">
                  <Award size={18} />
                </div>
                <div className="relative z-20">
                  <span className="font-inter text-[8px] uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/25">
                    Marketing Growth
                  </span>
                  <p className="font-outfit font-bold text-sm tracking-tight leading-snug mt-2">
                    Uncompromising Quality Control
                  </p>
                  <p className="font-inter text-[10px] text-slate-300 mt-1 leading-normal">
                    Every pixel, print &amp; campaign approved by our lead team.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Glass Experience Badge */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-slate-200/50 flex items-center gap-3.5 hover:scale-105 transition-transform duration-300 pointer-events-auto"
            >
              <div className="w-10 h-10 bg-orange-500/10 text-orange-600 rounded-full flex items-center justify-center font-outfit font-bold text-lg">
                5+
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-heading text-xs leading-none">Years</span>
                <span className="font-inter text-[10px] text-body mt-0.5 font-medium">Of Brand Building</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
    </section>
    
  );
}
