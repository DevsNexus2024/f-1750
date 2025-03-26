
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
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
}));
