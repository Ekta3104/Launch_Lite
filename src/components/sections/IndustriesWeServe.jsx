import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { getWhatsAppUrl } from "../../constants/socialLinks";

const WA_CONTACT = getWhatsAppUrl("Hello Launchlite, I want to discuss solutions for my business.");

const CheckIcon = () => (
  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function IndustriesWeServe() {
  const industries = [
    {
      title: "Retail Stores",
      desc: "Boost your retail sales with engaging branding and robust online storefronts.",
      image: "/industry-retail.webp",
      features: ["E-Commerce Sites", "Product Packaging", "Flyers & Posters", "Store Branding"],
      checkColor: "bg-indigo-500",
      buttonColor: "text-indigo-600 hover:text-indigo-700",
    },
    {
      title: "Restaurants",
      desc: "Increase orders with digital menu systems, reservation apps, and visual prints.",
      image: "/industry-restaurant.webp",
      features: ["Digital Menus", "Order Web Apps", "Social Creatives", "Branded Packaging"],
      checkColor: "bg-rose-500",
      buttonColor: "text-rose-600 hover:text-rose-700",
    },
    {
      title: "Educational Institutes",
      desc: "Modernize enrollment with prospectus brochures, banner displays, and school portals.",
      image: "/industry-education.webp",
      features: ["School Websites", "Student Portals", "Admission Packets", "Banner Displays"],
      checkColor: "bg-sky-500",
      buttonColor: "text-sky-600 hover:text-sky-700",
    },
    {
      title: "Medical Clinics",
      desc: "Improve patient experience with booking portals, clinic sites, and custom materials.",
      image: "/industry-medical.webp",
      features: ["Booking Portals", "Clinic Websites", "Patient Forms", "Professional Cards"],
      checkColor: "bg-blue-500",
      buttonColor: "text-blue-600 hover:text-blue-700",
    },
    {
      title: "Startups",
      desc: "Scale fast with high-performance SaaS landing pages, MVPs, and modern brand assets.",
      image: "/industry-startup.webp",
      features: ["MVP Development", "SaaS Landing Pages", "Pitch Decks", "Modern Branding"],
      checkColor: "bg-purple-500",
      buttonColor: "text-purple-600 hover:text-purple-700",
    },
    {
      title: "Small Businesses",
      desc: "Grow your local footprint with SEO optimized websites and tactile visiting cards.",
      image: "/industry-smallbiz.webp",
      features: ["Local SEO Sites", "Visiting Cards", "Flyer Campaigns", "Logo Creation"],
      checkColor: "bg-orange-500",
      buttonColor: "text-orange-600 hover:text-orange-700",
    },
    {
      title: "Event Organizers",
      desc: "Draw crowds with premium invitations, flex banners, and event landing pages.",
      image: "/industry-events.webp",
      features: ["Invitation Cards", "Flex & Banners", "Event Websites", "Lanyard & Badges"],
      checkColor: "bg-emerald-500",
      buttonColor: "text-[#16A34A] hover:text-emerald-700",
    },
    {
      title: "E-Commerce",
      desc: "Sell 24/7 with smooth shopping carts, payment APIs, and social marketing ads.",
      image: "/industry-ecommerce.webp",
      features: ["Online Storefronts", "Payment Setups", "Social Media Ads", "Invoice Layouts"],
      checkColor: "bg-amber-500",
      buttonColor: "text-amber-500 hover:text-amber-600",
    },
  ];

  return (
    <section id="industries" className="bg-slate-50/50 py-24 border-y border-slate-200/50">
      <div className="container-premium">
        <SectionHeading 
          badge="Who We Help"
          title="Industries We Serve"
          subtitle="We craft tailored digital and printing solutions that meet the unique demands of various business sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.01)] p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Product Showcase Image Mockup (sits directly at top of card) */}
                  <div className="mb-5 rounded-2xl overflow-hidden border border-slate-100 aspect-[4/3] bg-slate-50 relative shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit font-extrabold text-[#111827] text-lg text-center mb-2 leading-tight">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-[#64748B] text-xs text-center leading-relaxed mb-6 px-1">
                    {industry.desc}
                  </p>

                  {/* Features 2x2 Grid Checklist */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-6 px-1">
                    {industry.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 min-w-0">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0 ${industry.checkColor}`}>
                          <CheckIcon />
                        </span>
                        <span className="font-inter text-[10.5px] font-extrabold text-[#4B5563] truncate">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="text-center pt-3 border-t border-slate-100">
                  <a
                    href={WA_CONTACT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 font-outfit font-extrabold text-xs transition-transform duration-300 ${industry.buttonColor}`}
                  >
                    <span>Explore Solutions</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
