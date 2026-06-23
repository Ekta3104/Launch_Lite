import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { X, Check } from "lucide-react";

export function ComparisonSection() {
  const comparisonData = [
    { label: "Service Providers", others: "Multiple Vendors", ekta: "One Roof Solution" },
    { label: "Response Time", others: "Delayed Support", ekta: "Fast Response" },
    { label: "Design Approach", others: "Generic Templates", ekta: "Custom Solutions" },
    { label: "Offerings", others: "Limited Services", ekta: "Printing + Website + App Dev" },
    { label: "Quality Focus", others: "Standard Output", ekta: "Premium High-End Finish" }
  ];

  return (
    <section className="bg-white section-padding border-b border-borderLight">
      <div className="container-premium max-w-5xl">
        <SectionHeading 
          badge="The Ekta Difference"
          title="Why Choose Launchlite?"
          subtitle="See how our integrated approach saves you time, money, and hassle compared to managing multiple agencies."
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-premium border border-borderLight overflow-hidden shadow-card"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-borderLight">
            <div className="p-6 font-outfit font-bold text-heading text-lg">Features</div>
            <div className="p-6 font-outfit font-bold text-slate-500 text-lg border-l border-borderLight text-center">Others</div>
            <div className="p-6 font-outfit font-bold text-white text-lg bg-primary text-center">Launchlite</div>
          </div>

          {/* Table Body */}
          {comparisonData.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i !== comparisonData.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <div className="p-6 font-inter font-medium text-heading flex items-center">
                {row.label}
              </div>
              <div className="p-6 font-inter text-slate-500 text-sm border-l border-borderLight flex items-center justify-center text-center gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                {row.others}
              </div>
              <div className="p-6 font-inter font-bold text-primary text-sm bg-blue-50/30 flex items-center justify-center text-center gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                {row.ekta}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
