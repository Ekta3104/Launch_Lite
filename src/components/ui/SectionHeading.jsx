import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function SectionHeading({ badge, title, subtitle, className, centered = true }) {
  return (
    <div className={cn("flex flex-col gap-4 mb-16", centered && "items-center text-center", className)}>
      {badge && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-accent font-inter text-sm font-semibold tracking-wide uppercase"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-outfit font-bold text-heading leading-[1.1]"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body font-inter text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
