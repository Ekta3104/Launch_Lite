import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Calendar, User, Tag, Award, Sparkles, ShoppingBag, MapPin, Feather, CheckCircle } from 'lucide-react';

const categories = ['All', 'Websites', 'Mobile Apps', 'Branding', 'Printing'];

const projects = [
  {
    id: 1,
    title: 'Apex E-Commerce Platform',
    category: 'Websites',
    desc: 'A high-speed headless WooCommerce store featuring instant search, live inventory sync, and a custom multi-step checkout funnel.',
    stats: '150% Increase in checkout conversions',
    client: 'Apex Retail Group',
    date: 'March 2026',
    deliverables: ['Headless React Frontend', 'Tailwind Styling', 'Payment Gateway Integration', 'Node.js Backend'],
    mockup: (
      <div className="w-full h-full bg-slate-50 flex flex-col justify-between p-4 border border-slate-200 rounded-2xl">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <span className="text-[10px] text-brand-blue font-bold font-mono">apex-shop.com</span>
          <ShoppingBag className="w-3.5 h-3.5 text-brand-blue" />
        </div>
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col justify-between h-16 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink text-xs font-bold font-outfit">S1</div>
            <span className="text-[8px] text-slate-500 block mt-1">Winter Jacket</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col justify-between h-16 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xs font-bold font-outfit">S2</div>
            <span className="text-[8px] text-slate-500 block mt-1">Sneaker Lite</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-brand-pink to-brand-blue h-6 rounded-lg flex items-center justify-center text-[8px] font-bold text-white uppercase tracking-wider">
          Pay ₹2,499 Now
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Velo Delivery App',
    category: 'Mobile Apps',
    desc: 'An Android and iOS courier application featuring real-time GPS tracking, automatic cost calculations, and driver chat utilities.',
    stats: '25,000+ Active Monthly Deliveries',
    client: 'Velo Logistics Ltd.',
    date: 'Jan 2026',
    deliverables: ['React Native App', 'Google Maps API integration', 'WebSocket chat', 'Push notifications'],
    mockup: (
      <div className="w-full h-full bg-white rounded-3xl p-4 border border-slate-200 flex flex-col justify-between relative overflow-hidden">
        {/* Mock Map Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,42,91,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(11,42,91,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
        
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] text-brand-navy font-bold">Velo Active Map</span>
          </div>
          <span className="text-[8px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">GPS On</span>
        </div>

        {/* Route visualization line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-pink fill-none" strokeWidth="2" strokeDasharray="3 3">
          <path d="M 50 160 Q 150 90 220 120" />
        </svg>
        
        {/* Floating Pins */}
        <div className="absolute left-[45px] top-[145px] w-4 h-4 rounded-full bg-brand-pink flex items-center justify-center animate-bounce-slow text-white text-[8px]">●</div>
        <div className="absolute left-[210px] top-[110px] w-4 h-4 rounded-full bg-brand-blue flex items-center justify-center text-[8px]"><MapPin className="w-2 h-2 text-white" /></div>

        <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 relative z-10 mt-auto flex justify-between items-center shadow-md">
          <div>
            <span className="text-[7px] text-slate-500 uppercase block">Estimated Delivery</span>
            <span className="text-[10px] font-bold text-brand-navy font-outfit">12 mins remaining</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center"><User className="w-3.5 h-3.5 text-brand-pink" /></div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Lumina Brand Identity',
    category: 'Branding',
    desc: 'A premium visual identity refresh, encompassing custom luxury logo marks, typeface pairing, color systems, and corporate stationary layouts.',
    stats: 'Cohesive launch across 6 national branches',
    client: 'Lumina Skincare & Wellness',
    date: 'December 2025',
    deliverables: ['Custom Vector Logo', 'Typography Stylebook', 'Stationary Templates', 'Eco Packaging Guidelines'],
    mockup: (
      <div className="w-full h-full bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between items-center relative overflow-hidden shadow-sm">
        <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-brand-pink/5 rounded-full filter blur-xl" />
        
        <div className="text-center mt-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-blue flex items-center justify-center mx-auto shadow-md shadow-brand-pink/10">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h4 className="font-outfit text-lg font-black tracking-[0.2em] text-brand-navy mt-3">LUMINA</h4>
          <span className="text-[7px] uppercase tracking-[0.3em] text-brand-pink font-semibold">Luxury Skincare</span>
        </div>

        <div className="w-full flex justify-between items-center mt-6 text-[8px] text-slate-400 border-t border-slate-100 pt-3">
          <span>Est. 2026</span>
          <span>●</span>
          <span>Premium Concept</span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Royal Marriage Invitation Card',
    category: 'Printing',
    desc: 'Traditional high-end Indian wedding card printed on premium 350GSM textured paper with intricate gold foil embossing, metallic seals, and custom inserts.',
    stats: '5,000+ guest packages delivered',
    client: 'The Singhania Family',
    date: 'February 2026',
    deliverables: ['Texture paper layout', 'Gold Foil Embossing Stencil', 'Custom Typography layout', 'Traditional insert design'],
    mockup: (
      <div className="w-full h-full bg-gradient-to-br from-[#2c0e18] to-[#14050a] rounded-2xl p-5 border border-amber-500/40 flex flex-col justify-between relative shadow-sm">
        {/* Gold Ornate Corner Borders */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-500/30" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-500/30" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-500/30" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-500/30" />

        <div className="text-center my-auto space-y-1 relative z-10">
          <Feather className="w-5 h-5 text-amber-500/60 mx-auto animate-pulse" />
          <h5 className="font-outfit text-sm font-bold text-amber-300 tracking-wider">Royal Marriage Invite</h5>
          <div className="h-[0.5px] w-24 bg-amber-500/20 mx-auto my-1" />
          <p className="text-[7px] text-amber-100/70 font-mono tracking-widest leading-relaxed">
            CELEBRATING LOVE & HERITAGE
          </p>
          <span className="text-[9px] font-semibold text-amber-300 italic block mt-1">Shreya & Aarav</span>
        </div>

        <div className="flex justify-between items-center text-[6px] text-amber-500/60 font-sans tracking-widest border-t border-amber-500/20 pt-2 relative z-10">
          <span>OFFSET PRESS</span>
          <span>GOLD EMBOSSED</span>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'FitPro Fitness App',
    category: 'Mobile Apps',
    desc: 'An interactive workout tracking app showing detailed calorie indicators, custom training routines, and integration with wearables.',
    stats: '15,000+ App Store Installs',
    client: 'FitPro Global Inc.',
    date: 'November 2025',
    deliverables: ['Swift & Kotlin Architecture', 'UI design', 'Smart Watch Sync', 'Database Optimization'],
    mockup: (
      <div className="w-full h-full bg-slate-50 rounded-3xl p-4 border border-slate-200 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-[8px] text-brand-pink font-bold">FitPro Track</span>
          <div className="w-3 h-3 rounded-full bg-brand-pink/10 flex items-center justify-center"><CheckCircle className="w-2 h-2 text-brand-pink" /></div>
        </div>

        {/* Circular Progress Mock */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center my-2">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="36" className="stroke-slate-200/50 fill-none" strokeWidth="6" />
            <circle cx="48" cy="48" r="36" className="stroke-brand-pink fill-none" strokeWidth="6" strokeDasharray="226" strokeDashoffset="60" />
            <circle cx="48" cy="48" r="28" className="stroke-brand-blue fill-none" strokeWidth="6" strokeDasharray="175" strokeDashoffset="80" />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-xs font-black font-outfit text-brand-navy">8,450</span>
            <span className="text-[6px] uppercase tracking-wider text-slate-400">steps</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[7px] text-slate-500">
          <span>Active time: 42m</span>
          <span className="text-brand-blue font-semibold">Goal: 85%</span>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Zen Packaging Design',
    category: 'Branding',
    desc: 'Minimalist product labels and packaging layout for a botanical tea company. Features organic texture papers, matte printing accents, and clean modern logos.',
    stats: 'Voted Top 10 Eco Designs 2025',
    client: 'Zen Leaf Tea Co.',
    date: 'October 2025',
    deliverables: ['Custom Brand Mark', 'Print Die-Cut Layouts', 'CMYK Safe Package Vectors', '3D Matte Render templates'],
    mockup: (
      <div className="w-full h-full bg-[#f4faf7] rounded-2xl p-5 border border-emerald-200 flex flex-col justify-between shadow-sm">
        <span className="text-[8px] uppercase tracking-[0.25em] text-emerald-600 font-bold self-start">Organic Tea</span>

        <div className="text-center my-auto">
          <div className="w-10 h-10 rounded-full border border-emerald-200 flex items-center justify-center mx-auto text-emerald-500 bg-white">
            🌿
          </div>
          <h5 className="font-outfit text-sm font-bold text-brand-navy tracking-wide mt-2">ZEN BOTANICALS</h5>
          <span className="text-[7px] text-emerald-600/60 font-mono block">MATCHA BLEND</span>
        </div>

        <div className="flex justify-between items-center text-[6px] text-slate-500 border-t border-emerald-200/50 pt-2">
          <span>RECYCLABLE BOX</span>
          <span>MATTE COATED</span>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Nova Corporate Website',
    category: 'Websites',
    desc: 'A modern, optimized multi-page corporate website for an AI SaaS analytics startup, complete with responsive pricing tables and interactive graphs.',
    stats: '99.9% Page Speed Lighthouse Score',
    client: 'Nova Analytics Inc.',
    date: 'January 2026',
    deliverables: ['Vite + Tailwind Frontend', 'Lighthouse Optimization', 'Interactive Dashboard pages', 'SEO-first architecture'],
    mockup: (
      <div className="w-full h-full bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <span className="text-[9px] font-bold text-brand-navy">nova-analytics.io</span>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="my-auto space-y-2">
          <span className="text-[9px] uppercase tracking-wider text-brand-pink block font-semibold text-center">SaaS AI Engine</span>
          <div className="h-6 w-full rounded bg-white border border-slate-200 flex items-center justify-between px-2 shadow-sm">
            <span className="text-[8px] text-slate-500">Monthly Revenue</span>
            <span className="text-[8px] font-bold text-green-600">+$12,450</span>
          </div>
          <div className="h-6 w-full rounded bg-white border border-slate-200 flex items-center justify-between px-2 shadow-sm">
            <span className="text-[8px] text-slate-500">API Latency</span>
            <span className="text-[8px] font-bold text-brand-blue">14ms</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[7px] text-slate-400">
          <span>React & Tailwind</span>
          <span>SSL Secured</span>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: 'Aura Premium Concert Poster',
    category: 'Printing',
    desc: 'Limited edition high-impact promotional posters for a major electronic music festival. Printed using fluorescent UV-active inks on heavy satin cardstock.',
    stats: '500+ limited edition prints sold out',
    client: 'Aura Events Group',
    date: 'September 2025',
    deliverables: ['Large-Format Vector Canvas', 'UV ink split layers', 'Custom graphic illustration', 'CMYK press matching'],
    mockup: (
      <div className="w-full h-full bg-gradient-to-tr from-purple-950 via-slate-900 to-brand-navy rounded-2xl p-4 border border-purple-500/20 flex flex-col justify-between overflow-hidden relative shadow-sm">
        {/* Glow rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-brand-pink/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-brand-blue/30 rounded-full" />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[7px] bg-brand-pink/20 text-brand-pink px-2 py-0.5 rounded-full font-bold">LIMITED PRESS</span>
          <span className="text-[7px] text-white/50 font-mono">2026 LIVE</span>
        </div>

        <div className="text-center relative z-10 my-auto">
          <h4 className="font-outfit text-xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-blue leading-none">AURA</h4>
          <span className="text-[6px] tracking-[0.3em] text-white font-bold block mt-1">ELECTRO BEATS FESTIVAL</span>
        </div>

        <div className="flex justify-between items-center text-[6px] text-purple-300 font-sans tracking-widest relative z-10">
          <span>SATIN 300GSM</span>
          <span>FLUORESCENT PRESS</span>
        </div>
      </div>
    )
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow-pink rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-blue rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
            Our Work
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight text-brand-navy">
            Client Success Stories
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Explore a curated selection of web portals, mobile application builds, custom corporate identities, and premium printing solutions we have crafted.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-brand-pink to-brand-blue text-white shadow-md shadow-brand-pink/15'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-brand-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl p-4 glass-panel hover:border-brand-pink/35 hover:bg-white transition-all duration-300 shadow-sm"
              >
                {/* Visual Custom Mockup Slot */}
                <div className="h-[210px] w-full rounded-2xl overflow-hidden relative bg-slate-100/50 p-2.5 transition-transform duration-300 group-hover:scale-[1.01] border border-slate-200/40">
                  {project.mockup}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-blue text-white text-xs font-bold uppercase tracking-widest shadow-md flex items-center space-x-1.5 hover:scale-105 transition-transform duration-300">
                      <span>View Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="pt-4 flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-center text-[10px] text-brand-pink uppercase tracking-widest font-bold font-outfit">
                    <span>{project.category}</span>
                  </div>
                  <h4 className="text-base font-bold font-outfit text-brand-navy leading-tight mt-1 line-clamp-1 group-hover:text-brand-pink transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Modal Component */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl glass-panel-heavy rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Mockup Visual */}
              <div className="w-full md:w-1/2 bg-slate-100 p-8 flex items-center justify-center min-h-[300px] md:min-h-0 border-r border-slate-200">
                <div className="w-full max-w-[340px] h-[340px]">
                  {selectedProject.mockup}
                </div>
              </div>

              {/* Right Side: Narrative Details */}
              <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between bg-white">
                <div className="space-y-6">
                  {/* Category & Badge */}
                  <div className="flex items-center space-x-2.5 text-xs text-brand-pink uppercase tracking-widest font-extrabold font-outfit">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{selectedProject.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-brand-navy leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  {/* Impact Stat */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center shrink-0 border border-brand-pink/20">
                      <Award className="w-5 h-5 text-brand-pink" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Project Result</span>
                      <span className="text-sm font-bold text-brand-navy font-outfit">{selectedProject.stats}</span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h5 className="text-xs uppercase tracking-wider text-brand-navy font-bold font-outfit">Deliverables</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.deliverables.map((item, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-full text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metadata block (Client/Date) */}
                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-brand-blue" />
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-slate-400 block">Client</span>
                      <span className="font-bold text-brand-navy">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-slate-400 block">Completed</span>
                      <span className="font-bold text-brand-navy">{selectedProject.date}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
