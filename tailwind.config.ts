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
        peach: "var(--color-peach)",
        deepAmber: "var(--color-deepAmber)",
        mandarin: "var(--color-mandarin)",
        sacredGold: "var(--color-sacredGold)",
        warmGilt: "var(--color-warmGilt)",
        softApricot: "var(--color-softApricot)",
        darkBrown: "var(--color-darkBrown)",
        burntOrange: "var(--color-burntOrange)",
        bark: "var(--color-bark)",
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
