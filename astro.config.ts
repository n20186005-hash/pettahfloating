import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// එකම canonical URL සැකසුම. Domain එක තීරණය වූ පසු මෙහි පමණක් URL එක දමන්න.
const SITE = 'https://pettahfloating.com';

export default defineConfig({
  site: SITE || undefined,
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
