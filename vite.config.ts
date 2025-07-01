import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("@radix-ui") || id.includes("lucide-react")) {
              return "ui-vendor";
            }
            if (
              id.includes("framer-motion") ||
              id.includes("gsap") ||
              id.includes("@react-three") ||
              id.includes("three")
            ) {
              return "animation-vendor";
            }
            // Removed empty particles-vendor chunk
            // Include email-related code in the main vendor chunk
            // to avoid creating a tiny chunk
            // Other vendor libraries
            return "vendor";
          }

          // Feature-based chunks
          if (id.includes("/Components/Sections/")) {
            return "sections";
          }
          if (id.includes("/Components/frameworks/")) {
            return "frameworks";
          }
          if (id.includes("/Components/About/")) {
            return "about";
          }
          if (id.includes("/Components/UI/")) {
            return "ui-components";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Additional optimizations
    minify: true,
    // Enable source maps for debugging in production
    sourcemap: false,
  },
});
