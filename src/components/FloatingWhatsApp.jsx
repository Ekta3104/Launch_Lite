import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_FLOAT = "https://wa.me/917350583530?text=Hello%20Ekta%20Creation%2C%20I%20am%20interested%20in%20your%20services.%20Please%20get%20in%20touch.";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_FLOAT}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-20 lg:bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center group"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
      <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform" />
    </motion.a>
  );
}
