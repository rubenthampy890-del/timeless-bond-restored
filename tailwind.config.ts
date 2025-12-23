import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom cinematic colors
        ivory: "hsl(var(--ivory))",
        pearl: "hsl(var(--pearl))",
        champagne: "hsl(var(--champagne))",
        charcoal: "hsl(var(--charcoal))",
        "warm-gray": "hsl(var(--warm-gray))",
        "soft-black": "hsl(var(--soft-black))",
        "cinema-black": "hsl(var(--cinema-black))",
      },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        body: ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up-cinema": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-cinema": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in-cinema": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
        "fade-up-cinema": "fade-up-cinema 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-cinema": "fade-in-cinema 1.5s ease-out forwards",
        "scale-in-cinema": "scale-in-cinema 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slide-in-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slide-in-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      letterSpacing: {
        luxury: "0.3em",
        wide: "0.2em",
        cinema: "0.15em",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      transitionTimingFunction: {
        "cinema": "cubic-bezier(0.16, 1, 0.3, 1)",
        "cinema-out": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
