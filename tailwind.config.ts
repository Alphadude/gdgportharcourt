import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Brand colours (Google palette + DevFest dark background) ───────────
      colors: {
        "google-blue":   "#4285F4",
        "google-red":    "#EA4335",
        "google-yellow": "#FBBC04",
        "google-green":  "#34A853",
        "devfest-dark":  "#0A0A0A",
      },

      // ── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        akira: ["var(--font-akira)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        google: ["'Google Sans'", "system-ui", "sans-serif"],
        "google-mono": ["'Google Sans Mono'", "monospace"],
      },

      // ── Custom animations ───────────────────────────────────────────────────
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-up": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "0.3" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in-up":  "fade-in-up 0.6s ease forwards",
        "fade-in":     "fade-in 0.2s ease-out forwards",
        "scale-up":    "scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow":  "pulse-slow 4s ease-in-out infinite",
        ticker:        "ticker 30s linear infinite",
        marquee:       "marquee 45s linear infinite",
      },

      // ── Background gradient utility ─────────────────────────────────────────
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
