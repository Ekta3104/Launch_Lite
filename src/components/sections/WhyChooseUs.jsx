import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Layers, Users, Target, Zap, Palette, Headphones } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { title: "Creative Excellence", desc: "Award-winning designs that captivate." },
    { title: "Modern Technology", desc: "Built with current web standards and performance in mind." },
    { title: "Affordable Solutions", desc: "Premium quality without the premium price tag." },
    { title: "Fast Delivery", desc: "Optimized workflows for quick turnaround times." },
    { title: "Local Expertise", desc: "Deep understanding of local business needs and markets." },
    { title: "Dedicated Support", desc: "Responsive assistance throughout your project lifecycle." }
  ];

  return (
    <section className="bg-white border-y border-borderLight section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <SectionHeading 
              badge="WHY CHOOSE US"
              title="Why Choose LaunchLite"
              subtitle="We combine technology, creativity, and marketing expertise to help businesses build a powerful presence online and offline."
              centered={true}
            />
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const icons = [Layers, Users, Target, Zap, Palette, Headphones];
              const Icon = icons[i] || Layers;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium hover:border-borderLight transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/90 border border-slate-200 flex items-center justify-center text-accent group-hover:bg-orange-50 transition-colors">
                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#EA580C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-heading text-lg mb-1">{reason.title}</h4>
                    <p className="font-inter text-body text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
