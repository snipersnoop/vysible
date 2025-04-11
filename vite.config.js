import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          react: ["react", "react-dom", "react-router-dom"], // Ensure react-router-dom is included
          echarts: ["echarts"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
  },
});
