import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import AutoImport from 'unplugin-auto-import/astro'
import Inspect from 'vite-plugin-inspect'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

import metaTags from 'astro-meta-tags'

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkReadingTime]
	},
	vite: {
		plugins: [Inspect(), tailwindcss()]
	},
	i18n: {
		routing: {
			prefixDefaultLocale: true,
			strategy: 'pathname'
		},
		locales: ['en', 'ru', 'es', 'uk', 'de', 'fr', 'pl'],
		defaultLocale: 'en'
	},
	site: 'https://test.com',
	output: 'server',
	prefetch: {
		prefetchAll: true
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'github-dark-dimmed'
			},
			gfm: true
		}),
		sitemap(),
		AutoImport({
			imports: ['vue', 'vue/macros', '@vueuse/core', 'react'],
			vueTemplate: true,
			dirs: ['src/utils/*.ts'],
			dts: './src/auto-imports.d.ts'
		}),
		vue({
			jsx: true,
			devtools: true,
			reactivityTransform: true
		}),
		react(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		}),
		metaTags()
	],
	adapter: cloudflare()
})
