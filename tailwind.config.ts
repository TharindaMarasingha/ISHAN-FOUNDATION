import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        divider: "var(--color-divider)",
        secondary: "var(--color-secondary)",
        primary: "var(--color-primary)",
        heading: "var(--color-heading)",
        softAccent: "var(--color-soft-accent)",
        bodyText: "var(--color-body-text)",
        lotusBloom: "var(--color-lotus-bloom)",
      },
      backgroundImage: {
        'gradient-cta': 'var(--gradient-cta)',
      },
      fontFamily: {
        display: ["var(--font-forum)", "serif"],
        sans: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
