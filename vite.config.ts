import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "index.css",
      },
    },
  },
});
