// import { reactRouter } from "@react-router/dev/vite";
// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter()],
//   resolve: {
//     tsconfigPaths: true,
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    reactRouter(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '~': '/app',
    },
  },
})