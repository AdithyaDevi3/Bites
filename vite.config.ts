import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { reactRouter } from "@react-router/dev/vite"

export default defineConfig({
  // Serve static assets from the frontend app's public directory
  publicDir: "react/public",
  plugins: [
    tsconfigPaths(),
    // Point the router plugin at the react app directory
    reactRouter({ appDirectory: "react/app" }),
    tailwindcss(),
    react(),
  ],
})