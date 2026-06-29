import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How long does website development take?",
      a: "A standard corporate website typically takes 2-4 weeks from design to launch. Complex web applications or e-commerce platforms may take 6-12 weeks depending on the required features."
    },
    {
      q: "Do you provide hosting and domain support?",
      a: "Yes, we offer end-to-end solutions. We can manage your domain registration, set up premium fast hosting, and ensure your SSL certificates are properly configured for security."
    },
    {
      q: "Can you redesign an existing website?",
      a: "Absolutely. We specialize in taking outdated websites and transforming them into modern, high-converting platforms using the latest technologies like React and Next.js."
    },
    {
      q: "What printing services do you offer?",
      a: "We offer a comprehensive range of premium printing services including luxury wedding cards, spot-UV visiting cards, corporate brochures, large format posters, calendars, and durable flex banners."
    },
    {
      q: "Do you provide maintenance and support after delivery?",
      a: "Yes, all our professional and enterprise packages come with dedicated post-launch support. We handle updates, security patches, and minor design tweaks to keep your business running smoothly."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-premium max-w-4xl">
        <SectionHeading 
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers to help you understand our process, pricing, and services."
        />

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-borderLight rounded-xl overflow-hidden bg-slate-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-outfit font-bold text-lg text-heading pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 font-inter text-body leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
