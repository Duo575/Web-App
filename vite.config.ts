import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // If you need path aliases, use vite's built-in alias option or @rollup/plugin-alias
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
});
