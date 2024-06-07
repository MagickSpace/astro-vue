import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import AutoImport from 'unplugin-auto-import/astro';
import Inspect from 'vite-plugin-inspect';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [Inspect(), tailwindcss()]
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), AutoImport({
    imports: ['vue', 'vue/macros', '@vueuse/core', 'react'],
    vueTemplate: true,
    dirs: ['src/utils/*.ts'],
    dts: './src/auto-imports.d.ts'
  }), vue({
    jsx: true,
    devtools: true,
    reactivityTransform: true
  }), react(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })]
});