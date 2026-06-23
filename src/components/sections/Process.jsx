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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="How We Work"
          title="Our Proven Process"
          subtitle="A systematic approach to ensuring quality, transparency, and timely delivery for every project."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative mt-16">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-borderLight -z-10"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-background rounded-full border-2 border-borderLight flex items-center justify-center mb-6 group-hover:border-accent group-hover:shadow-lg transition-all duration-300 relative bg-white">
                <span className="font-outfit font-extrabold text-3xl text-slate-300 group-hover:text-accent transition-colors">
                  {step.num}
                </span>
              </div>
              <h3 className="font-outfit font-bold text-xl text-heading mb-3">{step.title}</h3>
              <p className="font-inter text-body">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
