/**
 * TailwindCSS Configuration
 * Purpose: Custom theme configuration for Cosmobits website
 * Dependencies: tailwindcss
 * Features: Night sky theme (black, dark blue, purple, white), custom fonts (Quicksand), responsive breakpoints
 */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/**/node_modules/**",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        body: ["Quicksand", "sans-serif"],
        heading: ["Quicksand", "sans-serif"],
        sans: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        base: ["1rem", { lineHeight: "1.65", letterSpacing: "0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.005em" }],
        "2xl": ["1.5rem", { lineHeight: "1.4", letterSpacing: "0em" }],
        "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "6xl": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "8xl": ["6rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
      },
      screens: {
        xs: "375px",
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-in-out",
        "scale-hover": "scaleHover 0.3s ease-in-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        scaleHover: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
