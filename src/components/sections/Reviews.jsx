import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Star } from "lucide-react";

export function Reviews() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allReviews = [
    {
      name: "Sneha Kulkarni",
      date: "2 weeks ago",
      category: "Printing",
      service: "Wedding Cards",
      text: "We ordered luxury wedding invitation cards and the quality was beyond our expectations. The foil stamping was perfect, colors were vivid, and the delivery was on time. Highly recommend Launchlite for wedding stationery!",
      rating: 5,
      avatar: "S",
      color: "bg-rose-500",
    },
    {
      name: "Ravi Patil",
      date: "1 month ago",
      category: "Printing",
      service: "Visiting Cards",
      text: "Got 500 premium business cards with Spot UV finish. The cards feel very professional and my clients always notice them. Fast turnaround, great communication, and excellent quality.",
      rating: 5,
      avatar: "R",
      color: "bg-slate-700",
    },
    {
      name: "Priya Joshi",
      date: "3 weeks ago",
      category: "Printing",
      service: "Brochures",
      text: "The tri-fold brochures for our coaching institute came out absolutely stunning. Sharp graphics, accurate colors, and premium paper quality. Will definitely order again for our next campaign.",
      rating: 5,
      avatar: "P",
      color: "bg-blue-600",
    },
    {
      name: "Amit Sharma",
      date: "2 months ago",
      category: "Website",
      service: "Business Website",
      text: "Launchlite built our company website and it looks incredibly professional. The design is modern, fully responsive, and the site is fast. Our online inquiries increased significantly within the first month!",
      rating: 5,
      avatar: "A",
      color: "bg-indigo-600",
    },
    {
      name: "Suresh Deshmukh",
      date: "3 months ago",
      category: "Website",
      service: "Management System",
      text: "They developed a complete employee management system for our factory. The system handles attendance, payroll summaries, and leave management. It's reliable, easy to use, and saved us hours every week.",
      rating: 5,
      avatar: "S",
      color: "bg-teal-600",
    },
    {
      name: "Neha Gaikwad",
      date: "1 month ago",
      category: "App",
      service: "Android Application",
      text: "Ordered a custom Android app for our food business. The ordering flow is seamless, the UI is clean, and customers love using it. Launchlite delivered exactly what we discussed, on time and within budget.",
      rating: 5,
      avatar: "N",
      color: "bg-orange-600",
    },
  ];

  const categories = ["All", "Printing", "Website", "App"];
  const filtered = activeCategory === "All" ? allReviews : allReviews.filter((r) => r.category === activeCategory);

  return (
    <section className="bg-slate-50 border-y border-borderLight section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-4 gap-12 items-start">

          {/* Left: Summary */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <SectionHeading
              badge="Client Feedback"
              title="What Our Clients Say"
              subtitle="Real reviews from businesses across Maharashtra."
              centered={false}
              className="mb-0"
            />
            <div className="bg-white p-6 rounded-xl border border-borderLight shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-outfit font-extrabold text-5xl text-heading">4.9</span>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <span className="font-inter text-sm text-body mt-1 block">50+ Verified Reviews</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {[["5 stars", "92%"], ["4 stars", "6%"], ["3 stars", "2%"]].map(([label, pct]) => (
                  <div key={label} className="flex items-center gap-3 text-xs font-inter text-body">
                    <span className="w-12 shrink-0">{label}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: pct }}></div>
                    </div>
                    <span className="w-8 text-right">{pct}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-2.5 rounded-lg font-inter font-medium text-sm transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-white text-body border border-borderLight hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat === "All" ? "All Reviews" : cat === "App" ? "App Development" : `${cat} Clients`}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Review Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6 items-start">
            {filtered.map((review, i) => (
              <motion.div
                key={review.name + review.service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="bg-white p-6 rounded-xl border border-borderLight shadow-sm hover:shadow-premium transition-shadow"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${review.color} text-white rounded-full flex items-center justify-center font-outfit font-bold flex-shrink-0`}>
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-heading text-sm leading-tight">{review.name}</h4>
                      <span className="font-inter text-xs text-slate-400">{review.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-inter font-bold uppercase tracking-wider text-accent bg-orange-50 px-2 py-1 rounded-full shrink-0">{review.service}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-inter text-body text-sm leading-relaxed">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
