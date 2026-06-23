import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { title: "Creative Excellence", desc: "Award-winning designs that captivate." },
    { title: "Modern Technology", desc: "Built with React, Next.js, and scalable backends." },
    { title: "Affordable Solutions", desc: "Premium quality without the premium price tag." },
    { title: "Fast Delivery", desc: "Optimized workflows for quick turnaround times." },
    { title: "Secure Development", desc: "Best practices for data protection and privacy." },
    { title: "Dedicated Support", desc: "24/7 assistance for all your ongoing needs." }
  ];

  return (
    <section className="bg-white border-y border-borderLight section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <SectionHeading 
              badge="Why Choose Us"
              title="The Ekta Advantage"
              subtitle="We deliver exceptional value through our integrated approach to design, development, and printing."
              centered={false}
            />
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium hover:border-borderLight transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-outfit font-bold text-heading text-lg mb-1">{reason.title}</h4>
                  <p className="font-inter text-body text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
