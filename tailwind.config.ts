import daisyui from "daisyui";
import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";
import plugin from "@tailwindcss/plugin";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./islands/**/*.{js,ts,jsx,tsx,mdx}",
    "./routes/**/*.{js,ts,jsx,tsx,mdx}",
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
};
