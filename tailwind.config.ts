import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F8F9",
        foreground: "#000000",
        primary: "#3b49df",
        secondary: "#64748b",
        title: "#151D48",
        card: "#ffffff",
        highlight: "#e2e8f0",
        dark: {
          background: "#0f172a",
          foreground: "#ffffff",
          primary: "#3b49df",
          title: "#151D48",
          secondary: "#64748b",
          card: "#1e293b",
          highlight: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
