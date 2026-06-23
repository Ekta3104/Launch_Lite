import { Phone, MessageCircle, FileText } from "lucide-react";

export function MobileStickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-borderLight shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[60] lg:hidden flex pb-safe">
      <a 
        href="tel:+917350583530" 
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-primary border-r border-borderLight hover:bg-slate-50 transition-colors"
      >
        <Phone size={20} />
        <span className="font-inter font-semibold text-[10px] uppercase tracking-wider">Call Now</span>
      </a>
      
      <a 
        href="https://wa.me/917350583530" 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
      >
        <MessageCircle size={20} />
        <span className="font-inter font-semibold text-[10px] uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <a 
        href="#contact" 
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-accent hover:bg-orange-50 transition-colors"
      >
        <FileText size={20} />
        <span className="font-inter font-semibold text-[10px] uppercase tracking-wider">Get Quote</span>
      </a>
    </div>
  );
}
