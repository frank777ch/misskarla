// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: dominio final (por ahora Cloudflare Pages).
  site: 'https://misskarla.pages.dev',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
