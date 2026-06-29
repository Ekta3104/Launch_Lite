import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Check } from "lucide-react";
import { getWhatsAppUrl } from "../../constants/socialLinks";

const WA_WEBSITE = getWhatsAppUrl("Hello Launchlite, I am interested in Website Development.");
const WA_APP = getWhatsAppUrl("Hello Launchlite, I want to discuss a Mobile App idea.");
const WA_PRINT = getWhatsAppUrl("Hello Launchlite, I need a Printing Quote.");

export function Solutions() {
  const solutions = [
    {
      name: "Website Development",
      price: "Starting from ₹10,000",
      features: ["Business & Portfolio Websites", "E-Commerce Stores", "Custom Web Applications", "Landing Pages", "Responsive Design", "SEO Setup Included"],
      isPopular: false,
      cta: "Build Your Website",
      href: WA_WEBSITE,
      color: "bg-blue-50",
    },
    {
      name: "Mobile App Development",
      price: "Starting from ₹20,000",
      features: ["Android Applications", "Business Management Apps", "Delivery & Service Apps", "Cross-Platform Solutions", "Firebase & Cloud Backend", "App Store Submission"],
      isPopular: true,
      cta: "Discuss Your App Idea",
      href: WA_APP,
    },
    {
      name: "Printing Solutions",
      price: "Custom Quote",
      features: ["Wedding & Invitation Cards", "Visiting Cards (Spot UV / Matte)", "Brochures & Booklets", "Posters & Banners", "Calendars & Diaries", "Flex & Vinyl Printing"],
      isPopular: false,
      cta: "Get Printing Quote",
      href: WA_PRINT,
      color: "bg-orange-50",
    },
  ];

  return (
    <section id="pricing" className="bg-slate-50 section-padding border-y border-borderLight">
      <div className="container-premium">
        <SectionHeading
          badge="Clear Investment"
          title="Transparent Pricing"
          subtitle="No hidden costs. We offer honest 'Starting From' pricing so you can plan your budget with confidence."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12 items-center">
          {solutions.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-premium border flex flex-col ${
                plan.isPopular
                  ? "bg-primary text-white border-primary shadow-premium lg:scale-105 z-10"
                  : "bg-white text-heading border-borderLight shadow-card hover:shadow-premium transition-shadow"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide whitespace-nowrap">
                  🔥 Most Requested
                </div>
              )}

              <h3 className="font-outfit text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-8 mt-4">
                <span className={`font-outfit text-2xl font-extrabold ${plan.isPopular ? "text-white" : "text-primary"}`}>
                  {plan.price}
                </span>
              </div>

              <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 text-accent`} />
                    <span className={`font-inter text-sm leading-relaxed ${plan.isPopular ? "text-blue-50" : "text-body"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noreferrer"
                className={`w-full text-center px-6 py-3.5 rounded-xl font-outfit font-bold transition-all hover:-translate-y-1 ${
                  plan.isPopular
                    ? "bg-accent text-white hover:bg-orange-700 shadow-lg"
                    : "bg-primary text-white hover:bg-blue-900 shadow-md"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
