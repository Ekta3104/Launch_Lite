import { cn } from "../../utils/cn";

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-inter font-medium rounded-premium transition-all duration-300 ease-in-out active:scale-95";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-orange-700 shadow-lg hover:shadow-orange-500/30",
    secondary: "bg-primary text-white hover:bg-blue-900 shadow-lg hover:shadow-primary/30",
    outline: "border-2 border-borderLight text-heading hover:border-primary hover:text-primary bg-transparent",
    ghost: "text-body hover:text-primary hover:bg-blue-50/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
