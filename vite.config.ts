import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { reactRouter } from "@react-router/dev/vite"

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    reactRouter(), // <-- NO args
    tailwindcss(),
    react(),
  ],
})