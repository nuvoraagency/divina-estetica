import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        divina: {
          cream: "#FAF8F5",
          white: "#FFFDFB",
          nude: "#F3ECE3",
          blush: "#EADCD2",
          dustyPink: "#DFCDC3",
          gold: "#D4AF37",
          softGold: "#C5A880",
          charcoal: "#3C3935",
          dark: "#2C2A29",
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
