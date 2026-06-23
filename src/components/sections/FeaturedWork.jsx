import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const WA_BASE = "https://wa.me/917350583530?text=Hello%20Ekta%20Creation%2C%20I%20am%20interested%20in%20your%20services.";

export function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("Digital");

  const projects = {
    Digital: [
      {
        title: "Employee Management System",
        category: "Web Application",
        imageColor: "from-indigo-600 to-indigo-800",
        emoji: "👥",
        tech: "React · Node.js · MongoDB",
        outcome: "Centralized HR records for 200+ employees",
      },
      {
        title: "Food Delivery Application",
        category: "Mobile Application",
        imageColor: "from-orange-500 to-orange-700",
        emoji: "🍔",
        tech: "React Native · Firebase · Stripe",
        outcome: "Live ordering with real-time tracking",
      },
      {
        title: "AI PDF Chat Assistant",
        category: "SaaS Platform",
        imageColor: "from-emerald-600 to-emerald-800",
        emoji: "🤖",
        tech: "Next.js · OpenAI · Supabase",
        outcome: "Chat with any PDF document instantly",
      },
      {
        title: "Student Result Management",
        category: "Web Application",
        imageColor: "from-blue-600 to-blue-800",
        emoji: "🎓",
        tech: "React · Express · MySQL",
        outcome: "Automated results for 1,200+ students",
      },
      {
        title: "Swami Samarth Jap Counter",
        category: "Mobile App",
        imageColor: "from-amber-500 to-amber-700",
        emoji: "🙏",
        tech: "React Native · AsyncStorage",
        outcome: "5,000+ daily active devotees",
      },
    ],
    Printing: [
      {
        title: "Luxury Wedding Card Collection",
        category: "Wedding Stationery",
        imageColor: "from-rose-500 to-pink-700",
        emoji: "💍",
        material: "300 GSM Art Paper · Foil Stamping",
        outcome: "Premium finish with embossed motifs",
      },
      {
        title: "Corporate Visiting Cards",
        category: "Business Stationery",
        imageColor: "from-slate-700 to-slate-900",
        emoji: "💼",
        material: "350 GSM Matte · Spot UV",
        outcome: "Professional matte finish with gloss spots",
      },
      {
        title: "Event Brochures",
        category: "Marketing Materials",
        imageColor: "from-blue-600 to-indigo-700",
        emoji: "📄",
        material: "170 GSM Glossy · Tri-Fold",
        outcome: "Vivid colors with sharp imagery",
      },
    ]
  };

  return (
    <section className="bg-white border-b border-borderLight section-padding">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Top Projects"
            title="Featured Work"
            subtitle="A selection of our finest digital applications and premium print designs."
            centered={false}
            className="mb-0"
          />
          <a href="#portfolio" className="inline-flex items-center gap-2 font-inter font-semibold text-secondary hover:text-accent transition-colors pb-4 whitespace-nowrap">
            View All Projects <ArrowRight size={20} />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-10 border-b border-borderLight pb-4">
          {["Digital", "Printing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-outfit font-bold text-base px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-slate-100 text-body hover:bg-slate-200"
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid — no mode="wait" to avoid multi-child warning */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects[activeTab].map((project, i) => (
              <motion.div
                key={`${activeTab}-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group bg-white rounded-premium border border-borderLight overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Visual */}
                <div className={`w-full aspect-video bg-gradient-to-br ${project.imageColor} relative flex items-center justify-center`}>
                  <span className="text-6xl">{project.emoji}</span>
                  <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-inter font-semibold px-3 py-1 rounded-full">
                    {project.tech || project.material}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-inter font-bold uppercase tracking-wider text-accent mb-2">{project.category}</span>
                  <h3 className="font-outfit text-xl font-bold text-heading mb-4">{project.title}</h3>
                  <div className="mt-auto bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                    <p className="font-inter text-sm text-body">{project.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center">
          <a
            href={WA_BASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-outfit font-bold px-8 py-3.5 rounded-xl hover:bg-blue-900 transition-all hover:-translate-y-1 shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
