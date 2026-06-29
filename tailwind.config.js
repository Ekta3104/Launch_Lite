/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2A5B", // Navy
        accent: "#EA580C", // Orange
        secondary: "#2563EB", // Blue
        heading: "#111827", // Dark
        body: "#64748B", // Slate
        background: "#FAFBFC", // Light BG
        borderLight: "#E2E8F0",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(11, 42, 91, 0.08)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      },
      borderRadius: {
        premium: "20px",
      }
    },
  },
  plugins: [
    typography,
  ],
}
