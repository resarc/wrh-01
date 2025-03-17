import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ['15px', '1.4'],
      base: ['20px', '1.4'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'wrh-green': "#008F4F",
        'wrh-blue': "#6F80B1",
      },
      keyframes: {
        loading: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(.5)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
