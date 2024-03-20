// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  // description: '由 Vite 和 Vue 驱动的静态站点生成器',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/software/': { base: '/zh/software/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/dongyubin/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()}`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '🛠️ 软件',
      link: '/zh/software/search-engines',
      activeMatch: '/zh/software/'
    },
    {
      text: '📚 指南',
      link: '/zh/guide/free-welfare',
      activeMatch: '/zh/guide/'
    },
    {
      // text: pkg.version,
      items: [
        {
          text: '博客',
          link: 'https://www.wangdu.site'
        },
        {
          text: 'MD翻译',
          link: 'https://mt.wwkejishe.top'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '白嫖',
      collapsed: false,
      items: [
        { text: '白嫖京豆/小火箭账号', link: 'free-welfare' },
        { text: '白嫖稿定设计', link: 'free-gdsj' },

        // { text: '快速开始', link: 'getting-started' },
        // { text: '路由', link: 'routing' },
        // { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '编程',
      collapsed: true,
      items: [
        { text: 'VitePress 踩坑', link: 'vitepress-vercel' },
        // { text: '资源处理', link: 'asset-handling' },
        // { text: 'frontmatter', link: 'frontmatter' },
        // { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        // { text: '国际化', link: 'i18n' }
      ]
    },
    // {
    //   text: '自定义',
    //   collapsed: false,
    //   items: [
    //     { text: '自定义主题', link: 'custom-theme' },
    //     { text: '扩展默认主题', link: 'extending-default-theme' },
    //     { text: '构建时数据加载', link: 'data-loading' },
    //     { text: 'SSR 兼容性', link: 'ssr-compat' },
    //     { text: '连接 CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: '实验性功能',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA 模式', link: 'mpa-mode' },
    //     { text: 'sitemap 生成', link: 'sitemap-generation' }
    //   ]
    // },
    { text: '软件', base: '/zh/software/', link: 'search-engines' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '软件',
      collapsed: false,
      items: [
        { text: '搜索引擎', link: 'search-engines' },
        { text: '在线影视', link: 'online-movie' },

        // { text: 'frontmatter 配置', link: 'frontmatter-config' },
        // { text: '运行时 API', link: 'runtime-api' },
        // { text: 'CLI', link: 'cli' },
        // {
        // text: '默认主题',
        // base: '/zh/reference/default-theme-',
        // items: [
        //   { text: '概览', link: 'config' },
        //   { text: '导航栏', link: 'nav' },
        //   { text: '侧边栏', link: 'sidebar' },
        //   { text: '主页', link: 'home-page' },
        //   { text: '页脚', link: 'footer' },
        //   { text: '布局', link: 'layout' },
        //   { text: '徽章', link: 'badge' },
        //   { text: '团队页', link: 'team-page' },
        //   { text: '上下页链接', link: 'prev-next-links' },
        //   { text: '编辑链接', link: 'edit-link' },
        //   { text: '最后更新时间戳', link: 'last-updated' },
        //   { text: '搜索', link: 'search' },
        //   { text: 'Carbon Ads', link: 'carbon-ads' }
        // ]
        // }
      ]
    },
    {
      text: 'Windows',
      collapsed: true,
      items: [
        { text: 'PE系统', link: 'windows-pe-system' },
        { text: '激活工具', link: 'windows-active-software' },
        { text: '必备工具', link: 'windows-essential-software' },
        { text: '桌面整理', link: 'windows-desktop-organization' }
      ]
    },
    {
      text: 'MacOS',
      collapsed: true,
      items: [
        { text: 'Mac软件下载网站', link: 'mac-software-download' },
      ]
    },
    {
      text: '图片',
      collapsed: true,
      items: [
        { text: '免费logo设计网站', link: 'image-logo' },
        { text: 'emoji网站合集', link: 'image-emoji' },
        { text: '图片免费无版权', link: 'image-free' },
        { text: '图片压缩', link: 'image-compress' },
        { text: '图片消除背景', link: 'image-remove-background' },
      ]
    },
    {
      text: '办公',
      collapsed: true,
      items: [
        { text: '压缩软件', link: 'work-compression-software' },
        { text: '剪贴板', link: 'work-clipboard' }
      ]
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}