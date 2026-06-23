import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Store, Utensils, GraduationCap, Stethoscope, Rocket, Briefcase, ShoppingBag, CalendarHeart } from "lucide-react";

export function IndustriesWeServe() {
  const industries = [
    { icon: Store, title: "Retail Stores", desc: "E-commerce websites and engaging branding materials to boost offline and online sales." },
    { icon: Utensils, title: "Restaurants", desc: "Food delivery apps, menu designs, and captivating social media creatives." },
    { icon: GraduationCap, title: "Educational Institutes", desc: "Management systems, modern websites, and admission brochures." },
    { icon: Stethoscope, title: "Medical Clinics", desc: "Appointment booking systems, patient portals, and clinic branding." },
    { icon: Rocket, title: "Startups", desc: "End-to-end digital solutions from MVP apps to complete brand identity." },
    { icon: Briefcase, title: "Small Businesses", desc: "Affordable websites and high-quality printing for professional presence." },
    { icon: CalendarHeart, title: "Event Organizers", desc: "Premium invitation cards, flex banners, and event landing pages." },
    { icon: ShoppingBag, title: "E-Commerce", desc: "Scalable online stores with seamless payment integrations." }
  ];

  return (
    <section className="bg-slate-50 section-padding border-y border-borderLight">
      <div className="container-premium">
        <SectionHeading 
          badge="Who We Help"
          title="Industries We Serve"
          subtitle="We craft tailored digital and printing solutions that meet the unique demands of various business sectors."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-6 rounded-premium border border-borderLight shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-4">
                <industry.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-outfit font-bold text-heading text-lg mb-2">{industry.title}</h4>
              <p className="font-inter text-body text-sm leading-relaxed">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
