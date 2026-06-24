import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { digitalServices, printingServices } from "./Services";

const services = [...digitalServices, ...printingServices];

export function ServicesPreview() {
  return (
    <section className="bg-white py-24 border-t border-slate-100 overflow-hidden relative">
      <div className="container-premium">
        <SectionHeading
          badge="Preview Services"
          title="Explore Our Most Popular Services"
          subtitle="A quick look at the services we offer with clean visuals, clear titles, and short descriptions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4 }}
              className="group bg-slate-50 rounded-[28px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-outfit font-semibold text-lg text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
