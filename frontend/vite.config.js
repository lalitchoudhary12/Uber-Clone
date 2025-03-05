import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Set the output directory for your build files
    outDir: 'build', // or use 'dist' if you prefer the default
  },
})
