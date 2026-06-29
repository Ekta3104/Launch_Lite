import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("Digital");

  const projects = {
    Digital: [
      {
        title: "Physiotherapy Clinic",
        category: "Web & Booking App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        tech: "React · Node.js · Calendar API",
        outcome: "40% more online appointments",
      },
      {
        title: "Fine Dining Restaurant",
        category: "Website & Reservations",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        tech: "Next.js · Framer Motion",
        outcome: "30% increase in weekend bookings",
      },
      {
        title: "Fashion Boutique",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
        tech: "Shopify · React",
        outcome: "60% boost in monthly sales",
      },
      {
        title: "Real Estate Portal",
        category: "Lead Gen Website",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        tech: "Vue.js · Google Maps API",
        outcome: "200+ qualified leads in month 1",
      },
      {
        title: "Fitness Center Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        tech: "React · PostgreSQL",
        outcome: "90% automated renewals",
      },
    ],
    Printing: [
      {
        title: "Luxury Wedding Card Collection",
        category: "Wedding Stationery",
        image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=800&q=80",
        material: "300 GSM Art Paper · Foil Stamping",
        outcome: "Premium finish with embossed motifs",
      },
      {
        title: "Corporate Visiting Cards",
        category: "Business Stationery",
        image: "/service-visiting.png",
        material: "350 GSM Matte · Spot UV",
        outcome: "Professional matte finish with gloss spots",
      },
      {
        title: "Event Brochures",
        category: "Marketing Materials",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
        material: "170 GSM Glossy · Tri-Fold",
        outcome: "Vivid colors with sharp imagery",
      },
    ]
  };

  return (
    <section className="bg-white border-b border-slate-200/60 py-24">
      <div className="container-premium">
        
        {/* Centered Heading */}
        <div className="flex justify-center mb-12">
          <SectionHeading
            badge="Top Projects"
            title="Featured Work"
            subtitle="A selection of our finest digital applications and premium print designs."
            centered={true}
            className="mb-0"
          />
        </div>

        {/* Category Tabs & View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-slate-200/60 pb-4">
          <div className="flex gap-4">
            {["Digital", "Printing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-outfit font-bold text-base px-6 py-2.5 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#111827] text-white shadow-md"
                    : "bg-white text-[#4B5563] border border-slate-200/80 hover:bg-slate-50 hover:text-[#111827]"
                }`}
              >
                {tab} Projects
              </button>
            ))}
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 font-inter font-bold text-[#EA580C] hover:text-[#111827] transition-colors whitespace-nowrap group">
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects[activeTab].map((project, i) => (
              <motion.div
                key={`${activeTab}-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group bg-white rounded-[20px] border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Visual - Realistic Image */}
                <div className="w-full aspect-video relative overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-inter font-bold px-3 py-1 rounded-full border border-white/20">
                    {project.tech || project.material}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-[11px] font-inter font-bold uppercase tracking-widest text-[#EA580C] mb-3">{project.category}</span>
                  <h3 className="font-outfit text-xl font-extrabold text-[#111827] mb-4 leading-snug group-hover:text-[#EA580C] transition-colors">{project.title}</h3>
                  <div className="mt-auto bg-[#FAFBFC] p-3.5 rounded-xl border border-slate-200/60 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse"></span>
                    <p className="font-inter text-[13px] text-[#4B5563] font-medium leading-tight">{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
