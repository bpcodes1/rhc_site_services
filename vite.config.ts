import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/rhc_site_services/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react-simple-maps', 'prop-types'],
  },
})
