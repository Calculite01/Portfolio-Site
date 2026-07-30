import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0E14",
          surface: "#12161F",
          raised: "#171C27",
        },
        ink: {
          DEFAULT: "#E6EDF3",
          muted: "#8B96A5",
          faint: "#5B6472",
        },
        accent: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
          deep: "#0891B2",
          glow: "#3B82F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0A0E14 85%), repeating-linear-gradient(0deg, rgba(103,232,249,0.05) 0px, rgba(103,232,249,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(103,232,249,0.05) 0px, rgba(103,232,249,0.05) 1px, transparent 1px, transparent 40px)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
