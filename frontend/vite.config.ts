import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // Allow access from outside the container
    port: 5173  // Ensure this port matches the one exposed in Docker
  }
})