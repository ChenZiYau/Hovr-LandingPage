import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hovr: {
          accent: "#6C63FF",
          violet: "#8B5CF6",
          dark1: "#08081A",
          dark2: "#0E0E24",
          dark3: "#151530",
          dark4: "#1C1C3A",
          text1: "#FFFFFF",
          text2: "#B8B8D4",
          text3: "#7878A0",
          success: "#10B981",
          warn: "#F59E0B",
          danger: "#EF4444",
          teal: "#06B6D4",
          orange: "#F97316",
          rose: "#F43F5E",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108,99,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(108,99,255,0.5), 0 0 80px rgba(108,99,255,0.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
