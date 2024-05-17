---
title: 免费白嫖 ChatGPT-4 服务：Coze 扣子 - 字节最强AI Bot
---

# 免费白嫖 ChatGPT-4 服务：Coze 扣子 - 字节最强AI Bot

继 [PandoraNext](https://www.wangdu.site/course/2023.html) 不能使用后，又有广大网友研究出了新的玩法，用上免费 ChatGPT-4 了

通过 Coze（根服务） + Discord（对接服务） + coze-discord-proxy（服务代理）从而实现 API 形式请求GPT4+DALL·E 3。

![Coze](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202402071433884.webp)

## 网址

1. [Discord](https://discord.com/)、[Discord Developer Portal](https://discord.com/developers/applications?new_application=true)

2. [Coze](https://www.coze.com/)：字节跳动出品的海外版本（[Coze官方文档](https://www.coze.com/docs/zh_cn/welcome.html)）

   Coze 目前支持3种语言大模型：GPT-3.5（16K）、GPT-4（8K）、GPT-4 Turbo（128K）

   > Coze is a next-generation AI Bot development platform. Coze enables users with all levels of programming experience to create various chatbots and deploy them across social platforms and messaging apps like Discord, Telegram, LINE & Slack!
   >
   > Coze是一种下一代AI Bot开发平台。 Coze使用户无论编程经验如何，都能创建各种聊天机器人，并在社交平台和消息应用程序（如Discord、Telegram、LINE和Slack）上部署它们！

3. [deanxv/coze-discord-proxy](https://github.com/deanxv/coze-discord-proxy): 代理 Discord-Bot 对话 Coze-Bot，实现API形式请求GPT4对话模型/微调模型

## 教程地址

[通过接口调用Coze托管的discord-bot，实现免费使用GPT4和绘画](https://www.dqzboy.com/16532.html)

文章写的很详细，按照步骤一步一步的做，就能成功。

下面就写几点注意事项

## 注意事项

1. 需要本地 PC 能够科学上网，很重要，要不你 Discord 都登不上去
2. 部署 Coze 代理服务器，最好使用的可以访问外网的服务器；很用国内服务器还得安装代理，困难度又提升了一个档次。（我这里使用的是 [RackNerd](https://www.wangdu.site/fuliyouhui/1266.html) VPS）
3. 需要一个域名以及证书（我使用的是 Cloudflare 域名+ Cloudflare免费证书 15 年，Cloudflare无敌）

## 效果图

![效果图](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202402071357587.webp)