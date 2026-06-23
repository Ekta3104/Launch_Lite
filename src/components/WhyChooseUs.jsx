import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, DollarSign, Users2, Headphones, Cpu } from 'lucide-react';

const reasons = [
  {
    icon: <Zap className="w-5 h-5 text-brand-pink" />,
    title: 'Fast Delivery',
    desc: 'Streamlined design and printing pipelines ensure quick turnaround times without compromising project fidelity.',
    glow: 'rgba(233, 30, 99, 0.05)',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-brand-blue" />,
    title: 'Affordable Pricing',
    desc: 'Get corporate-level websites and high-end texture offset printing options customized to fit startup budgets.',
    glow: 'rgba(0, 191, 255, 0.05)',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand-pink" />,
    title: 'Premium Quality',
    desc: 'Rigorous software QA and ink-density testing guarantee flawless execution across all digital and print assets.',
    glow: 'rgba(233, 30, 99, 0.05)',
  },
  {
    icon: <Users2 className="w-5 h-5 text-brand-blue" />,
    title: 'Expert Team',
    desc: 'Our cross-functional crew of developers, DTP specialists, and brand managers have over 5+ years of experience.',
    glow: 'rgba(0, 191, 255, 0.05)',
  },
  {
    icon: <Headphones className="w-5 h-5 text-brand-pink" />,
    title: 'Ongoing Support',
    desc: 'From hosting servers to post-print inquiries, we offer round-the-clock consultation to ensure operations run smooth.',
    glow: 'rgba(233, 30, 99, 0.05)',
  },
  {
    icon: <Cpu className="w-5 h-5 text-brand-blue" />,
    title: 'Latest Technologies',
    desc: 'Leveraging Vite, React, Tailwinds, dynamic server systems, and the latest modern offset press machinery.',
    glow: 'rgba(0, 191, 255, 0.05)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-glow-navy rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
              Why Choose Us
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight text-brand-navy">
              Why Partner with Launchlite?
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            We provide a unique synthesis of engineering capabilities and creative design expertise, making us the premier single-stop solution for growing business brands.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-pink/30 hover:bg-white/80 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div 
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-100 group-hover:border-brand-pink/20"
                  style={{ boxShadow: `0 0 15px -5px ${item.glow}` }}
                >
                  {item.icon}
                </div>
                
                <h4 className="text-lg font-bold font-outfit text-brand-navy">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
