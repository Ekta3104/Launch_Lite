import { useState } from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../../constants/socialLinks";

const services = ["Website Development", "Mobile Application", "Printing Services", "Branding Design", "Wedding Cards", "Visiting Cards"];

export function QuickInquiryBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    const msg = `Hello Launchlite! My name is ${name}. Phone: ${phone}. I'm interested in: ${service || "your services"}. Please contact me.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-inter text-sm text-heading placeholder:text-slate-400";

  return (
    <div className="relative py-10 z-40 px-6 bg-slate-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-premium border border-borderLight p-6"
        >
          <p className="font-outfit font-bold text-heading text-sm text-center mb-4">⚡ Get Your Free Quote Instantly</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${inputClass} md:flex-1`}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${inputClass} md:flex-1`}
              required
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${inputClass} md:flex-1`}
            >
              <option value="">Service Interested In</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <button
              type="submit"
              className="w-full md:w-auto whitespace-nowrap bg-accent text-white font-outfit font-bold px-8 py-3 rounded-xl hover:bg-orange-700 transition-all shadow-md hover:-translate-y-0.5"
            >
              Get Free Quote
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
