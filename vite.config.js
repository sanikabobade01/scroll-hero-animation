import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" must match the GitHub repository name so assets load on GitHub Pages:
// https://sanikabobade01.github.io/scroll-hero-animation/
export default defineConfig({
  plugins: [react()],
  base: "/scroll-hero-animation/",
});
