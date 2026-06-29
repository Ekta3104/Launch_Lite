import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { socialLinks } from "../constants/socialLinks";

export function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-primary text-white">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Introduction */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <span className="font-outfit font-bold text-3xl tracking-tight text-white">
                LAUNCH <span className="text-accent">LITE</span>
              </span>
            </Link>
            <p className="font-inter text-blue-100 text-sm leading-relaxed pr-8">
              Transform Your Business With Premium Websites, Branding & Printing Solutions. We help businesses grow with professional solutions that create lasting impact.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg mb-2 text-orange-500">Quick Links</h4>
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Our Portfolio", href: "/portfolio" },
              { name: "Pricing Plans", href: "/pricing" },
              { name: "Contact Us", href: "/contact" }
            ].map(link => (
              <Link key={link.name} to={link.href} className="font-inter text-blue-100 text-sm hover:text-accent transition-colors w-fit">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Digital Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg mb-2 text-orange-500">Digital Services</h4>
            {["Website Development", "Mobile Applications", "UI/UX Design", "Digital Marketing", "Web Applications"].map(link => (
              <Link key={link} to="/services" className="font-inter text-blue-100 text-sm hover:text-accent transition-colors w-fit">
                {link}
              </Link>
            ))}
          </div>

          {/* Printing Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg mb-2 text-orange-500">Printing Services</h4>
            {["Wedding Cards", "Visiting Cards", "Brochures", "Posters", "Flex Printing"].map(link => (
              <Link key={link} to="/services" className="font-inter text-blue-100 text-sm hover:text-accent transition-colors w-fit">
                {link}
              </Link>
            ))}
          </div>

        </div>

        {/* Contact Info & WhatsApp Bar */}
        <div className="py-8 border-y border-white/10 mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <Phone className="text-accent" size={20} />
              <span className="font-inter text-sm text-blue-50">{siteConfig.contact.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-accent" size={20} />
              <span className="font-inter text-sm text-blue-50">{siteConfig.contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" size={20} />
              <span className="font-inter text-sm text-blue-50">{siteConfig.contact.address}</span>
            </div>
          </div>
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-inter text-sm font-semibold transition-all shadow-lg hover:shadow-[#25D366]/30"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-blue-200 text-sm">
            © {new Date().getFullYear()} Launchlite. All rights reserved.
          </p>
          <div className="flex gap-4 text-blue-200 text-sm font-inter">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
