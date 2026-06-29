import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ExternalLink, Code } from "lucide-react";
import physioImg from "../../assets/image.png";
import restImg from "../../assets/rest.png";
import fashionImg from "../../assets/fasion.png";
import realEstateImg from "../../assets/Real Estate Portal.png";
import gymImg from "../../assets/gym.png";

export function DigitalPortfolio() {
  const projects = [
    {
      title: "Physiotherapy & Wellness Center",
      desc: "A professional and calming website design for a local physiotherapy clinic, featuring an integrated appointment booking system, patient portal, and a comprehensive list of services.",
      outcome: "Increased online appointment bookings by 40% in the first quarter.",
      tags: ["React", "Node.js", "Tailwind"],
      color: "bg-cyan-600"
      ,
      image: physioImg,
      liveDemo: "https://www.drsandesha.in/"
    },
    {
      title: "Fine Dining Restaurant Platform",
      desc: "An elegant, highly visual website and mobile app for a premium restaurant. Includes interactive digital menus, online table reservations, and event catering inquiries.",
      outcome: "Seamless reservation flow leading to a 30% increase in weekend bookings.",
      tags: ["Next.js", "Framer Motion", "Stripe"],
      color: "bg-rose-600",
      image: restImg,
      liveDemo: "https://royal-spice-sepia.vercel.app/",
      // useLocalImage: true // kept as a note in case we want conditional logic later
    },
    {
      title: "E-Commerce Fashion Boutique",
      desc: "A high-performance e-commerce platform for a local boutique, featuring advanced filtering, dynamic product galleries, and a seamless checkout experience.",
      outcome: "Boosted monthly online sales by 60% with an improved conversion rate.",
      tags: ["Shopify", "React", "GraphQL"],
      color: "bg-fuchsia-600",
      image: fashionImg,
    },
    {
      title: "Corporate Real Estate Portal",
      desc: "A lead-generation website for a real estate agency, allowing users to search properties, view virtual tours, and schedule viewings instantly.",
      outcome: "Generated 200+ qualified leads in the first month.",
      tags: ["Vue.js", "Firebase", "Maps API"],
      color: "bg-blue-800",
      image: realEstateImg,
    },
    {
      title: "Local Gym & Fitness Dashboard",
      desc: "A member portal for a fitness center to track workouts, renew memberships, and book personal training sessions.",
      outcome: "Automated 90% of membership renewals, saving administrative hours.",
      tags: ["React", "Express", "PostgreSQL"],
      color: "bg-emerald-600",
      image: gymImg,
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
              {/* Image container (no colorful border/padding) */}
              <div className={`w-full ${i === 0 ? "lg:w-1/2" : ""} aspect-video relative overflow-hidden`}>
                {/* Browser window frame container */}
                <div className="w-full h-full flex flex-col relative z-10">
                  {/* Browser toolbar bar */}
                  <div className="h-6 bg-slate-50 border-b border-slate-200/40 flex items-center px-3 gap-1.5 shrink-0 select-none">
                    <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  
                  {/* Browser viewport */}
                  <div className="w-full h-full overflow-hidden relative bg-slate-50">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                          i === 0 ? "object-contain bg-white" : "object-cover object-top"
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                        <span className="font-outfit font-bold text-slate-400 text-sm">App Viewport Preview</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20"></div>
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
                  {project.liveDemo ? (
                    <Button variant="primary" size="sm" className="gap-2" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                  ) : (
                    <Button variant="primary" size="sm" className="gap-2">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                  )}

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
