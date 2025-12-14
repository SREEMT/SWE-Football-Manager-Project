import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })

// Vite configuration with proxy setup for Rails backend
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Optional: set a consistent port (e.g., 3001)
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Rails Backend URL
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: if you don't use /api in your Rails routes
      },
    },
  },
});