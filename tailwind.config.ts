import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        sectionAlt: "#F7F8FA",
        surface: "#FFFFFF",
        navy: "#0B1733",
        accent: "#1A50E0",
        accentHover: "#1340B8",
        accentLight: "#EEF3FE",
        border: "#DDE1EA",
        textPrimary: "#0B1733",
        textBody: "#2D3748",
        textMuted: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "8px",
        badge: "4px",
      },
      fontSize: {
        "hero": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "h2": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "h3": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "h4": ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "small": ["13px", { lineHeight: "1.5" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        cardHover: "0 8px 24px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
