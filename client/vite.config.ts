import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '2faa-102-176-97-243.ngrok-free.app' // Replace this with your current ngrok host
    ],
  },
});
