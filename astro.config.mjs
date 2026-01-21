// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    sanity({
      projectId: 'py6y7j4v',
      dataset: 'production',
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
    inlineStylesheets: 'auto',
  },

  // Vite configuration
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});