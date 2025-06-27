/**
 * TailwindCSS Configuration
 * Purpose: Custom theme configuration for portfolio website
 * Dependencies: tailwindcss
 * Features: Night sky theme (black, dark blue, purple, white), custom fonts (Inter, Orbitron), responsive breakpoints
 */
/**
 * TailwindCSS Configuration
 * Purpose: Custom theme configuration for portfolio website
 * Dependencies: tailwindcss
 * Features: Night sky theme (black, dark blue, purple, white), custom fonts (Inter, Orbitron), responsive breakpoints
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F", // Dark blue - main brand color
        secondary: "#7F00FF", // Purple - innovation signal
        accent: "#FFFFFF", // White - text, icons, contrast
        background: "#000000", // Black - page background
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Orbitron", "monospace"],
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-in-out",
        "scale-hover": "scaleHover 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
