import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f55c93",
        secondary: "#f7c5cc",
        accent: "#fff3a8",
        bg: "#fffdfb",
        text: "#2b2530",
      },
      fontFamily: {
        heading: ["Abhaya Libre", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(245, 92, 147, 0.08)",
        glow: "0 0 30px rgba(245, 92, 147, 0.35)",
      },
      borderRadius: {
        card: "2rem",
      },
      backdropBlur: {
        xl: "40px",
      },
    },
  },
  plugins: [],
};

export default config;
