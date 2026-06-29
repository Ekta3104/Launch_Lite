export const socialLinks = {
  whatsapp: "https://wa.me/917887348840",
  instagram: "https://www.instagram.com/launchlite.in/",
  facebook: "https://facebook.com/launchlite",
  linkedin: "https://linkedin.com/company/launchlite",
  twitter: "https://twitter.com/launchlite"
};

export const getWhatsAppUrl = (message) => {
  return `${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;
};
