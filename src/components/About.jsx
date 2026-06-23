import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layout, Award, Rocket, Check } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-brand-pink" />,
      title: 'Creative Team',
      desc: 'Expert graphic designers, print specialists, and senior software developers working in harmony.',
    },
    {
      icon: <Layout className="w-5 h-5 text-brand-blue" />,
      title: 'End-to-End Solutions',
      desc: 'No middleman. We handle everything from logo design and offset printing to hosting web apps.',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-pink" />,
      title: 'Affordable Pricing',
      desc: 'Enterprise-grade quality tailored to small business and startup budgets.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-brand-blue" />,
      title: 'Timely Delivery',
      desc: 'Rigorous deadlines and real-time support keep your projects launching on time.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-glow-navy rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Grid Collage & Experience Badge */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[500px] w-full">
          {/* Main Card (Web layout grid sketch) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 w-[70%] h-[70%] glass-panel rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-brand-pink" />
                <div className="w-3 h-3 rounded-full bg-brand-blue" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <h4 className="text-xl font-bold font-outfit mb-2 text-brand-navy">Creative Studio</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Drafting pixel-perfect layouts, vector assets, and bespoke code.
              </p>
            </div>
            
            {/* Styled Palette Grid */}
            <div className="space-y-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${
                    i === 1 ? 'bg-brand-pink text-white' : i === 2 ? 'bg-brand-blue text-white' : i === 3 ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {i}
                  </div>
                ))}
                <span className="text-[10px] text-slate-400 self-center ml-4">+12 specialists</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-brand-pink to-brand-blue" />
              </div>
            </div>
          </motion.div>

          {/* Overlapping Card (Print proof sheet mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 bottom-0 w-[65%] h-[60%] bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-brand-blue font-bold">Print Proofing</span>
                <h4 className="text-lg font-bold font-outfit text-brand-navy mt-1">Offset Press</h4>
              </div>
              <span className="text-xs bg-brand-blue/10 text-brand-blue px-2.5 py-0.5 rounded-full font-bold">300 DPI</span>
            </div>

            {/* Print details */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[10px] text-slate-600">
                <div className="w-3.5 h-3.5 rounded bg-brand-pink/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-brand-pink" /></div>
                <span>CMYK Color Calibrated</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-slate-600">
                <div className="w-3.5 h-3.5 rounded bg-brand-pink/10 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-brand-pink" /></div>
                <span>Texture paper embossed printing</span>
              </div>
            </div>

            {/* Cyan, Magenta, Yellow, Key visual bars */}
            <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl border border-slate-100">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <div className="w-3 h-3 rounded-full bg-[#FF00FF]" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
              <span className="text-[8px] font-mono text-slate-400">CMYK Safe</span>
            </div>
          </motion.div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-1/4 bottom-12 w-32 h-32 rounded-full bg-white border-2 border-brand-pink p-2 flex flex-col items-center justify-center shadow-lg shadow-brand-pink/5"
          >
            {/* Spinning gradient ring */}
            <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-blue/50 animate-spin-slow" />
            <span className="font-outfit text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue">
              5+
            </span>
            <span className="text-[10px] text-center text-slate-700 uppercase font-bold tracking-wider mt-1 px-1">
              Years of Excellence
            </span>
          </motion.div>
        </div>

        {/* Right Column: Company Story & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
              Who We Are
            </h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight text-brand-navy">
              All-in-One Digital, Design, and Printing Agency
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Launchlite combines traditional offset/digital printing services with modern website development and software engineering. We offer a full range of branding, technology, and publishing services, delivering outstanding results for both physical and digital media.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex space-x-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-outfit font-bold text-brand-navy text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
