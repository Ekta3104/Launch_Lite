import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'CEO, NexaRetail',
    review: 'Launchlite built our headless e-commerce store and handles our custom packaging boxes. The speed of the React app is outstanding, and the print precision on our physical boxes exceeded our expectations. Having digital and print under one roof is a massive time-saver.',
    rating: 5,
    project: 'E-Commerce & Packaging',
    avatarGradient: 'from-pink-500 to-rose-600',
    initials: 'AS',
  },
  {
    id: 2,
    name: 'Deepika Patel',
    role: 'Founder, Elite Events',
    review: 'The gold-embossed royal wedding cards that Launchlite printed for our high-profile clients are absolute masterpieces. The texture of the paper and the sharpness of the metallic stamp are premium. They are our go-to print and design partners.',
    rating: 5,
    project: 'Premium Wedding Cards',
    avatarGradient: 'from-blue-500 to-indigo-600',
    initials: 'DP',
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    role: 'Director, Velo Logistics',
    review: 'We commissioned Launchlite for our courier mobile application and a complete brand identity revamp. The app is fast, GPS works seamlessly, and our new logo has given us a strong corporate presence. Exceptional work and support.',
    rating: 5,
    project: 'Mobile App & Logo Design',
    avatarGradient: 'from-emerald-500 to-teal-600',
    initials: 'RM',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  const active = testimonials[index];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-glow-blue rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
            Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight text-brand-navy">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-panel rounded-3xl p-8 sm:p-12 relative flex flex-col justify-between border border-slate-200 shadow-xl"
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-brand-navy/[0.02] pointer-events-none" />

              <div className="space-y-6">
                {/* 5-Star Ratings */}
                <div className="flex space-x-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal italic">
                  "{active.review}"
                </p>
              </div>

              {/* Client Info Grid */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 pt-6 border-t border-slate-100 gap-4">
                <div className="flex items-center space-x-4">
                  {/* Stylized Gradient Initials Avatar */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${active.avatarGradient} flex items-center justify-center font-outfit font-extrabold text-sm text-white shadow-md`}>
                    {active.initials}
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-brand-navy text-sm">
                      {active.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {active.role}
                    </span>
                  </div>
                </div>

                {/* Delivered Service Tag */}
                <span className="text-[10px] uppercase tracking-widest text-brand-pink bg-brand-pink/10 border border-brand-pink/20 px-3.5 py-1.5 rounded-full font-bold self-start sm:self-center">
                  {active.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-colors duration-300 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-colors duration-300 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
