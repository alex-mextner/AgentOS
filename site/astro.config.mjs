// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// AgentOS marketing site — static output, Vercel-ready.
// Every marketing page is prerendered; there is zero runtime API dependency.
// Live data (engineering-bible docs, task counts, GitHub issues) is read/fetched
// at BUILD TIME in src/lib/*, and degrades gracefully if a source is unavailable.
export default defineConfig({
  site: 'https://agentos-bible.vercel.app',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
