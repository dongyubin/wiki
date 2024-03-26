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
    // pt: { label: 'Português', ...pt }
  },

  // buildEnd: rss,
  vite: {
    plugins: [RssPlugin(RSS)]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
})
