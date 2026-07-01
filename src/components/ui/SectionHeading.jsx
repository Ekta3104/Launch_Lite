import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function SectionHeading({ badge, title, subtitle, className, centered = true, isPageHeader = false }) {
  const HeadingTag = isPageHeader ? motion.h1 : motion.h2;

  return (
    <div className={cn("flex flex-col gap-3 mb-14", centered && "items-center text-center", className)}>
      {badge && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-outfit font-bold text-[#EA580C] text-sm tracking-widest uppercase mb-1"
        >
          {badge}
        </motion.p>
      )}
      
      <HeadingTag 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-[44px] font-extrabold font-outfit text-[#111827] leading-tight tracking-tight"
      >
        {title}
      </HeadingTag>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-inter text-[#4B5563] text-base md:text-lg leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
