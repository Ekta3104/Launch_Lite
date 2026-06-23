import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Award, Users, Clock, Target } from "lucide-react";

export function About() {
  const highlights = [
    { icon: Target, title: "Modern Technologies", desc: "We use the latest tech stacks to ensure performance and scalability." },
    { icon: Users, title: "Creative Design Team", desc: "Award-winning designers crafting premium visual experiences." },
    { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes that ensure your project is delivered on time." },
    { icon: Award, title: "End-to-End Solutions", desc: "From initial concept to final printing and deployment." }
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Story & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              badge="About Us"
              title="A Full-Service Creative Agency"
              subtitle="We are a passionate team of designers, developers, and print specialists dedicated to bringing your brand vision to life."
              centered={false}
              className="mb-10"
            />
            
            <p className="font-inter text-body mb-10 leading-relaxed text-lg">
              Since our inception, Launchlite has been committed to providing premium quality services that bridge the gap between digital innovation and physical branding. We don't just build websites or print cards; we craft comprehensive brand experiences.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-1">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-outfit font-bold text-heading text-lg">{item.title}</h4>
                  <p className="font-inter text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Creative Illustration / Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
            
            <div className="absolute inset-4 bg-white rounded-premium shadow-premium border border-borderLight overflow-hidden p-6 flex flex-col">
              <div className="w-full h-1/2 bg-slate-100 rounded-xl mb-4 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                    <span className="font-outfit font-bold text-slate-400">Creative Team Collaboration</span>
                 </div>
              </div>
              <div className="w-full h-1/2 flex gap-4">
                <div className="w-1/2 h-full bg-slate-100 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                      <span className="font-outfit font-bold text-slate-400 text-center px-4">Modern Office</span>
                  </div>
                </div>
                <div className="w-1/2 h-full bg-slate-100 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-transparent transition-colors">
                      <span className="font-outfit font-bold text-slate-400 text-center px-4">Print Workshop</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-white px-6 py-4 rounded-xl shadow-premium border border-borderLight flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center font-outfit font-bold text-xl">
                  5+
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit font-bold text-heading">Years</span>
                  <span className="font-inter text-sm text-body">Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
