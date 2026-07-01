import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "../ui/SectionHeading";
import { Check, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "../../constants/socialLinks";

export function Pricing() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const trustIndicators = [
    { icon: "⭐", text: "4.9/5 Client Satisfaction" },
    { icon: "✅", text: "Fast Delivery" },
    { icon: "✅", text: "Free Consultation" },
    { icon: "✅", text: "Dedicated Support" },
    { icon: "✅", text: "Transparent Pricing" },
  ];

  const plans = [
    {
      name: "Starter",
      desc: "For new businesses establishing their first digital presence.",
      price: "₹2,999",
      buttonText: "Get Started",
      isPopular: false,
      features: [
        { text: "5-Page SEO-Optimized Website", icon: "🌐" },
        { text: "Professional Brand Identity Kit", icon: "🎨" },
        { text: "500 Premium Business Cards", icon: "📇" },
        { text: "Basic SEO Setup & Analytics", icon: "📊" },
        { text: "2 Months Email Support", icon: "📧" },
      ],
    },
    {
      name: "Professional",
      desc: "Ideal for growing businesses ready to scale fast.",
      price: "₹4,999",
      buttonText: "Book Free Consultation",
      isPopular: true,
      features: [
        { text: "Complete Custom Website (Up to 12 Pages)", icon: "🌐" },
        { text: "Full Brand Identity & Collateral", icon: "🎨" },
        { text: "Advanced SEO & Lead Optimization", icon: "🚀" },
        { text: "Digital Marketing Strategy Included", icon: "📢" },
        { text: "Premium Printing Package (1000+ Items)", icon: "🖨️" },
        { text: "6 Months Dedicated Support", icon: "🛡️" },
      ],
    },
    {
      name: "Enterprise",
      desc: "For large teams needing comprehensive solutions.",
      price: "Custom",
      buttonText: "Request Custom Quote",
      isPopular: false,
      features: [
        { text: "Custom Web & Mobile App Development", icon: "💻" },
        { text: "Complete Branding & Marketing Suite", icon: "🎯" },
        { text: "Advanced E-Commerce Integration", icon: "🛒" },
        { text: "High-Volume Custom Printing", icon: "🖨️" },
        { text: "Unlimited Revisions & Support", icon: "♾️" },
        { text: "Dedicated Account Manager", icon: "👤" },
        { text: "24/7 Priority Support & Maintenance", icon: "🌟" },
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Website projects typically take 2-4 weeks depending on complexity. Printing services deliver within 5-7 business days. Mobile apps take 6-12 weeks. We'll provide a detailed timeline before starting.",
    },
    {
      question: "Do you provide hosting?",
      answer: "Yes! We recommend premium hosting providers and can set up your website on our preferred partners. Hosting fees are separate but affordable (starting from ₹300/month).",
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! Many clients start with Starter and upgrade to Professional as their business grows. We'll credit your initial investment toward the upgrade.",
    },
    {
      question: "Is SEO included?",
      answer: "Yes! All packages include SEO optimization. Professional and Enterprise plans include advanced SEO strategies, keyword research, and ongoing optimization.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! Every plan includes support. Starter includes 2 months, Professional includes 6 months, and Enterprise includes 24/7 ongoing support with a dedicated manager.",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-premium">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionHeading 
            badge="Simple & Transparent Pricing"
            title="Choose the Perfect Package"
            subtitle="Choose the perfect package to grow your business with websites, apps, digital marketing, branding, and printing solutions."
            centered={true}
            isPageHeader={true}
          />
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {trustIndicators.map((indicator, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-orange-50 to-slate-50 border border-orange-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">{indicator.icon}</div>
              <p className="font-inter text-sm font-medium text-heading">{indicator.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "bg-primary text-white border-2 border-accent shadow-2xl lg:scale-105 z-10"
                  : "bg-white text-heading border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:border-orange-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full text-sm font-outfit font-bold tracking-wide shadow-lg"
                >
                  🔥 Most Popular
                </motion.div>
              )}

              {/* Plan Name & Description */}
              <div className={`mb-6 ${plan.isPopular ? "pt-4" : ""}`}>
                <h3 className={`font-outfit text-3xl font-bold mb-3 ${plan.isPopular ? "text-white" : "text-heading"}`}>
                  {plan.name}
                </h3>
                <p className={`font-inter text-sm leading-relaxed ${
                  plan.isPopular ? "text-blue-100" : "text-slate-600"
                }`}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-opacity-20" style={{ borderColor: plan.isPopular ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)" }}>
                <div className="flex items-baseline gap-2">
                  <span className="font-outfit text-5xl font-extrabold">{plan.price}</span>
                  <span className={`font-inter text-sm ${plan.isPopular ? "text-blue-200" : "text-slate-500"}`}>
                    Based on needs
                  </span>
                </div>
                <p className={`font-inter text-xs mt-2 ${plan.isPopular ? "text-blue-100" : "text-slate-500"}`}>
                  ✓ No hidden fees • ✓ Flexible terms
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.isPopular ? "text-orange-300" : "text-orange-500"
                    }`} />
                    <span className={`font-inter text-sm font-medium leading-snug ${
                      plan.isPopular ? "text-blue-50" : "text-slate-700"
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to={plan.isPopular ? "/contact" : "/contact"}
                className={`w-full inline-flex items-center justify-center py-4 px-6 rounded-xl font-outfit font-bold text-lg transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white text-primary hover:bg-orange-50 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    : "bg-gradient-to-r from-primary to-blue-900 text-white hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary via-blue-800 to-primary text-white rounded-3xl p-12 mb-20 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-outfit text-4xl font-bold mb-6 leading-tight text-white">
  Looking for a{" "}
  <span className="text-orange-500">Custom Solution?</span>
</h3>
              <p className="font-inter text-lg text-blue-100 leading-relaxed mb-8">
                We create tailored websites, mobile apps, marketing campaigns, branding, and printing packages based on your unique business goals. Let's discuss what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-primary hover:bg-orange-50 px-8 py-4 rounded-xl font-outfit font-bold transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center">
                  Contact Us
                </Link>
                <a 
                  href={getWhatsAppUrl("Hello Launchlite, I am looking for a custom solution.")} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-outfit font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">💡</div>
                <p className="font-inter text-blue-100">
                  <span className="font-bold">50+</span> businesses have custom solutions built with us
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div>
          <h3 className="font-outfit text-4xl font-bold text-center text-heading mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-center font-inter text-slate-600 mb-12 max-w-2xl mx-auto">
            Got questions? We've answered the most common ones. Can't find what you're looking for?{" "}
            <Link to="/contact" className="text-primary font-semibold hover:text-orange-500 transition-colors">
              Contact us
            </Link>
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-all"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <h4 className="font-outfit font-bold text-heading text-lg pr-4">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      activeFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeFAQ === idx ? "auto" : 0,
                    opacity: activeFAQ === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden transition-all duration-200 ${activeFAQ === idx ? "border-t border-slate-200" : ""}`}
                >
                  <p className="p-6 font-inter text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
