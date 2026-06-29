import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function CaseStudies() {
  const cases = [
    {
      title: "Employee Management System",
      problem: "Manual employee tracking was causing errors and inefficiencies.",
      solution: "Custom web application built with React, Node.js and MongoDB.",
      outcome: "Centralized employee records and attendance management.",
      color: "bg-indigo-50 border-indigo-100",
      accent: "text-indigo-600"
    },
    {
      title: "Food Delivery Application",
      problem: "Need for an intuitive online food ordering and tracking system.",
      solution: "Responsive full-stack food delivery platform with real-time tracking.",
      outcome: "Improved ordering experience and increased daily orders by 300%.",
      color: "bg-orange-50 border-orange-100",
      accent: "text-orange-600"
    },
    {
      title: "Wedding Card Design Project",
      problem: "Client required a highly premium, unique invitation design.",
      solution: "Custom wedding card design and specialized print production.",
      outcome: "Professional final printed product delivered on time with perfect finish.",
      color: "bg-rose-50 border-rose-100",
      accent: "text-rose-600"
    }
  ];

  return (
    <section className="bg-white section-padding border-b border-borderLight">
      <div className="container-premium">
        <SectionHeading 
          badge="Success Stories"
          title="Detailed Case Studies"
          subtitle="Explore how we have solved real business problems through our dedicated digital and printing solutions."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {cases.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-premium border border-borderLight shadow-card overflow-hidden hover:shadow-premium hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`p-8 border-b ${study.color}`}>
                <h3 className={`font-outfit font-bold text-2xl mb-2 ${study.accent}`}>{study.title}</h3>
              </div>
              
              <div className="p-8 flex flex-col gap-6 flex-grow">
                <div>
                  <h4 className="font-outfit font-bold text-heading text-sm uppercase tracking-wide mb-2">Problem</h4>
                  <p className="font-inter text-body text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-heading text-sm uppercase tracking-wide mb-2">Solution</h4>
                  <p className="font-inter text-body text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h4 className="font-outfit font-bold text-heading text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Outcome
                  </h4>
                  <p className="font-inter text-heading font-medium text-sm leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
