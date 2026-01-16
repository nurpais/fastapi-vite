import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    cors: true,
  },
  build: {
    manifest: true,
    outDir: "../backend/static/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/main.ts",
        admin: "./src/admin.ts",
      },
    },
  },
});
