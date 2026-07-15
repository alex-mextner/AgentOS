// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// AgentOS marketing site — static output, Vercel-ready.
// Every marketing page is prerendered; there is zero runtime API dependency.
// Live data (engineering-bible docs, task counts, GitHub issues) is read/fetched
// at BUILD TIME in src/lib/*, and degrades gracefully if a source is unavailable.
// The Vercel adapter is present ONLY so a handful of routes can opt into
// on-demand rendering (`export const prerender = false`) — currently just the
// waitlist API endpoint. Every page stays prerendered.
export default defineConfig({
  site: 'https://agentos-bible.vercel.app',
  output: 'static',
  adapter: vercel(),
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
