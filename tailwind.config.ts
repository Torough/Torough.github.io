import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.15 0.012 70)",
        surface: "oklch(0.19 0.013 70)",
        sectionAlt: "oklch(0.115 0.01 70)",
        border: "oklch(0.32 0.016 70)",
        borderStrong: "oklch(0.46 0.02 70)",
        accent: "oklch(0.78 0.15 75)",
        accentHover: "oklch(0.84 0.14 78)",
        accentDim: "oklch(0.55 0.13 75)",
        accentSoft: "oklch(0.26 0.06 72)",
        textPrimary: "oklch(0.96 0.008 70)",
        textBody: "oklch(0.80 0.014 70)",
        textMuted: "oklch(0.56 0.014 70)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-fragment-mono)", "monospace"],
      },
      borderRadius: {
        card: "2px",
        badge: "2px",
      },
      fontSize: {
        hero: [
          "clamp(3.25rem, 2.5rem + 3.6vw, 6.75rem)",
          { lineHeight: "0.98", fontWeight: "800", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.75rem, 1.5rem + 1.2vw, 2.75rem)",
          { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.01em" },
        ],
        h3: ["1.375rem", { lineHeight: "1.3", fontWeight: "600" }],
        h4: ["1.0625rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      boxShadow: {
        glow: "0 0 0 1px oklch(0.78 0.15 75 / 0.35), 0 12px 32px -12px oklch(0.78 0.15 75 / 0.25)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(oklch(0.32 0.016 70 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.32 0.016 70 / 0.5) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
