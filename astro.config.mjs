// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    react(),
    sanity({
      projectId: 'py6y7j4v',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2025-01-28',
    }),
  ],

  // Production URL
  site: 'https://artdecopergola.com',

  // i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'az'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Build configuration
  build: {
    inlineStylesheets: 'always',
  },

  // Vite configuration
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});