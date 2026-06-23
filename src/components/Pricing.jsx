import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Flame, ShieldAlert } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Small Business Package',
    price: '₹9,999',
    icon: <Zap className="w-5 h-5 text-brand-pink" />,
    features: [
      { text: 'Custom Logo Design (2 Concepts)', included: true },
      { text: '1-Page High-Speed Landing Page', included: true },
      { text: '500 Embossed Visiting Cards (Print)', included: true },
      { text: '1 Month Website Maintenance Support', included: true },
      { text: 'Custom Web & Mobile App Builds', included: false },
      { text: 'Bulk Offset Brochure Printing', included: false },
      { text: 'Full Brand Stylebook Guidelines', included: false },
    ],
    popular: false,
    btnText: 'Get Started',
  },
  {
    name: 'Professional',
    tagline: 'Growing Business Package',
    price: '₹24,999',
    icon: <Flame className="w-5 h-5 text-brand-pink" />,
    features: [
      { text: 'Full Brand Identity Guidelines Book', included: true },
      { text: '5-Page Fully Responsive React Website', included: true },
      { text: '1,000 Premium Embossed Visiting Cards', included: true },
      { text: '200 High-Quality Trifold Brochures (Print)', included: true },
      { text: '3 Months Hosting & Server Support', included: true },
      { text: 'Custom Mobile App (iOS/Android)', included: false },
      { text: 'E-Commerce Checkout Systems', included: false },
    ],
    popular: true,
    btnText: 'Claim Package',
  },
  {
    name: 'Enterprise',
    tagline: 'Custom Solutions',
    price: 'Custom',
    icon: <ShieldAlert className="w-5 h-5 text-brand-blue" />,
    features: [
      { text: 'Full E-Commerce Portal / Dashboard', included: true },
      { text: 'iOS & Android Native Mobile Apps', included: true },
      { text: 'Unlimited Offset & Flex Banner Printing', included: true },
      { text: 'Custom Product Packaging Die-Cuts', included: true },
      { text: 'Dedicated 24/7 Account & Dev Manager', included: true },
      { text: 'Continuous Cloud Hosting & SLA Support', included: true },
      { text: 'Corporate stationery & DTP layouts', included: true },
    ],
    popular: false,
    btnText: 'Contact for Quote',
  },
];

export default function Pricing() {
  const handleScrollToContact = (planName) => {
    const serviceSelect = document.getElementById('service-select');
    if (serviceSelect) {
      if (planName === 'Starter') {
        serviceSelect.value = 'Branding & Design';
      } else if (planName === 'Professional') {
        serviceSelect.value = 'Website Development';
      } else {
        serviceSelect.value = 'Mobile App Development';
      }
    }
    
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
    <section id="pricing" className="py-24 bg-white/40 relative overflow-hidden">
      {/* Background radial blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-glow-navy rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-glow-pink rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
            Pricing Plans
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight text-brand-navy">
            Transparent, Value-Packed Packages
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Find the perfect combination of design layout, premium offset printing, and custom software code structured to meet your business budget.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#0B2A5B] text-white border-2 border-brand-pink shadow-xl shadow-brand-navy/15 lg:scale-[1.03] z-10'
                  : 'bg-white border border-slate-150 hover:border-slate-250 shadow-sm'
              }`}
            >
              {/* Popular Banner */}
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-blue text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Highly Recommended
                </span>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    {plan.icon}
                    <h4 className={`text-xl font-bold font-outfit ${plan.popular ? 'text-white' : 'text-brand-navy'}`}>{plan.name}</h4>
                  </div>
                  <p className={`text-xs ${plan.popular ? 'text-white/70' : 'text-slate-500'}`}>{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className={`py-4 border-y ${plan.popular ? 'border-white/10' : 'border-slate-100'}`}>
                  <span className={`font-outfit text-4xl sm:text-5xl font-black ${plan.popular ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-xs ml-2 ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>onetime package</span>
                  )}
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start space-x-3 text-xs leading-relaxed ${
                        plan.popular
                          ? feature.included ? 'text-white/90' : 'text-white/30'
                          : feature.included ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      ) : (
                        <X className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-white/10' : 'text-slate-200'}`} />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                onClick={() => handleScrollToContact(plan.name)}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 transition-all duration-300 mt-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-pink to-brand-blue text-white hover:shadow-lg hover:shadow-brand-pink/20 hover:-translate-y-0.5'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-0.5 shadow-sm'
                }`}
              >
                <span>{plan.btnText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
