import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
// import { search as ptSearch } from './pt'

export const shared = defineConfig({
  title: "Free Software Wiki",
  description: "免费软件的百科全书",
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  sitemap: {
    hostname: 'https://wiki.wangdu.site',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'keywords', content: 'Free software,Free Software Wiki,Free Software tutorial,Free AI Software,' }],
    ['meta', { name: "description", content: "Free Software Wiki，免费软件的百科全书" }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Free Software Wiki | 免费软件的百科全书' }],
    ['meta', { property: 'og:site_name', content: 'Free Software Wiki' }],
    ['meta', { property: 'og:image', content: 'https://wiki.wangdu.site/og.png' }],
    ['meta', { name: "og:description", content: "Free Software Wiki，免费软件的百科全书" }],
    ['meta', { property: 'og:url', content: 'https://wiki.wangdu.site' }],
    ['meta', { name: 'google-site-verification', content: 'KBPn5wrmRqhyywKks4B7wK6kIXpOyxcFpm1FCx4XdR8' }],
    ['script', { src: 'https://font.wangdu.site/script.js', 'data-website-id': 'f1d6d35a-b736-4702-95dd-03bf623debf3' }],
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:creator', content: '@wwkjs666' }],
    ['meta', { property: 'twitter:title', content: 'Free Software Wiki | 免费软件的百科全书' }],
    ['meta', { property: 'twitter:site', content: 'Free Software Wiki' }],
    ['meta', { property: 'twitter:image', content: 'https://wiki.wangdu.site/og.png' }],
    ['meta', { property: 'twitter:description', content: '免费软件的百科全书' }]
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongyubin' },
      { icon: 'twitter', link: 'https://twitter.com/wwkjs666' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'I6ACIL0K09',
        apiKey: '7873521a47b0fffb076ec2f7b978efc2',
        indexName: 'wangdu',
        locales: { ...zhSearch }
        // locales: { ...zhSearch, ...ptSearch }
      }
    },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})