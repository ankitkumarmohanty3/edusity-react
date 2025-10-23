import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/<edusity-react>/',
   build: {
    rollupOptions: {
      external: [
        // Replace 'unhandled-module-name' with the actual package name causing the error.
        // You'll need to identify it from the surrounding build logs.
        'unhandled-module-name' 
      ],
    },
  },
})
