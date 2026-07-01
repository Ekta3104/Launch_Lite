import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2 2 4-4" />
      </svg>
    ),
    title: "Fast Delivery",
    subtitle: "On Time, Every Time",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Pricing",
    subtitle: "Best Price, Great Value",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "High Quality Prints",
    subtitle: "Premium & Durable",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "Custom Designs",
    subtitle: "Tailored To Your Needs",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Support",
    subtitle: "We're Here For You",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "100+ Happy Clients",
    subtitle: "Trusted By Many",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-[#0B2A5B] py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-premium"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-y border-white/10">
          {features.map((feature, i) => {
            const getBorderClasses = (index) => {
              let classes = "border-white/10 ";
              classes += (index % 2 === 0) ? "border-r " : "border-r-0 ";
              classes += (index < 4) ? "border-b " : "border-b-0 ";
              classes += (index % 3 !== 2) ? "md:border-r " : "md:border-r-0 ";
              classes += (index < 3) ? "md:border-b " : "md:border-b-0 ";
              classes += (index !== 5) ? "lg:border-r " : "lg:border-r-0 ";
              classes += "lg:border-b-0";
              return classes;
            };
            return (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-2.5 px-5 py-5 group hover:bg-white/5 transition-colors ${getBorderClasses(i)}`}
              >
              <div className="w-10 h-10 rounded-full border border-[#EA580C]/40 bg-[#EA580C]/10 flex items-center justify-center flex-shrink-0 text-[#EA580C] group-hover:bg-[#EA580C]/20 transition-colors">
                {feature.icon}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-outfit font-bold text-white text-sm leading-tight">{feature.title}</p>
                <p className="font-inter text-slate-400 text-[11px] mt-0.5 leading-tight">{feature.subtitle}</p>
              </div>
            </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
