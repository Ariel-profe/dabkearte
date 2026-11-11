import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
  plugins: [
    // Wide screen with a real pointer: the only place hover effects can open and close.
    plugin(({ addVariant }) => {
      addVariant("can-hover", "@media (min-width: 768px) and (hover: hover)");
    }),
  ],
} satisfies Config;

export default config;
