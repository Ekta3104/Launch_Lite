import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please provide some project details';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Website Development',
          message: '',
        });
      }, 1500);
    }
  };

  const handleCTA = () => {
    const nameInput = document.getElementById('form-name');
    if (nameInput) {
      nameInput.focus();
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-glow-pink rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-glow-blue rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Lead Gen CTA Banner (Kept Navy for Stripe-style contrast) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[36px] bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-8 sm:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Animated decorative element */}
          <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-brand-pink/5 rounded-full filter blur-[80px] pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[300px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white leading-tight">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              Whether you need high-end printing, brand identities, or custom software solutions, we have you covered. Let's discuss your goals today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={handleCTA}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-pink to-brand-blue hover:shadow-lg hover:shadow-brand-pink/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-1.5"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/917350583530?text=Hi%20Ekta%20Creation,%20I%20would%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 text-brand-blue" />
              <span>Schedule Consultation</span>
            </a>
          </div>
        </motion.div>

        {/* Split Contact / Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-bold">
                Get In Touch
              </h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight text-brand-navy">
                Contact Information
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Have questions about a custom project, print volume rates, or technical specs? Get in touch with us. Our response team will respond within 24 hours.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              
              {/* Call */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-brand-pink/20 transition-all duration-300 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-brand-pink/10 flex items-center justify-center shrink-0 border border-brand-pink/20">
                  <Phone className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 block">Call Us</span>
                  <a href="tel:+917350583530" className="text-sm font-bold text-brand-navy hover:text-brand-pink transition-colors">
                    +91 73505 83530
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue/20 transition-all duration-300 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 block">Email Us</span>
                  <a href="mailto:info@launchlite.com" className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors">
                    info@launchlite.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-100 transition-all duration-300 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200/60">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 block">Visit Office</span>
                  <span className="text-xs font-bold text-brand-navy leading-relaxed">
                    Shop No. 12, Ground Floor, Sai Complex, Mumbai, India
                  </span>
                </div>
              </div>

              {/* WhatsApp direct chat */}
              <a
                href="https://wa.me/917350583530?text=Hi%20Ekta%20Creation,%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-5 rounded-2xl bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 transition-all duration-300 group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-green-500 block font-bold">Chat On WhatsApp</span>
                  <span className="text-sm font-bold text-brand-navy">
                    Direct Instant Chat
                  </span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Side: Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-outfit text-xl font-bold text-brand-navy">
                    Request Free Consultation
                  </h3>
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Full Name</label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-50 border ${
                        errors.name ? 'border-red-500/60' : 'border-slate-200'
                      } focus:border-brand-pink/80 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500/60' : 'border-slate-200'
                        } focus:border-brand-pink/80 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-bold block">{errors.phone}</span>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className={`w-full bg-slate-50 border ${
                          errors.email ? 'border-red-500/60' : 'border-slate-200'
                        } focus:border-brand-pink/80 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-bold block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Service Required</label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-pink/80 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Printing Services">Printing Services</option>
                      <option value="Branding & Design">Branding & Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Graphic Design">Graphic Design</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">Project Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your requirements (e.g., custom website details, page counts, print quantities)..."
                      className={`w-full bg-slate-50 border ${
                        errors.message ? 'border-red-500/60' : 'border-slate-200'
                      } focus:border-brand-pink/80 focus:bg-white rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-bold block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-pink to-brand-blue flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:-translate-y-0"
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                    ) : (
                      <>
                        <span>Request Free Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/10">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-outfit text-2xl font-bold text-brand-navy">
                      Request Submitted Successfully!
                    </h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out to Launchlite. A consultant from our team will contact you on your email or phone shortly!
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors duration-300 text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
