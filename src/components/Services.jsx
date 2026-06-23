import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Printer, Palette, Megaphone, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-brand-blue" />,
    title: 'Website Development',
    desc: 'Custom business websites and web applications designed for maximum performance, security, and conversion.',
    features: ['E-Commerce Websites', 'Custom SaaS Portals', 'Vite & React Web Apps', 'High-Speed Landing Pages'],
    color: 'group-hover:text-brand-blue',
    glow: 'rgba(0, 191, 255, 0.08)',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-pink" />,
    title: 'Mobile App Development',
    desc: 'Bespoke Android and iOS applications built using modern frameworks with robust performance and smooth UX.',
    features: ['Native iOS & Android Apps', 'Cross-Platform React Native', 'Custom API Integrations', 'App Store Publishing'],
    color: 'group-hover:text-brand-pink',
    glow: 'rgba(233, 30, 99, 0.08)',
  },
  {
    icon: <Printer className="w-6 h-6 text-brand-blue" />,
    title: 'Printing Services',
    desc: 'Professional offset and digital print solutions utilizing high-quality paper, cardboards, and inks.',
    features: ['Premium Wedding Cards', 'Embossed Visiting Cards', 'Brochures & Pamphlets', 'Calendars & Flex Banners'],
    color: 'group-hover:text-brand-blue',
    glow: 'rgba(0, 191, 255, 0.08)',
  },
  {
    icon: <Palette className="w-6 h-6 text-brand-pink" />,
    title: 'Branding & Design',
    desc: 'End-to-end creative solutions to establish a robust corporate identity and cohesive visual brand narrative.',
    features: ['Custom Logo Design', 'Brand Guidelines Books', 'Product Packaging Design', 'Corporate Stationary'],
    color: 'group-hover:text-brand-pink',
    glow: 'rgba(233, 30, 99, 0.08)',
  },
  {
    icon: <Megaphone className="w-6 h-6 text-brand-blue" />,
    title: 'Digital Marketing',
    desc: 'Data-driven online marketing strategies designed to increase sales, traffic, and business growth.',
    features: ['Search Engine Optimization', 'Social Media Marketing', 'Google & Meta Ad Campaigns', 'Lead Generation Systems'],
    color: 'group-hover:text-brand-blue',
    glow: 'rgba(0, 191, 255, 0.08)',
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-pink" />,
    title: 'Graphic Design',
    desc: 'Stunning marketing creatives, vectors, and digital visuals tailored to capture customer attention.',
    features: ['Social Media Banners', 'Poster & Flyer Layouts', 'DTP & Vector Layout Editing', 'Infographic Design'],
    color: 'group-hover:text-brand-pink',
    glow: 'rgba(233, 30, 99, 0.08)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white/40 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-glow-pink rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-glow-blue rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
            Our Expertise
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight text-brand-navy">
            High-Impact Creative & Digital Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We provide a complete range of design, print, and technology solutions built to scale your business operations and elevate your brand presence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                boxShadow: `0 20px 45px -12px ${service.glow}`
              }}
              className="group relative rounded-3xl p-8 glass-panel gradient-border overflow-hidden cursor-default transition-all duration-300 shadow-sm"
            >
              {/* Subtle inner hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${service.glow}, transparent 60%)`
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-100 group-hover:border-brand-pink/20">
                  {service.icon}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold font-outfit text-brand-navy group-hover:text-brand-pink transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Discuss Project Link */}
                <div 
                  onClick={handleScrollToContact}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 group-hover:text-brand-pink transition-colors duration-300 pt-2 cursor-pointer"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
