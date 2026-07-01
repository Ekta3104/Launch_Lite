import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import weddingMock from "../../assets/Weding card mockup.webp";
import brochureMock from "../../assets/Brochermock.webp";
import calendarMock from "../../assets/CalenderMockup.webp";
import displayMock from "../../assets/DisplayMockup.webp";
import flexMock from "../../assets/flexmockup.webp";

export function PrintingShowcase() {
  const prints = [
    {
      title: "Wedding Card Mockup",
      desc: "Premium foil-stamped luxury wedding invitations",
      color: "bg-rose-100",
      image: weddingMock
    },
    {
      title: "Corporate Visiting Cards",
      desc: "Matte finish business cards with spot UV",
      color: "bg-slate-800 text-white",
      image: "/service-visiting.webp"
    },
    {
      title: "Brochure Fold Mockup",
      desc: "High-quality tri-fold corporate brochures",
      color: "bg-blue-100",
      image: brochureMock
    },
    {
      title: "Calendar Mockup",
      desc: "Custom wall and desk calendars for branding",
      color: "bg-amber-50",
      image: calendarMock
    },
    {
      title: "Poster Display Mockup",
      desc: "Large format high-resolution poster prints",
      color: "bg-indigo-100",
      image: displayMock
    },
    {
      title: "Flex Banner Mockup",
      desc: "Durable outdoor and indoor advertising banners",
      color: "bg-teal-100",
      image: flexMock
    }
  ];

  return (
    <section id="printing" className="py-24 bg-white border-y border-borderLight">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Premium Quality"
          title="Printing Showcase"
          subtitle="Explore our stunning range of physical print solutions designed to leave a lasting impression on your clients and guests."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-premium overflow-hidden bg-slate-50 border border-borderLight shadow-sm hover:shadow-premium transition-all duration-500"
            >
              {/* Presentation Layout Mockup */}
              <div className={`w-full aspect-[4/3] ${item.color} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                    <motion.div
                      className="w-3/4 h-3/4 bg-white/90 backdrop-blur rounded-lg shadow-2xl border border-white/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ rotate: [-1, 1, 0] }}
                    >
                      <span className="font-outfit font-semibold text-lg text-slate-400">Realistic Mockup Placeholder</span>
                    </motion.div>
                  </>
                )}
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="font-outfit font-bold text-xl text-heading mb-2">{item.title}</h3>
                <p className="font-inter text-body text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
