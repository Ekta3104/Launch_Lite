import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg mb-2">Quick Links</h4>
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
            <h4 className="font-outfit font-bold text-lg mb-2">Digital Services</h4>
            {["Website Development", "Mobile Applications", "UI/UX Design", "Digital Marketing", "Web Applications"].map(link => (
              <Link key={link} to="/services" className="font-inter text-blue-100 text-sm hover:text-accent transition-colors w-fit">
                {link}
              </Link>
            ))}
          </div>

          {/* Printing Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-lg mb-2">Printing Services</h4>
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
              <span className="font-inter text-sm text-blue-50">+91 73505 83530</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-accent" size={20} />
              <span className="font-inter text-sm text-blue-50">hello@launchlite.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" size={20} />
              <span className="font-inter text-sm text-blue-50">123 Creative Street, Design City, India</span>
            </div>
          </div>
          <a 
            href="https://wa.me/917350583530" 
            target="_blank" 
            rel="noreferrer"
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
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
