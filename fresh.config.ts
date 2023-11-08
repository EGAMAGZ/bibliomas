import tailwindPlugin from "@tailwindcss";
import { defineConfig } from "$fresh/server.ts";
import tailwindConfig from "@/tailwind.config.ts";

export default defineConfig({
  plugins: [
    tailwindPlugin({
        mode: "production",
        input: "./styles.css",
        verbose: false,
        tailwindConfig
    }),
  ],
});
