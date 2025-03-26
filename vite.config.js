
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  server: {
    port: 8080
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});
