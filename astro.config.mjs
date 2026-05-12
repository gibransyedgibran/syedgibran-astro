// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://syedgibran.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
