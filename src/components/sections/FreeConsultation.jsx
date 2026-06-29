import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "../../constants/socialLinks";

export function FreeConsultation() {
  const benefits = [
    "Project Planning",
    "Cost Estimation",
    "Design Suggestions",
    "Timeline Discussion"
  ];

  return (
    <section className="bg-primary text-white py-12 md:py-8 mx-4 md:mx-8 lg:mx-12 rounded-[32px] overflow-hidden mb-16 shadow-2xl relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 leading-tight">
              <span className="text-white">Get Free Website, Printing &</span>{' '}
              <span className="text-accent">Branding Consultation</span>
            </h2>
            <p className="font-inter text-blue-100 text-lg mb-8 max-w-xl">
              Not sure where to start? Let's discuss your ideas. We provide expert advice to help you make the right decisions for your business growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-inter font-medium text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <button className="flex items-center justify-center gap-3 w-full bg-white text-primary hover:bg-slate-100 px-8 py-5 rounded-xl font-outfit font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
              <CalendarCheck size={24} />
              Book Free Consultation
            </button>
            <a 
              href={getWhatsAppUrl("Hello Launchlite, I want a free consultation.")} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-xl font-outfit font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Chat On WhatsApp
            </a>
          </motion.div>
          
        </div>
        
        
      </div>
    </section>
  );
}
