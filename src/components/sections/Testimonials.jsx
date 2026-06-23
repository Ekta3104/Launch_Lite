import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      company: "TechNova Solutions",
      text: "Launchlite transformed our brand identity completely. The new website is generating 3x more leads, and the corporate brochures they printed are absolutely premium.",
      rating: 5,
      avatar: "R"
    },
    {
      name: "Priya Desai",
      company: "Elegant Weddings",
      text: "We ordered luxury wedding cards and the quality exceeded our expectations. Fast delivery, professional service, and stunning design work.",
      rating: 5,
      avatar: "P"
    },
    {
      name: "Amit Patel",
      company: "FreshBites App",
      text: "They developed our food delivery app from scratch. The UI/UX is flawless, and the backend is highly scalable. A truly professional digital agency.",
      rating: 5,
      avatar: "A"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-borderLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Client Reviews"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Read what business owners have to say about our digital and printing services."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 rounded-premium border border-borderLight relative group hover:border-accent hover:shadow-premium transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-slate-200 w-12 h-12 group-hover:text-orange-100 transition-colors" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="font-inter text-body leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-outfit font-bold text-xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-heading">{review.name}</h4>
                  <span className="font-inter text-sm text-body">{review.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
