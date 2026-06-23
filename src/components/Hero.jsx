import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Monitor, Smartphone, Palette, Shield } from 'lucide-react';

function AnimatedCounter({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) return;
      if (start === end) {
        setCount(end);
        return;
      }
      
      const totalSteps = 40;
      const increment = Math.ceil(end / totalSteps);
      const stepTime = (duration * 1000) / totalSteps;
      
      let timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-outfit font-extrabold text-4xl sm:text-5xl text-brand-navy">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F8FAFC]">
      {/* Background radial blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-glow-pink rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-glow-blue rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-navy rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,42,91,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(11,42,91,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 self-start px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            <span className="text-xs font-bold text-brand-pink tracking-wider uppercase font-outfit">
              Printing, Design & Digital Solutions Under One Roof
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit tracking-tight leading-[1.1] text-brand-navy">
            Transforming Ideas Into{' '}
            <span className="bg-gradient-to-r from-brand-pink via-brand-blue to-brand-navy bg-clip-text text-transparent">
              Powerful Digital
            </span>{' '}
            Experiences
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
            From premium offset printing and brand identities to modern websites and mobile apps — we help businesses scale with exceptional, clean-cut creative assets.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-pink to-brand-blue hover:shadow-lg hover:shadow-brand-pink/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => handleScrollTo('#portfolio')}
              className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2 shadow-sm"
            >
              <Play className="w-4 h-4 text-brand-blue fill-current" />
              <span>View Portfolio</span>
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div className="flex flex-col">
              <AnimatedCounter value="500" suffix="+" />
              <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                Projects Done
              </span>
            </div>
            <div className="flex flex-col">
              <AnimatedCounter value="200" suffix="+" />
              <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col">
              <AnimatedCounter value="5" suffix="+" />
              <span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                Years Experience
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Layered Floating Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative h-[450px] sm:h-[550px] w-full flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Backdrop Graphic Ring */}
          <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] border border-slate-200 rounded-full pointer-events-none animate-spin-slow" />
          <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] border-2 border-dashed border-slate-200/60 rounded-full pointer-events-none" />

          {/* Card 1: Web Dashboard Mockup (Main Backdrop) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-12 w-[80%] sm:w-[360px] glass-panel rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-200"
          >
            {/* Window bar */}
            <div className="flex items-center space-x-1.5 mb-4 pb-2 border-b border-slate-100">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-[9px] text-slate-400 ml-2 font-mono">ekta-creation.com</span>
            </div>
            
            {/* Dashboard Mock Content */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-1/3 h-3 bg-slate-100 rounded" />
                <div className="w-8 h-4 bg-brand-pink/15 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-pink" /></div>
              </div>
              
              <div className="h-28 bg-slate-50 rounded-xl p-3 border border-slate-200/60 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase">Conversion Rate</span>
                    <span className="text-sm font-bold font-outfit text-brand-navy">+24.8%</span>
                  </div>
                  <Monitor className="w-4 h-4 text-brand-blue" />
                </div>
                {/* Mini Line Chart */}
                <div className="h-10 flex items-end space-x-1">
                  {[30, 45, 35, 60, 50, 75, 90, 85].map((val, idx) => (
                    <div 
                      key={idx} 
                      style={{ height: `${val}%` }} 
                      className="flex-1 bg-gradient-to-t from-brand-blue/20 to-brand-blue rounded-t"
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 bg-slate-50 rounded border border-slate-200/60 flex items-center px-2 space-x-2">
                  <div className="w-4 h-4 rounded bg-brand-pink/10 flex items-center justify-center text-[10px] text-brand-pink font-bold">W</div>
                  <span className="text-[9px] text-slate-600">Web Design</span>
                </div>
                <div className="h-8 bg-slate-50 rounded border border-slate-200/60 flex items-center px-2 space-x-2">
                  <div className="w-4 h-4 rounded bg-brand-blue/10 flex items-center justify-center text-[10px] text-brand-blue font-bold">SEO</div>
                  <span className="text-[9px] text-slate-600">Marketing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mobile App Mockup (Overlay Right) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 bottom-12 w-[50%] sm:w-[200px] glass-panel-heavy rounded-[32px] p-3.5 shadow-xl shadow-slate-200/60 border border-slate-200"
          >
            {/* Phone Speaker & Camera Notch */}
            <div className="w-16 h-3.5 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-2" />
              <div className="w-6 h-1 bg-slate-200 rounded-full" />
            </div>

            {/* Mobile Interface */}
            <div className="space-y-3.5">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  EC
                </div>
                <div>
                  <span className="text-[9px] font-bold block leading-tight text-brand-navy">Ekta App</span>
                  <span className="text-[7px] text-brand-pink uppercase tracking-widest font-semibold">Active Now</span>
                </div>
              </div>

              {/* Balance Card */}
              <div className="bg-gradient-to-r from-brand-pink to-pink-600 rounded-2xl p-2.5 text-white flex flex-col justify-between h-20 shadow-sm">
                <span className="text-[7px] uppercase tracking-wider opacity-85">Digital Card</span>
                <span className="text-xs font-bold font-outfit tracking-wide mt-1">₹45,250.00</span>
                <span className="text-[6px] opacity-75 self-end">EKTA CREATIVE PAY</span>
              </div>

              {/* Transactions List */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    <Smartphone className="w-3 h-3 text-brand-blue" />
                    <span className="text-[8px] text-slate-600">App Mockup</span>
                  </div>
                  <span className="text-[8px] font-bold text-green-600">+100%</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    <Palette className="w-3 h-3 text-brand-pink" />
                    <span className="text-[8px] text-slate-600">Logo Design</span>
                  </div>
                  <span className="text-[8px] font-bold text-green-600">Delivered</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Graphic Print / Business Card (Small Center Float) */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] bg-white border border-slate-200/80 rounded-xl p-3 shadow-lg transform -rotate-6 shadow-slate-200/20"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-outfit font-black tracking-widest text-brand-navy">Launchlite</span>
              <Shield className="w-3.5 h-3.5 text-brand-pink" />
            </div>
            
            <div className="h-px bg-slate-100 my-1.5" />
            
            <div className="space-y-1">
              <span className="text-[8px] block text-slate-500">Premium Business Card Mockup</span>
              <span className="text-[7px] text-brand-blue font-bold uppercase tracking-wider block">UV Embossed Finish</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
              <span className="text-[6px] text-slate-400 font-mono">Premium Quality</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
