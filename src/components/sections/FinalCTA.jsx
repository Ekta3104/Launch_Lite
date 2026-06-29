import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppUrl } from "../../constants/socialLinks";
import { siteConfig } from "../../config/siteConfig";
import { Link } from "react-router-dom";

const WA_CTA = getWhatsAppUrl("Hello Launchlite, I want to build something amazing. Let's talk!");

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 border-t border-borderLight">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-premium border border-borderLight shadow-premium p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-heading mb-6 leading-tight">
            Let's Build Something <span className="text-accent">Amazing For Your Business</span>
          </h2>
          <p className="font-inter text-body text-lg mb-10 max-w-2xl mx-auto">
            Whether you need wedding cards, branding, a website, or a custom mobile application — Launchlite is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-blue-900 text-white font-outfit font-bold text-base transition-all shadow-lg hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-outfit font-bold text-base transition-all shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-outfit font-bold text-base transition-all shadow-md hover:-translate-y-1"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
          <p className="mt-8 font-inter text-sm text-body">
            📍 Serving Businesses Across {siteConfig.contact.addressRegion} · {siteConfig.contact.phoneDisplay} · {siteConfig.contact.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
