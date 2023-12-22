import tailwindPlugin from "@tailwindcss";
import { defineConfig } from "$fresh/server.ts";
import tailwindConfig from "@/tailwind.config.ts";
import storiesPlugin from "https://deno.land/x/fresh_stories@0.0.4/stories-plugin.ts";

export default defineConfig({
  plugins: [
    tailwindPlugin({
      mode: "production",
      input: "./styles.css",
      verbose: false,
      tailwindConfig,
    }),
    storiesPlugin(),
  ],
});
