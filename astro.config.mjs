import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const site = process.env.SITE_URL;
const originError = 'Builds require SITE_URL to be a public HTTPS origin without credentials, path, query, or fragment.';

export default defineConfig({
  integrations: [react(), {
    name: 'public-site-origin',
    hooks: {
      'astro:config:setup': ({ command }) => {
        if (command !== 'build') return;
        let url;
        try { url = new URL(site); } catch { throw new Error(originError); }
        if (url.protocol !== 'https:' || url.username || url.password ||
          ![url.origin, `${url.origin}/`].includes(site) ||
          !url.hostname.includes('.') || /^[\d.]+$/.test(url.hostname) || url.hostname.startsWith('[') ||
          /(?:^|\.)(?:localhost|local|internal|test|invalid)\.?$/i.test(url.hostname)) {
          throw new Error(originError);
        }
      },
    },
  }],
  site: site || 'http://localhost:4321',
  i18n: { defaultLocale: 'en', locales: ['en', 'es'], routing: { prefixDefaultLocale: false } },
});
