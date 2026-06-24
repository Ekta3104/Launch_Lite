import { motion, useInView, animate } from "framer-motion";
import { Layers, Zap, Award, Users, MapPin, TrendingUp, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WA_URL = "https://wa.me/917350583530?text=Hello%20Launchlite%2C%20I%20want%20to%20discuss%20my%20project.";

const features = [
  {
    title: "All-in-One Solutions",
    text: "Websites, branding, marketing, and printing managed seamlessly under one roof.",
    icon: Layers,
  },
  {
    title: "Fast Turnaround",
    text: "Reliable execution and on-time delivery that keeps your business moving.",
    icon: Zap,
  },
  {
    title: "Premium Quality",
    text: "Professional designs and print materials that strengthen your brand image.",
    icon: Award,
  },
  {
    title: "Dedicated Support",
    text: "Responsive guidance and personalized assistance throughout every project.",
    icon: Users,
  },
  {
    title: "Local Expertise",
    text: "Deep understanding of local businesses with solutions tailored for growth.",
    icon: MapPin,
  },
  {
    title: "Results-Driven Approach",
    text: "Strategies focused on generating leads, increasing visibility, and driving measurable outcomes.",
    icon: TrendingUp,
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ from = 0, to, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.round(val));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export function LocalTrust() {
  return (
    <section className="py-24 bg-[#FAFBFC] relative overflow-hidden border-b border-slate-200/60">
      <div className="container-premium relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-outfit font-bold text-[#EA580C] text-sm tracking-widest uppercase mb-4">
              WHY CHOOSE LAUNCHLITE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold font-outfit text-[#111827] leading-tight tracking-tight mb-5">
              Why Businesses Choose LaunchLite
            </h2>
            <p className="font-inter text-[#4B5563] text-base md:text-lg leading-relaxed max-w-[500px] mx-auto">
              From branding and websites to premium printing, we help businesses grow with creative solutions and measurable results.
            </p>
          </motion.div>
        </div>

        {/* Features Grid (3x2) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group h-full bg-white p-7 sm:p-8 rounded-[20px] border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white/80 flex items-center justify-center mb-5 group-hover:border-orange-300 group-hover:bg-orange-50 transition-colors duration-300 shrink-0">
                <feature.icon className="w-6 h-6 text-slate-500 group-hover:text-[#EA580C] transition-colors duration-300" strokeWidth={1.75} />
              </div>
              <h3 className="font-outfit font-extrabold text-xl text-[#111827] mb-2.5">
                {feature.title}
              </h3>
              <p className="font-inter text-[#4B5563] text-[15px] leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Area */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 py-10 border-t border-slate-200/60 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="font-outfit font-extrabold text-[#111827] text-4xl md:text-5xl mb-1 tracking-tight">
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-inter text-[#64748B] text-sm uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
