import { motion } from "framer-motion";

export function ResultsImpact() {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "5+", label: "Services Offered" },
    { value: "Fast", label: "Delivery Process" },
    { value: "Affordable", label: "Business Solutions" }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container-premium relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 leading-tight text-white">
            Client Success <span className="text-accent">Metrics</span>
          </h2>
          <p className="font-inter text-blue-100 text-lg max-w-2xl mx-auto">
            We deliver measurable results through efficient processes, comprehensive service offerings, and exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-premium flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <span className="font-outfit font-extrabold text-4xl md:text-5xl text-white mb-3">
                {stat.value}
              </span>
              <span className="font-inter font-medium text-blue-100 text-sm tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
