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