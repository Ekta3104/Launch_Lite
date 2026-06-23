import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'NEXA TECH', logo: '⚡' },
  { name: 'VANGUARD CO', logo: '✦' },
  { name: 'APEX CORP', logo: '▲' },
  { name: 'LUMINA INC', logo: '✸' },
  { name: 'PRISM CO', logo: '■' },
  { name: 'HORIZON', logo: '⬢' },
  { name: 'QUANTUM', logo: '❖' },
  { name: 'ELEVATE', logo: '▲' },
];

export default function TrustedBy() {
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-12 border-y border-slate-200/60 bg-slate-50/50 overflow-hidden relative">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold font-outfit">
          Empowering Brands & Businesses Globally
        </p>
      </div>

      <div className="flex w-max relative">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="flex space-x-12 sm:space-x-16 items-center px-4"
        >
          {marqueeItems.map((client, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-slate-400 hover:text-brand-pink transition-colors duration-300 select-none group cursor-default"
            >
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                {client.logo}
              </span>
              <span className="font-outfit text-sm sm:text-base font-extrabold tracking-[0.15em]">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
