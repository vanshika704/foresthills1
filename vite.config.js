// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),
  
  ],
  resolve: {
    alias: {
      'alice-carousel': 'react-alice-carousel/lib/alice-carousel.js', // Corrected alias path
    },
  },
});
