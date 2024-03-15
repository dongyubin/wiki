import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
// import { search as ptSearch } from './pt'

export const shared = defineConfig({
  title: "文武软件百科",
  description: "致力于软件的百科全书",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://wiki.wangdu.site',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  // head: [
  //   ['link', {rel: 'icon', href: 'public/favicon.ico'}]
  // ],
  /* prettier-ignore */
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '文武软件百科 | 致力于软件的百科全书' }],
    ['meta', { property: 'og:site_name', content: '文武软件百科' }],
    // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://wiki.wangdu.site' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongyubin' },
      { icon: 'twitter', link: 'https://twitter.com/wwkjs666'}
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '78WH305X5M',
        apiKey: '66b681ef9658010ccc13d55b1dafb027',
        indexName: '文武软件百科',
        locales: { ...zhSearch}
        // locales: { ...zhSearch, ...ptSearch }
      }
    },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})