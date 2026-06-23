import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Globe, Megaphone, Tag, Contact, Presentation, Map, Printer, Monitor } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const WA_SERVICE = "https://wa.me/917350583530?text=Hello%20Launchlite%2C%20I%20want%20a%20free%20quote%20for%20your%20services.";

const CheckIcon = () => (
  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function Services() {
  const [activeTab, setActiveTab] = useState("printing"); // printing active by default as in screenshot

  const digitalServices = [
    {
      title: "Graphic Design",
      desc: "Creative & impactful designs that establish your brand presence.",
      icon: PenTool,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      image: "/service-design.png",
      features: ["Custom Logos", "Vector Assets", "Brand Guides", "Source Files"],
      checkColor: "bg-indigo-500",
      buttonColor: "text-indigo-600 hover:text-indigo-700",
    },
    {
      title: "Website Development",
      desc: "Responsive & modern websites built with the latest technologies.",
      icon: Globe,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/service-webdev.png",
      features: ["SEO Optimized", "Mobile Ready", "High Speed", "Secure Code"],
      checkColor: "bg-blue-500",
      buttonColor: "text-blue-600 hover:text-blue-700",
    },
    {
      title: "Social Media Management",
      desc: "Grow your brand online and engage with your audience.",
      icon: Megaphone,
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50",
      image: "/service-social.png",
      features: ["Ad Campaigns", "Daily Posts", "Content Plan", "Weekly Reports"],
      checkColor: "bg-rose-500",
      buttonColor: "text-rose-600 hover:text-rose-700",
    },
    {
      title: "Branding & Identity",
      desc: "Build a strong brand presence with unique design assets.",
      icon: Tag,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      image: "/service-branding.png",
      features: ["Unique Logos", "Color Schemes", "Type Scale", "Stationery Kit"],
      checkColor: "bg-amber-500",
      buttonColor: "text-amber-500 hover:text-amber-600",
    },
  ];

  const printingServices = [
    {
      title: "Visiting Cards",
      desc: "Premium quality visiting cards that leave a lasting impression.",
      icon: Contact,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "/service-visiting.png",
      features: ["Premium Quality", "Multiple Finishes", "Fast Delivery", "Affordable Prices"],
      checkColor: "bg-orange-500",
      buttonColor: "text-orange-600 hover:text-orange-700",
    },
    {
      title: "Flex & Banner Printing",
      desc: "Eye-catching flex & banners for every occasion and business.",
      icon: Presentation,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      image: "/service-flex.png",
      features: ["Vibrant Colors", "Weather Resistant", "Custom Sizes", "Quick Turnaround"],
      checkColor: "bg-emerald-500",
      buttonColor: "text-[#16A34A] hover:text-emerald-700",
    },
    {
      title: "Brochures & Flyers",
      desc: "Promote your business with attractive brochures & flyers.",
      icon: Map,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/service-brochure.png",
      features: ["High Quality Print", "Attractive Designs", "Custom Options", "Bulk Discounts"],
      checkColor: "bg-blue-500",
      buttonColor: "text-blue-600 hover:text-blue-700",
    },
    {
      title: "Digital Printing",
      desc: "High quality digital prints for all your needs.",
      icon: Printer,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "/service-digital-print.png",
      features: ["High Resolution", "Multiple Sizes", "Best Quality", "On-Time Delivery"],
      checkColor: "bg-purple-500",
      buttonColor: "text-purple-600 hover:text-purple-700",
    },
  ];

  const services = activeTab === "digital" ? digitalServices : printingServices;

  return (
    <section id="services" className="bg-[#FAFBFC] py-24 border-t border-slate-100 overflow-hidden relative">
      <div className="container-premium">
        
        {/* Eyebrow & Header */}
        <SectionHeading
          badge="Our Services"
          title="All Your Digital & Printing Needs, Handled with Care"
          subtitle="We bridge the gap between digital innovation and physical branding with our specialized service divisions."
        />

        {/* Toggle Switch styling exactly matching screenshot */}
        <div className="flex justify-center gap-4 mb-14">
          <button
            onClick={() => setActiveTab("digital")}
            className={`inline-flex items-center px-6 py-2.5 rounded-full font-outfit text-sm font-extrabold transition-all duration-300 border shadow-sm ${
              activeTab === "digital"
                ? "bg-[#EA580C] text-white border-[#EA580C] shadow-orange-500/20"
                : "bg-white text-[#111827] border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            <Monitor size={16} className="mr-2" />
            Digital Solutions
          </button>
          <button
            onClick={() => setActiveTab("printing")}
            className={`inline-flex items-center px-6 py-2.5 rounded-full font-outfit text-sm font-extrabold transition-all duration-300 border shadow-sm ${
              activeTab === "printing"
                ? "bg-[#EA580C] text-white border-[#EA580C] shadow-orange-500/20"
                : "bg-white text-[#111827] border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            <Printer size={16} className="mr-2" />
            Printing Solutions
          </button>
        </div>

        {/* Cards Grid layout precisely matching screenshot */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.01)] p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Top-Left Square Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.bgColor}`}>
                        <Icon className={`${service.iconColor}`} size={22} strokeWidth={2} />
                      </div>

                      {/* Product Showcase Image Mockup */}
                      <div className="my-5 rounded-2xl overflow-hidden border border-slate-100 aspect-[4/3] bg-slate-50 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-outfit font-extrabold text-[#111827] text-lg text-center mb-2 leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="font-inter text-[#64748B] text-xs text-center leading-relaxed mb-6 px-1">
                        {service.desc}
                      </p>

                      {/* Features 2x2 Grid Checklist */}
                      <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-6 px-1">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 min-w-0">
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 ${service.checkColor}`}>
                              <CheckIcon />
                            </span>
                            <span className="font-inter text-[10.5px] font-extrabold text-[#4B5563] truncate">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="text-center pt-3 border-t border-slate-100">
                      <a
                        href={WA_SERVICE}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 font-outfit font-extrabold text-xs transition-transform duration-300 ${service.buttonColor}`}
                      >
                        <span>Get Quote</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
