import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { socialLinks, getWhatsAppUrl } from "../constants/socialLinks";

const WA_NAV = getWhatsAppUrl("Hello Launchlite, I need a free quote.");

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="bg-[#0B2A5B] text-white text-sm py-2 px-4 hidden md:block">
        <div className="container-premium flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-orange-400 flex-shrink-0" />
              <span className="font-inter text-xs">{siteConfig.contact.addressLocality}, {siteConfig.contact.addressRegion}, {siteConfig.contact.addressCountry}</span>
            </div>
            <div className="w-px h-3.5 bg-slate-600" />
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock size={13} className="text-orange-400 flex-shrink-0" />
              <span className="font-inter text-xs">Mon - Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
            >
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={WA_NAV}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>
            {/* Email */}
<a
  href={`mailto:${siteConfig.contact.email}`}
  aria-label="Email"
  className="w-7 h-7 rounded-full border border-slate-600 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition-colors"
>
  <svg
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
    />
    <path d="M22 8l-10 7L2 8" />
  </svg>
</a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/97 backdrop-blur-md shadow-md py-2.5" : "bg-white py-3.5"
        }`}
      >
        <div className="container-premium flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none flex-shrink-0">
            <span className="font-outfit font-extrabold text-[22px] tracking-tight text-[#0B2A5B]">
              Launch<span className="text-[#EA580C]">Lite</span>
            </span>
            <span className="font-inter text-[9px] font-semibold tracking-[0.12em] text-slate-500 uppercase mt-0.5">
              Digital Agency &amp; Printing Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes("#");
              const isActive = link.href === "/" 
                ? location.pathname === "/" 
                : isHashLink 
                  ? location.pathname === "/" && location.hash === link.href.replace("/", "")
                  : location.pathname.startsWith(link.href.split('#')[0]);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative flex items-center gap-0.5 px-3 py-2 font-inter text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-[#EA580C]"
                      : "text-[#1a2942] hover:text-[#EA580C]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={13} className="mt-0.5 opacity-70" />}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#EA580C] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#EA580C] text-white font-outfit font-bold text-sm px-5 py-2.5 rounded-full hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 flex-shrink-0"
          >
            Get Free Quote
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#0B2A5B] p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center justify-between font-inter text-base font-medium text-[#1a2942] py-3 border-b border-slate-50 hover:text-[#EA580C] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 flex items-center justify-center gap-2 bg-[#EA580C] text-white font-outfit font-bold px-6 py-3.5 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote <ArrowRight size={16} />
                </Link>
                <div className="flex items-center justify-center gap-4 mt-4 text-slate-500 text-sm">
                  <MapPin size={13} className="text-orange-500" />
                  <span className="font-inter text-xs">{siteConfig.contact.addressLocality}, {siteConfig.contact.addressRegion}</span>
                  <span className="text-slate-300">|</span>
                  <Clock size={13} className="text-orange-500" />
                  <span className="font-inter text-xs">Mon–Sat 9AM–7PM</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
