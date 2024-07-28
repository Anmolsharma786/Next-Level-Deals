import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'https://your-server-url',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
