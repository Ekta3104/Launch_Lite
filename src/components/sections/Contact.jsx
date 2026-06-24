import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const WA_INQUIRY = "https://wa.me/917350583530?text=Hello%20Ekta%20Creation%2C%20I%20just%20submitted%20an%20inquiry%20form.%20Please%20connect%20with%20me.";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", business: "", service: "", budget: "", details: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-borderLight bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-inter text-sm text-heading placeholder:text-slate-400";

  return (
    <section id="contact" className="bg-white border-y border-borderLight section-padding relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              badge="Get In Touch"
              title="Let's Discuss Your Project"
              subtitle="Fill out the form and we'll get back to you within a few hours."
              centered={false}
              className="mb-10"
            />

            {/* Contact Details */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: Phone, label: "Call / WhatsApp", value: "+91 73505 83530", href: "tel:+917350583530" },
                { icon: MessageCircle, label: "Email", value: "hello@launchlite.com", href: "mailto:hello@launchlite.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-borderLight hover:border-accent hover:bg-white transition-all group">
                  <div className="w-10 h-10 bg-blue-100 text-secondary rounded-lg flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-body">{label}</p>
                    <p className="font-outfit font-bold text-heading group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-borderLight">
                <div className="w-10 h-10 bg-orange-50 text-accent rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="font-inter text-xs text-body">Address</p>
                  <p className="font-outfit font-bold text-heading text-sm">Ahilyanagar, Maharashtra 414003</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-outfit font-bold text-white mb-4">Business Hours</h4>
              <ul className="flex flex-col gap-2 font-inter text-sm text-blue-100">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday – Friday</span><span className="font-semibold text-white">9:00 AM – 7:00 PM</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span className="font-semibold text-white">10:00 AM – 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-blue-300">Closed</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Form or Success */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-premium shadow-premium border border-borderLight flex flex-col items-center justify-center text-center h-full gap-6"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-3xl text-heading mb-3">Thank You!</h3>
                  <p className="font-inter text-body text-base leading-relaxed">
                    We've received your inquiry and will contact you within a few hours.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                  <a
                    href={WA_INQUIRY}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-outfit font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:-translate-y-1"
                  >
                    <MessageCircle size={20} /> WhatsApp Us
                  </a>
                  <a
                    href="tel:+917350583530"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-outfit font-bold hover:bg-blue-900 transition-all shadow-lg hover:-translate-y-1"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-premium shadow-premium border border-borderLight flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Name *</label>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={inputClass} required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} className={inputClass} required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Email</label>
                    <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Business Name</label>
                    <input type="text" name="business" placeholder="Your Company" value={formData.business} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Service Required *</label>
                    <select name="service" value={formData.service} onChange={handleChange} className={inputClass} required>
                      <option value="" disabled>Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile Application">Mobile Application</option>
                      <option value="Wedding Cards">Wedding Cards</option>
                      <option value="Visiting Cards">Visiting Cards</option>
                      <option value="Brochure Design">Brochure Design</option>
                      <option value="Printing Services">Printing Services</option>
                      <option value="Branding Design">Branding Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-sm font-semibold text-heading">Budget Range *</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass} required>
                      <option value="" disabled>Select budget</option>
                      <option value="Under ₹20,000">Under ₹20,000</option>
                      <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-sm font-semibold text-heading">Project Details *</label>
                  <textarea
                    name="details"
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-blue-900 text-white font-outfit font-bold text-lg transition-all hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
