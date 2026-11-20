import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://kandakatlarithwik.github.io/RithwikPortfolio/
export default defineConfig({
  base: '/RithwikPortfolio/',
  plugins: [react()],
});
