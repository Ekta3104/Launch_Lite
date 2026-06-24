import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const WA_URL = "https://wa.me/917350583530?text=Hello%20Launchlite%2C%20I%20want%20to%20discuss%20my%20project.";

export function ReadyToGrow() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl rounded-[40px] bg-[#0B2A5B] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#0B2A5B]/15 "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.2),_transparent_40%)] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-9xl">
            <p className="font-outfit font-bold text-sm uppercase tracking-[0.35em] text-[#eee9e3] mb-4">
              Ready to Grow Your Business?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Let's Build Something{" "}
  <span className="text-[#F97316]">
    Amazing For Your Business
  </span>
            </h2>
            <p className="font-inter text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need wedding cards, branding, a website, or a custom mobile application — Launchlite is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white font-outfit font-bold text-base transition-all shadow-lg hover:-translate-y-1"
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-outfit font-bold text-base transition-all shadow-lg hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+917350583530"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0B2A5B] hover:bg-slate-100 font-outfit font-bold text-base transition-all shadow-md hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
