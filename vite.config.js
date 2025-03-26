
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  server: {
    host: "::",
    port: 8080
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});
