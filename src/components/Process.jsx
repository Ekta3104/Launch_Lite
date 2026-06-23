import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Compass, Cpu, CheckCircle2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We sit down (or hop on a call) to understand your business objectives, target audience, brand aesthetic, and core requirements.',
    icon: <MessageSquare className="w-5 h-5 text-brand-pink" />,
  },
  {
    num: '02',
    title: 'Planning & Strategy',
    desc: 'Our team defines the technical roadmap, selects the appropriate materials or stack, designs site maps, and creates project milestones.',
    icon: <ClipboardList className="w-5 h-5 text-brand-blue" />,
  },
  {
    num: '03',
    title: 'Design & Proofing',
    desc: 'We craft high-fidelity UI designs in Figma and mock up print vectors. You receive digital proofs to review and approve.',
    icon: <Compass className="w-5 h-5 text-brand-pink" />,
  },
  {
    num: '04',
    title: 'Development & Printing',
    desc: 'Developers write responsive web code using React and Tailwind, while our print specialists set up offset plates and paper stocks.',
    icon: <Cpu className="w-5 h-5 text-brand-blue" />,
  },
  {
    num: '05',
    title: 'Testing & Quality Check',
    desc: 'We run rigorous cross-device checks for websites, speed optimizations, and check color consistency on physical print sheets.',
    icon: <CheckCircle2 className="w-5 h-5 text-brand-pink" />,
  },
  {
    num: '06',
    title: 'Launch & Delivery',
    desc: 'Your website goes live, mobile apps publish to stores, and print materials are packaged securely and shipped to your address.',
    icon: <Rocket className="w-5 h-5 text-brand-blue" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-glow-navy rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
            How We Work
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight text-brand-navy">
            Our 6-Step Workflow
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            From initial brainstorms to production delivery, we follow a refined process to ensure premium quality results.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-[1px] bg-gradient-to-b from-brand-pink via-brand-blue to-slate-200/80 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Badge (Circle dot containing Step Num) */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[20px] md:-translate-x-1/2 w-10.5 h-10.5 rounded-full bg-white border-2 border-brand-pink z-10 flex items-center justify-center font-outfit font-black text-xs text-brand-navy shadow-sm">
                    {step.num}
                  </div>

                  {/* Empty Spacer Column (Desktop only, takes half screen width) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Column (Takes half screen width on desktop, full width on mobile) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div className="glass-panel p-6 rounded-2xl border border-slate-200 hover:border-brand-blue/30 transition-all duration-300 relative shadow-md">
                      {/* Step Icon inside Card */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200/60 mb-4">
                        {step.icon}
                      </div>

                      <h4 className="text-lg font-bold font-outfit text-brand-navy mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
