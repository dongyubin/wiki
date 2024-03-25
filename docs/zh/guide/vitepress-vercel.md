---
title: VitePress 部署踩坑
---

## 部署Vercel单独链接访问空白

1. 在项目根目录创建 vercel.json 文件
2. 输入以下内容
    ```json
    {
      "cleanUrls": true,
      "headers": [
        {
          "source": "/assets/(.*)",
          "headers": [
            {
              "key": "Cache-Control",
              "value": "max-age=31536000, immutable"
            }
          ]
        }
      ]
    }
    ```
3. 保存提交即可

参考官方教程：[生成简洁的 URL](https://vitepress.dev/zh/guide/routing#generating-clean-url)、[HTTP 缓存标头](https://vitepress.dev/zh/guide/deploy#http-cache-headers)

## 如何使用 Algolia DocSearch 搜索

### 申请条件

1. 开源的存储仓库
2. 可以访问的域名

### 申请步骤

1. 打开 [DocSearch](https://docsearch.algolia.com/apply/) 申请网址，填入信息，等待审核通过即可，**邮箱一定要正确**（官方提醒：整个过程（从申请到部署）可能需要**长达两周的时间**，多次申请或打开问题**只会减慢过程**，请耐心等待）

   ![DocSearch申请页面](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201038984.webp)

2. 通过后，会告诉你新的 `appId、apiKey、indexName`，在你的配置文件修改原来的信息即可（新增：[官方教程](https://vitepress.dev/zh/reference/default-theme-search#algolia-search)）

   ![DocSeach邮件内容](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201042259.webp)

3. 提交部署即可

## 如何调试 Algolia DocSearch 爬虫

1. 打开 [DocSearch 爬虫管理页面](https://crawler.algolia.com/)（[官网教程](https://www.algolia.com/doc/tools/crawler/getting-started/crawler-configuration/in-depth/crawler-admin/)），选择项目记录

   ![DocSearch爬虫管理页面](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201047665.webp)

2. 点击左侧栏：Editor，修改左侧代码（[VitePress爬虫配置](https://vitepress.dev/zh/reference/default-theme-search#crawler-config)），可以使用下面我的代码，记得`将其中的信息修改为自己真实信息`；修改完可以在右侧输入`自己的网址`，点击 `Run Test` 看看是否能否抓取成功。

   ![Editor](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201049552.webp)

   ```js
   new Crawler({
     rateLimit: 8,
     maxDepth: 10,
     maxUrls: 5000,
     startUrls: ["https://自己的域名/"],
     renderJavaScript: false,
     sitemaps: [],
     ignoreCanonicalTo: false,
     discoveryPatterns: ["https://自己的域名/**"],
     schedule: "at 20:58 on Tuesday",
     actions: [
       {
         indexName: "自己的indexName",
         pathsToMatch: ["https://自己的域名/**"],
         recordExtractor: ({ helpers }) => {
           return helpers.docsearch({
             recordProps: {
               lvl1: [
                 "header h1",
                 "article h1",
                 "main h1",
                 "h1",
                 "head > title",
                 ".content h1",
               ],
               content: [
                 "article p, article li",
                 "main p, main li",
                 "p, li",
                 ".content p, .content li",
               ],
               lvl0: {
                 selectors: "",
                 defaultValue: "Documentation",
               },
               lvl2: ["article h2", "main h2", "h2", ".content h2"],
               lvl3: ["article h3", "main h3", "h3", ".content h3"],
               lvl4: ["article h4", "main h4", "h4", ".content h4"],
               lvl5: ["article h5", "main h5", "h5", ".content h5"],
               lvl6: ["article h6", "main h6", "h6", ".content h6"],
             },
             aggregateContent: true,
             recordVersion: "v3",
           });
         },
       },
     ],
     safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },
     initialIndexSettings: {
       wangdu: {
         attributesForFaceting: ["type", "lang"],
         attributesToRetrieve: [
           "hierarchy",
           "content",
           "anchor",
           "url",
           "url_without_anchor",
           "type",
         ],
         attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
         attributesToSnippet: ["content:10"],
         camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
         searchableAttributes: [
           "unordered(hierarchy.lvl0)",
           "unordered(hierarchy.lvl1)",
           "unordered(hierarchy.lvl2)",
           "unordered(hierarchy.lvl3)",
           "unordered(hierarchy.lvl4)",
           "unordered(hierarchy.lvl5)",
           "unordered(hierarchy.lvl6)",
           "content",
           "unordered(hierarchy_radio_camel.lvl0)",
           "unordered(hierarchy_radio.lvl0)",
           "unordered(hierarchy_radio_camel.lvl1)",
           "unordered(hierarchy_radio.lvl1)",
           "unordered(hierarchy_radio_camel.lvl2)",
           "unordered(hierarchy_radio.lvl2)",
           "unordered(hierarchy_radio_camel.lvl3)",
           "unordered(hierarchy_radio.lvl3)",
           "unordered(hierarchy_radio_camel.lvl4)",
           "unordered(hierarchy_radio.lvl4)",
           "unordered(hierarchy_radio_camel.lvl5)",
           "unordered(hierarchy_radio.lvl5)",
           "unordered(hierarchy_radio_camel.lvl6)",
           "unordered(hierarchy_radio.lvl6)",
           "unordered(hierarchy_camel.lvl0)",
           "unordered(hierarchy.lvl0)",
           "unordered(hierarchy_camel.lvl1)",
           "unordered(hierarchy.lvl1)",
           "unordered(hierarchy_camel.lvl2)",
           "unordered(hierarchy.lvl2)",
           "unordered(hierarchy_camel.lvl3)",
           "unordered(hierarchy.lvl3)",
           "unordered(hierarchy_camel.lvl4)",
           "unordered(hierarchy.lvl4)",
           "unordered(hierarchy_camel.lvl5)",
           "unordered(hierarchy.lvl5)",
           "unordered(hierarchy_camel.lvl6)",
           "unordered(hierarchy.lvl6)",
           "content",
         ],
         distinct: true,
         attributeForDistinct: "url",
         customRanking: [
           "desc(weight.pageRank)",
           "desc(weight.level)",
           "asc(weight.position)",
         ],
         ranking: [
           "words",
           "filters",
           "typo",
           "attribute",
           "proximity",
           "exact",
           "custom",
         ],
         highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
         highlightPostTag: "</span>",
         minWordSizefor1Typo: 3,
         minWordSizefor2Typos: 7,
         allowTyposOnNumericTokens: false,
         minProximity: 1,
         ignorePlurals: true,
         advancedSyntax: true,
         attributeCriteriaComputedByMinProximity: true,
         removeWordsIfNoResults: "allOptional",
       },
     },
     appId: "自己的appId",
     apiKey: "自己的apiKey",
   });
   ```

3. 配置成功后，点击左侧栏：Overview，点击 `Restart crawling` 按钮即可重新抓取你网站的页面信息了。

   ![Overview](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201054776.webp)

## VitePress 图片放大

[图片放大教程](https://bddxg.top/article/note/vitepress%E4%BC%98%E5%8C%96/%E7%82%B9%E5%87%BB%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7.html)

## VitePress image提示信息

::: code-group

```ts [markdownPlugin.ts]
// docs/.vitepress/markdownPlugin.ts
import MarkdownIt from "markdown-it";

const markdownImagePlugin: MarkdownIt.PluginSimple = (md) => {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    const alt = token.content;
    let html = `<img src="${src}" alt="${alt}" title="${alt}">`
    if (alt) {
      html = `<figure class="ss-img-wrapper"><img src="${src}" alt="${alt}" title="${alt}"><figcaption>${alt}</figcaption></figure>`
    }
    return html;
  };
};

export default markdownImagePlugin;
```

```ts [config.mts]
// docs/.vitepress/config.mts
import markdownImagePlugin from './markdownPlugin' // [!code ++]
export default defineConfig({
  markdown: { // [!code ++]
    config: (md) => { // [!code ++]
      md.use(markdownImagePlugin);// [!code ++]
    },// [!code ++]
  }, // [!code ++]
})
```

:::