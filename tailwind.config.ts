import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F5F8F9", // Cor de fundo gelo
          foreground: "#000000",
          primary: "#1e40af", // Azul do botão
          secondary: "#64748b", // Cinza do texto
          card: "#ffffff", // Fundo dos cards
          highlight: "#e2e8f0", // Cor de destaque
        },
        dark: {
          background: "#0f172a", // Azul escuro para o fundo
          foreground: "#ffffff",
          primary: "#1e40af", // Azul do botão
          secondary: "#64748b", // Cinza do texto
          card: "#1e293b", // Fundo dos cards
          highlight: "#334155", // Cor de destaque
        },
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
