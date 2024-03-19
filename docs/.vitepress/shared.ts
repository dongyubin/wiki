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
    ['script', { src: 'https://font.wangdu.site/script.js', 'data-website-id': 'f1d6d35a-b736-4702-95dd-03bf623debf3' }]
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongyubin' },
      { icon: 'twitter', link: 'https://twitter.com/wwkjs666' }
    ],
    search: {
      provider: 'local'
    }

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '3VYJU9Z80S',
    //     apiKey: '5eb8f34b5a1c5bfae437627bb529d01e',
    //     indexName: 'dev_wiki',
    //     locales: { ...zhSearch}
    //     // locales: { ...zhSearch, ...ptSearch }
    //   }
    // },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})