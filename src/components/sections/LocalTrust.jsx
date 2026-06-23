import { motion } from "framer-motion";
import { MapPin, MessageCircle, Truck, HeartHandshake } from "lucide-react";

export function LocalTrust() {
  const items = [
    { icon: MapPin, title: "Serving Businesses Across Maharashtra", desc: "Local expertise for local growth." },
    { icon: Truck, title: "Fast Delivery", desc: "Timely completion of digital and print projects." },
    { icon: HeartHandshake, title: "Personalized Support", desc: "Dedicated local point of contact." },
    { icon: MessageCircle, title: "One Roof Solution", desc: "Everything from visiting cards to custom apps." }
  ];

  return (
    <section className="bg-slate-50 py-16 border-b border-borderLight">
      <div className="container-premium">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-50 text-accent rounded-full flex items-center justify-center mb-4">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-outfit font-bold text-heading text-lg mb-2">{item.title}</h4>
              <p className="font-inter text-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
