import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "For small businesses looking to establish a basic digital presence.",
      price: "Custom",
      features: ["Basic Website (Up to 5 Pages)", "Standard Branding", "100 Business Cards", "Basic SEO Setup", "1 Month Support"],
      isPopular: false,
    },
    {
      name: "Professional",
      desc: "Comprehensive solution for growing businesses needing a strong impact.",
      price: "Custom",
      features: ["Premium Custom Website", "Complete Brand Identity", "Full Printing Package", "Advanced SEO & Analytics", "E-commerce Integration", "6 Months Support"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      desc: "Full-scale custom development and continuous creative partnership.",
      price: "Custom",
      features: ["Custom Web/Mobile Apps", "Unlimited Design Requests", "Dedicated Account Manager", "High-Volume Printing", "Custom Integrations", "24/7 Priority Support"],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="Clear Investment"
          title="Pricing Plans"
          subtitle="Choose the right package tailored to your business goals. We offer transparent, value-driven pricing."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 rounded-premium border ${
                plan.isPopular 
                  ? "bg-primary text-white border-primary shadow-premium lg:scale-105 z-10" 
                  : "bg-white text-heading border-borderLight shadow-card hover:shadow-premium transition-shadow"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-outfit text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`font-inter text-sm mb-8 ${plan.isPopular ? "text-blue-200" : "text-body"}`}>
                {plan.desc}
              </p>
              
              <div className="mb-8">
                <span className="font-outfit text-5xl font-extrabold">{plan.price}</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-accent" : "text-primary"}`} />
                    <span className={`font-inter text-sm ${plan.isPopular ? "text-blue-50" : "text-body"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? "primary" : "outline"} 
                className={`w-full ${plan.isPopular ? "" : "border-borderLight hover:bg-slate-50 text-heading"}`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
