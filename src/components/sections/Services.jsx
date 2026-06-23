import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Laptop, Smartphone, LayoutTemplate, TrendingUp, MonitorPlay, Printer, Copy, BookOpen, Image as ImageIcon, CalendarDays, Maximize } from "lucide-react";

export function Services() {
  const digitalServices = [
    { title: "Website Development", icon: Laptop },
    { title: "Mobile Applications", icon: Smartphone },
    { title: "UI/UX Design", icon: LayoutTemplate },
    { title: "Digital Marketing", icon: TrendingUp },
    { title: "Web Applications", icon: MonitorPlay },
  ];

  const printingServices = [
    { title: "Wedding Cards", icon: Copy },
    { title: "Visiting Cards", icon: ImageIcon },
    { title: "Brochures", icon: BookOpen },
    { title: "Posters", icon: Maximize },
    { title: "Calendars", icon: CalendarDays },
    { title: "Flex Printing", icon: Printer },
  ];

  const ServiceCard = ({ title, icon: Icon, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white p-6 rounded-xl border border-borderLight flex flex-col items-center text-center hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-slate-50 text-secondary rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h4 className="font-outfit font-bold text-heading text-lg">{title}</h4>
    </motion.div>
  );

  return (
    <section id="services" className="bg-slate-50 section-padding">
      <div className="container-premium">
        <SectionHeading 
          badge="Our Expertise"
          title="Comprehensive Solutions"
          subtitle="We bridge the gap between digital innovation and physical branding with our specialized service divisions."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Digital Solutions */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Laptop className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="font-outfit text-3xl font-bold text-heading">Digital Solutions</h3>
                <p className="font-inter text-body text-sm mt-1">Modern tech for modern businesses.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {digitalServices.map((service, i) => (
                <ServiceCard key={i} title={service.title} icon={service.icon} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Printing Solutions */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Printer className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-outfit text-3xl font-bold text-heading">Printing Solutions</h3>
                <p className="font-inter text-body text-sm mt-1">Premium quality physical branding.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {printingServices.map((service, i) => (
                <ServiceCard key={i} title={service.title} icon={service.icon} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
