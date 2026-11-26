# Free Software Wiki（文武软件百科）

免费软件、软件教程和 VPS 优惠的中文百科，基于 VitePress 构建。

**在线访问：[wiki.wangdu.site](https://wiki.wangdu.site)**

Free Software Wiki is a Chinese-language encyclopedia of free software, tutorials, and VPS deals.

## 站点导航

| 频道 | 线上地址 |
| --- | --- |
| 首页 | [wiki.wangdu.site](https://wiki.wangdu.site/) |
| 免费软件 | [wiki.wangdu.site/zh/software/search-engines](https://wiki.wangdu.site/zh/software/search-engines) |
| 软件指南 | [wiki.wangdu.site/zh/guide/free-welfare](https://wiki.wangdu.site/zh/guide/free-welfare) |
| VPS 优惠 | [wiki.wangdu.site/zh/vps](https://wiki.wangdu.site/zh/vps/) |
| English | [wiki.wangdu.site/en/guide/money-indiehackers](https://wiki.wangdu.site/en/guide/money-indiehackers) |
| RSS 订阅 | [wiki.wangdu.site/rss.xml](https://wiki.wangdu.site/rss.xml) |

## 内容范围

| 板块 | 目录 | 内容 |
| --- | --- | --- |
| 免费软件 | `docs/zh/software/` | 搜索引擎、影视、小说、动漫、IPTV、Windows/macOS 工具、AI 工具等 |
| 软件指南 | `docs/zh/guide/` | 免费资源、编程、WordPress、VitePress 等教程 |
| VPS 优惠 | `docs/zh/vps/` | 国外/国内 VPS、稳定机场、购买与搭建教程 |

目前有 80+ 篇中文文章，侧边栏统一在 `docs/.vitepress/zh.ts` 维护。

## 技术栈

- VitePress 1.6.4 + Vue 3
- Algolia 搜索
- RSS、sitemap 自动生成
- Vercel 部署

## 本地开发

要求 Node.js 18+，推荐使用 pnpm：

```bash
pnpm install
pnpm dev      # 本地预览，默认 http://localhost:5173
pnpm build    # 构建到 docs/.vitepress/dist
pnpm preview  # 预览构建结果
```

仓库使用 `pnpm-lock.yaml`，请优先使用 pnpm，避免混用 npm 生成额外 lockfile。

## 目录结构

```text
docs/
├── index.md               # 首页
├── zh/                    # 中文内容
│   ├── software/          # 免费软件
│   ├── guide/             # 软件指南
│   └── vps/               # VPS 优惠与教程
├── en/                    # 英文内容
├── public/                # 静态资源
└── .vitepress/            # 站点配置、主题、侧边栏
```

## 新增文章

1. 在对应目录新建 Markdown 文件，文件名使用英文短横线。
2. 添加 frontmatter：

```yaml
---
title: "文章标题"
description: "一句话摘要，用于搜索结果和分享卡片"
category: "分类名" # VPS 文章使用
---
```

3. 正文第一行写 H1，与 title 保持一致。
4. 在 `docs/.vitepress/zh.ts` 的对应 sidebar 中添加链接，否则文章不会出现在导航中。
5. 执行 `pnpm build`，确认构建通过后再提交。

## 写作约定

- title 和 description 一篇文章一个，不堆砌关键词。
- 价格、套餐、优惠码写“以官网结算页为准”，不写无法验证的绝对承诺。
- 图片统一使用 CDN，不把大图提交进仓库。
- 站内链接使用相对路径，跨文章锚点使用 `#标题锚点`。
- 同一篇 VPS 文章同时存在于 BestVPS 库时，以 BestVPS 源稿为准，修改后同步到 `docs/zh/vps/`。

## 部署

推送到 `main` 后由 Vercel 构建，输出目录为 `docs/.vitepress/dist`。`vercel.json` 已配置 cleanUrls，并把 `/rss`、`/feed` 重写到 `/rss.xml`。

## 说明

本站包含推广链接，价格和可用性会随商家调整，购买前以官网页面为准。
