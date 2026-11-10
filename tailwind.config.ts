import type { Config } from "tailwindcss";

const config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        panel: "var(--panel)",
        violet: "var(--accent)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-text)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        xl: "var(--r-xl)",
        lg: "var(--r-lg)",
        md: "var(--r-md)",
        sm: "var(--r-sm)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
