import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { shared } from './shared'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import markdownImagePlugin from './markdownPlugin'

const RSS: RSSOptions = {
  title: "文武软件百科",
  baseUrl: `https://wiki.wangdu.site`,
  copyright: "Copyright (c) 文武软件百科",
  filename: "rss.xml",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
    // root: { label: 'English', ...en },
    // zh: { label: '简体中文', ...zh },
    // pt: { label: 'Português', ...pt }
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  // buildEnd: rss,
  vite: {
    plugins: [RssPlugin(RSS)]
  },

  // themeConfig: {
  //   logo:  'public/logo.png',
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Examples', link: '/markdown-examples' }
  //   ],

  // sidebar: [
  //   {
  //     text: '软件导航',
  //     items: [
  //       { text: 'Markdown Examples', link: '/markdown-examples' },
  //       { text: 'Runtime API Examples', link: '/api-examples' },
  //       { text: '图片压缩', link: 'zh/software/image-compress'}
  //     ]
  //   }
  // ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  //   ]
  // },
  // markdown: {
  //   image: {
  //     // 默认禁用图片懒加载
  //     lazyLoading: true
  //   }
  // }
})
