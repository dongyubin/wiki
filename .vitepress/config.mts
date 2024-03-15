import { defineConfig } from 'vitepress'
import { zh } from './zh'
import { shared } from './shared'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
    // root: { label: 'English', ...en },
    // zh: { label: '简体中文', ...zh },
    // pt: { label: 'Português', ...pt }
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
