// eslint-disable-next-line @typescript-eslint/no-require-imports
const flowbite = require("flowbite-react/tailwind");

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "var(--font-outfit)",
      },
      colors: {
        "slate-primary": "#0f172a",
        "slate-secondary": "#64748B",
        "slate-tertiary": "#94a3b8",
        "slate-bg-primary": "#e2e8f0",
        "slate-bg-secondary": "#f1f5f9",
        "slate-bg-tertiary": "#f8fafc",
        "gray-border-primary": "#eaecf0",
        "app-bg-primary": "#ede9fe",
        "app-bg-secondary": "#F5F3FF",
        "app": "#7c3aed",
        "app-dark": "#2e1065",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
