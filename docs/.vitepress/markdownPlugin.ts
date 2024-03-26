import MarkdownIt from "markdown-it";
/**
 * 参考文档
 * [markdown-it 14.1.0 API documentation](https://markdown-it.github.io/markdown-it/)
 * [luoleiorg/docs/.vitepress/markdownPlugin.ts](https://github.com/foru17/luoleiorg/blob/main/docs/.vitepress/markdownPlugin.ts)
 * [修改 Markdown 图像输出](https://www.hendricks.rocks/articles/modify-markdown-image-output/)
 * @param md 
 */
const markdownImagePlugin: MarkdownIt.PluginSimple = (md) => {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const src = token.attrGet("src");
    const alt = token.content;
    let html = `<img src="${src}" alt="${alt}" title="${alt}">`
    if (alt) {
      html = `<img src="${src}" alt="${alt}" title="${alt}"><span>${alt}</span>`
    }
    return html;
  };
};

export default markdownImagePlugin;