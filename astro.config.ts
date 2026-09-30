import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Single canonical site URL. Only set the URL here once the domain is decided.
const SITE = 'https://pettahfloating.com';

export default defineConfig({
  site: SITE || undefined,
  integrations: SITE
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'en',
            locales: { en: 'en', si: 'si-LK', ta: 'ta-LK', zh: 'zh-Hans' },
          },
        }),
      ]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
