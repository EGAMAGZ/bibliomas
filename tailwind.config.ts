import daisyui from "daisyui";
import tailwindForms from "tailwindcss/forms";
import tailwindTypography from "tailwindcss/typography";
import plugin from "tailwindcss/plugin";
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    tailwindForms,
    tailwindTypography,
    daisyui,
    plugin(({ addVariant }) => {
      addVariant("pwa", "@media (display-mode: standalone)");
    }),
  ],
  daisyui: {
    themes: [
      "pastel",
    ],
  },
} satisfies Config;