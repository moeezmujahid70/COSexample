import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-page": "#F8F9FA",
        "surface-card": "#FFFFFF",
        "surface-border": "#E4E7EB",
        "surface-tint": "#EEF3F8",
        "text-primary": "#111827",
        "text-muted": "#6B7280",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        "accent-subtle": "#EFF6FF",
        "accent-strong": "#1E3A8A",
        "callout-bg": "#F0F4FF",
        "callout-border": "#BFDBFE",
        "guide-bg": "#F7F3EC",
        "guide-border": "#E7D9C2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
