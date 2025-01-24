import {
  Libre_Barcode_EAN13_Text,
  Libre_Baskerville,
  Poppins,
} from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        timerbg: "#aec3ff",
        boxTimer: "#223862",
        numberTimer: "#ffff8f",
        colorText: "#98D8EF",
      },
      fontFamily: {
        Libre_Baskerville: ["Libre_Baskerville", "sans-serif"],
        Poppins: ["Poppins", "seif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
