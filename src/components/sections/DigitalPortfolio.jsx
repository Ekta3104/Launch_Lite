import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ExternalLink, Code } from "lucide-react";

export function DigitalPortfolio() {
  const projects = [
    {
      title: "Student Result Management System",
      desc: "A comprehensive portal for managing student academic records with real-time result generation and administrative controls.",
      outcome: "Reduced manual data entry by 85% and eliminated calculation errors.",
      tags: ["React", "Node.js", "MongoDB"],
      color: "bg-blue-600"
    },
    {
      title: "Employee Management System",
      desc: "Internal dashboard for tracking attendance, leaves, payroll, and performance evaluations.",
      outcome: "Streamlined HR processes for a 500+ employee organization.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      color: "bg-indigo-600"
    },
    {
      title: "Food Delivery Application",
      desc: "Cross-platform mobile application for ordering food with real-time GPS tracking and secure payment gateway.",
      outcome: "Achieved 10,000+ downloads in the first month with a 4.8 star rating.",
      tags: ["React Native", "Firebase", "Stripe"],
      color: "bg-orange-600"
    },
    {
      title: "AI PDF Chat Assistant",
      desc: "SaaS platform allowing users to upload PDFs and intelligently query the content using conversational AI.",
      outcome: "Processed over 50,000 documents with high accuracy retrieval.",
      tags: ["Next.js", "OpenAI", "Pinecone"],
      color: "bg-emerald-600"
    },
    {
      title: "Swami Samarth Jap Counter",
      desc: "Spiritual mobile application for tracking daily mantras and maintaining a digital journal of devotion.",
      outcome: "Highly engaged community of 5,000+ daily active users.",
      tags: ["Flutter", "Dart", "SQLite"],
      color: "bg-rose-600"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Our Work"
          title="Digital Projects Portfolio"
          subtitle="Explore our real-world applications that solve complex problems and deliver exceptional user experiences."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group bg-white rounded-premium border border-borderLight overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 ${
                i === 0 ? "lg:col-span-2 lg:flex" : ""
              }`}
            >
              <div className={`w-full ${i === 0 ? "lg:w-1/2" : ""} aspect-video ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Large Preview Image Placeholder */}
                <div className="absolute inset-4 mt-8 mx-8 bg-white/10 backdrop-blur-sm rounded-t-xl border-t border-x border-white/20 shadow-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="font-outfit font-bold text-white/50 text-xl">App Interface Preview</span>
                </div>
              </div>
              
              <div className={`p-8 ${i === 0 ? "lg:w-1/2 flex flex-col justify-center" : ""}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-body font-inter text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-outfit text-2xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-inter text-body mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 mb-6">
                  <p className="font-inter text-sm text-heading font-medium">
                    <span className="text-secondary font-bold mr-1">Outcome:</span>
                    {project.outcome}
                  </p>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <Button variant="primary" size="sm" className="gap-2">
                    <ExternalLink size={16} /> Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Code size={16} /> GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
