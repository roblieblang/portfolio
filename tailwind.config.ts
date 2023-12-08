import type { Config } from "tailwindcss";

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
        "background-color": "var(--background-color)",
        "foreground-color": "var(--foreground-color)",
        "text-color": "var(--text-color)",
        "accent-color": "var(--accent-color)",
      },
      scale: {
        "200": "2",
        "300": "3",
      },
    },
  },
  plugins: [],
};
export default config;
