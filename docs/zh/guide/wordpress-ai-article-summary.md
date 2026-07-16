---
title: AI Article Summary：让你的WordPress主题拥有AI摘要
---

# AI Article Summary：让你的WordPress主题拥有AI摘要

![WordPress插件：AI摘要文章总结，AI SEO Summary Pro](https://b2.wwkejishe.top/WP-CDN-02/2023/202312072017411.webp)

## AI SEO Summary Pro是什么

AI摘要生成器（插件名称：**AI SEO Summary Pro**）是一款专为 [WordPress](https://www.wangdu.site/tag/wordpress) 平台设计的工具，它利用先进的AI（人工智能）大模型技术，对发布的文章进行深入分析并生成精准的摘要。与传统的简单截取文章片段的方式相比，**AI SEO Summary Pro**插件能够更全面、更智能地提炼文章的核心内容，为用户提供更为丰富和深入的阅读体验。

## AI SEO Summary Pro插件的好处

1. 利于SEO（AI更加能够准确的总结文章，让搜索引擎来抓取，让更多用户访问你的网站）
2. 一键总结，一键获取关键词，良好的用户体验
3. 解放双手、大脑，再也不用为怎么写文章摘要和提取关键词而苦恼了。
4. 价格便宜，买断制，只适用于`WordPress平台`

| 插件名称                                    | 插件价格             | AI模型         | 适用平台                                              | 优势                                     |
| ------------------------------------------- | -------------------- | -------------- | ----------------------------------------------------- | ---------------------------------------- |
| AI SEO Summary Pro                          | ￥199/买断           | 20多种AI大模型 | WordPress                                             | 价格便宜，多模型，可批量生成摘要和关键词 |
| [TianliGPT](https://postsummary.zhheo.com/) | ￥9/5万字符          | ChatGPT-3.5    | Hexo、WordPress（通过获取文章区块Selector来进行总结） | 支持平台多                               |
| [Wpae](http://www.imwpweb.com/5606.html)    | ￥99/1年、￥396/永久 | -              | WordPress                                             | 可批量生成摘要                           |

## AI SEO Summary Pro 如何重新生成摘要

如果文章已经生成了摘要，只需要在后台管理 - 文章 - 编辑，文章内容底部有一个AI摘要内容输入框和生成摘要按钮，点击生成摘要按钮即可重新生成AI摘要

![AI SEO Summary Pro生成AI摘要、生成关键词、填充标签](https://b2.wwkejishe.top/WP-CDN-02/2024/202407031542517.webp)

## AI SEO Summary Pro功能介绍

1. 支持多种AI大模型自动总结文章生成AI摘要
   - OpenAI ChatGPT 系列模型
   - Moonshot AI（月之暗面）
   - OpenRouter
   - 零一万物
   - 阶跃星辰
   - 百川大模型
   - Gemini
   - 星火大模型
   - 通义千问
   - 智谱AI
   - 文心大模型
   - Groq
   - MiniMax
   - DeepInfra
   - Mistral
   - 腾讯混元大模型
   - 百川大模型
   - 商汤日日新
   - DeepSeek
   - 360 智脑
2. 支持 AI 提取文章 Keywords 优化SEO
3. 支持一键将提取出来的 Keywords 填充到标签
4. 摘要打字效果可自由开关
5. 一键批量生成AI摘要

## AI SEO Summary Pro下载地址

心动不如行动，只支持 WordPress 系统哦

[👉点我下单使用](http://shop.wwkejishe.top/buy/16)

## AI SEO Summary Pro通用设置

（如有不能访问的官网，请富强上网试试）

### 设置位置

在WordPress后台 - 设置 - AI SEO Summary Pro

### 正文最大长度

这个是指将截取文章的字数的长度，传给AI模型时已做了去标签化处理，以达到减少API开销和总结准确的效果

最优范围是：`2000-4000`（选择其中一个整百的整数）

### 限制分类ID

在 `文章 - 分类目录 ` 查看不需要 AI模型来总结的一类文章，在发布文章时，只要选择了此分类，此文章就不会调用 AI总结。

![分类ID](https://b2.wwkejishe.top/WP-CDN-02/2024/202403201132225.webp)

### 限制字符

在发布文章时，文章中包含你所输入的字符，就不会调用AI总结。

## AI SEO Summary Pro 大模型API设置：ChatGPT、Moonshot AI、OpenRouter、零一万物、360智脑

[ChatGPT](https://openai.com/chatgpt/)，全称聊天生成预训练转换器（英语：Chat Generative Pre-trained Transformer），是OpenAI开发的人工智能聊天机器人程序，于2022年12月推出。

[Moonshot AI](https://www.moonshot.cn/) 欢迎探索月之暗面，寻求将能源转化为智能的最优解

[OpenRouter](https://openrouter.ai/)：LLM router and marketplace

[零一万物](https://www.lingyiwanwu.com/) 致力于成为一家由技术愿景驱动、拥有卓越中国工程底蕴的创新企业，推动以基座大模型为突破的AI 2.0掀起技术、平台到应用多个层面的革命。

[360智脑](https://ai.360.com/) 以人为本，安全可信

### OpenAI 地址

1. 官网 API 地址：`https://api.openai.com/v1/chat/completions`，此处只需要填写 `https://api.openai.com`（国内 OpenAI API 代理地址：`https://api.openai-proxy.com`）即可，以下相同。
2. 自定义 API 地址
   - [获取免费的 API Key](https://www.wangdu.site/software/ai/1955.html)（OpenAI地址要与Key匹配，否则会导致调用失败）
   - [Moonshot AI](https://platform.kimi.com/docs/api/overview)：`https://api.moonshot.cn`（[获取 API 密钥](https://platform.moonshot.cn/docs/docs#%E8%8E%B7%E5%8F%96-api-%E5%AF%86%E9%92%A5)），对话模型按需选择下面 3 个，只填写前面的英文即可
     - `moonshot-v1-8k`: 它是一个长度为 8k 的模型，适用于生成短文本。
     - `moonshot-v1-32k`: 它是一个长度为 32k 的模型，适用于生成长文本。
     - `moonshot-v1-128k`: 它是一个长度为 128k 的模型，适用于生成超长文本。
   - [OpenRouter](https://openrouter.ai/)：`https://openrouter.ai/api/v1`（[获取 API 密钥](https://openrouter.ai/keys)、[API使用情况](https://openrouter.ai/activity)）
     - `openai/gpt-3.5-turbo`
     - [其他模型介绍](https://openrouter.ai/docs#models)
   - [零一万物](https://platform.lingyiwanwu.com/docs#-%E6%96%B9%E5%BC%8F-1http)：`https://api.lingyiwanwu.com`（注册送60元）
     - `yi-34b-chat-0205`
     - `yi-34b-chat-200k`
     - [官方模型介绍](https://platform.lingyiwanwu.com/docs#-%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B)
   - [阶跃星辰](https://platform.stepfun.com/docs/Chat/chat-completion-create)：`https://api.stepfun.com`
     - `step-1-200k`
     - [官方模型介绍](https://platform.stepfun.com/docs/Model/model-list)
   - [百川大模型](https://platform.baichuan-ai.com/)：`https://api.baichuan-ai.com`
     - `Baichuan2-Turbo`
     - `Baichuan2-Turbo-192k`
   - [360智脑](https://ai.360.com/platform/docs/overview)：`https://ai.360.com/`
     - `360gpt-pro`
     - `360gpt-turbo`

### OpenAI 密钥

1. 官网 API Key：[OpenAI 官网](https://platform.openai.com/account/api-keys) 页面以申请一个 API Key
2. 自定义 API Key 与 上面 API 地址对应即可

### 对话模型

[OpenAI 官网 Models 介绍](https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo)

- 默认是：gpt-3.5-turbo
- 富豪可选：gpt-4

## AI SEO Summary Pro 大模型API设置：Gemini

[Gemini](https://gemini.google.com/)是一款由Google DeepMind（谷歌母公司Alphabet下设立的人工智能实验室）于2023年12月6日发布的人工智能模型，可同时识别文本、图像、音频、视频和代码五种类型信息，还可以理解并生成主流编程语言（如Python、Java、C++）的高质量代码，并拥有全面的安全性评估。

### Gemini API key

在 [Google AI Studio](https://aistudio.google.com/app/apikey) （需要富强访问）申请 API key，填入即可。

## AI SEO Summary Pro 大模型API设置：星火大模型

[星火认知大模型](https://xinghuo.xfyun.cn/)（SparkDesk）是一种基于深度学习技术的自然语言处理模型，它能够通过对大量文本数据的学习和分析，实现对人类语言的理解和生成。 这种模型的核心思想是通过模拟人脑的神经网络结构，来实现对自然语言的高效处理。

### 星火大模型

[星火认知大模型介绍](https://www.xfyun.cn/doc/spark/Web.html#_1-%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E)

[星火大模型申请免费包](https://xinghuo.xfyun.cn/sparkapi?scr=price)

### APPID、APISecret、APIKey

1. 在 [讯飞开放平台控制台](https://console.xfyun.cn/app/myapp) 创建应用，选择应用 - 左侧栏：星火认知大模型，根据上面选择的 `星火大模型` 填入 `APPID、APISecret、APIKey`

   ![星火大模型](https://b2.wwkejishe.top/WP-CDN-02/2024/202403201355663.webp)

## AI SEO Summary Pro 大模型API设置：通义千问

通义千问是阿里云自主研发的超大规模语言模型，能够在用户自然语言输入的基础上，通过自然语言理解和语义分析，在不同领域、任务内为用户提供服务和帮助。模型目前具备的能力包括但不限于：

1. 创作文字，如写故事、写公文、写邮件、写剧本、写诗歌等。
2. 编写代码。
3. 提供各类语言的翻译服务，如英语、日语、法语、西班牙语等。
4. 进行文本润色和文本摘要等工作。
5. 扮演角色进行对话。
6. 制作图表。

### 通义千问模型

[1、2模型计费方式](https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-qianwen-7b-14b-72b-metering-and-billing)，[3、4、5模型计费方式](https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing)

1. `qwen-72b-chat`
2. `qwen-1.8b-chat`
3. `qwen-max`
4. `qwen-max-1201`
5. `qwen-max-longcontext`

### 自定义模型

通义千问模型选择 `自定义` 时才生效

### API-KEY

[官方创建API-KEY教程](https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key)

## AI SEO Summary Pro 大模型API设置：智谱AI

智谱AI是由清华大学计算机系技术成果转化而来的公司，致力于打造新一代认知智能通用模型。公司合作研发了双语千亿级超大规模预训练模型GLM-130B，并构建了高精度通用知识图谱，形成数据与知识双轮驱动的认知引擎，基于此模型打造了ChatGLM（chatglm.cn）。此外，智谱AI还推出了认知大模型平台Bigmodel.ai，包括CodeGeeX和CogView等产品，提供智能API服务，链接物理世界的亿级用户、赋能元宇宙数字人、成为具身机器人的基座，赋予机器像人一样“思考”的能力。

### API Keys

注册登录，在 [API Keys](https://open.bigmodel.cn/usercenter/apikeys) 页面获取 API Key 填入即可。（注册实名送一个月额度）

### 对话模型

[官方模型介绍](https://open.bigmodel.cn/dev/api#language)

- `glm-4`
- `glm-4v`
- `glm-3-turbo`

## AI SEO Summary Pro 大模型API设置：文心大模型

文心大模型是百度自主研发的产业级知识增强大模型，以创新性的知识增强技术为核心，从单模态大模型到跨模态、从通用基础大模型到跨领域、跨行业持续创新突破，构建了模型层、工具与平台层，大幅降低人工智能开发和应用门槛，加快人工智能大规模产业化进程并拓展人工智能技术边界。

### API Key、Secret Key

[官方教程](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/flfmc9do2#api-%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B%E7%AE%80%E4%BB%8B) 将获取到的 `API Key`、`Secret Key` 填入即可。

## AI SEO Summary Pro 大模型API设置：Groq、MiniMax、DeepInfra、Mistral、百川大模型、DeepSeek

[Groq](https://groq.com/)是一家专注于开发 AI 处理器的技术公司，其最著名的产品是 LPU（语言处理单元）推理芯片。该芯片是市场上速度最快的语言处理加速器，设计用于低延迟、高效率和一致的推理性能。它非常适合运行 LLMs 和其他生成式 AI 应用程序。

[MiniMax](https://www.minimaxi.com/) 成立于 2021 年 12 月，是领先的通用人工智能科技公司，致力于与用户共创智能。MiniMax 自主研发多模态、万亿参数的 MoE 大模型，并基于大模型推出海螺AI、星野等原生应用。MiniMax API 开放平台提供安全、灵活、可靠的 API 服务，助力企业和开发者快速搭建 AI 应用。

[DeepInfra](https://deepinfra.com/)是一种无服务器的推理服务，提供对各种LLM模型和嵌入模型的访问。

[Mistral](https://mistral.ai/) 是一个小型但强大的开源自然语言处理模型,可适用于多种使用场景。Mistral 7B模型性能优于Llama 2 13B模型,拥有自然的编程能力和8000个序列长度。Mistral采用Apache 2.0许可证发布,易于在任何云端和个人电脑GPU上部署使用。

[百川大模型](https://www.baichuan-ai.com/home)是一款基于Transformer架构的国产深度学习模型，具有强大的自然语言处理能力和广泛的应用场景。 该模型在训练过程中采用了大规模的语料库，通过自监督学习的方式不断优化模型参数，实现了高性能的自然语言处理任务。 百川大模型在文本分类、情感分析、问答系统等多个领域都有出色的表现，受到了广大开发者的青睐。

[DeepSeek](https://www.wangdu.site/course/2100.html) 是由知名私募巨头幻方量化旗下的人工智能公司深度求索（DeepSeek）自主研发的大型AI（人工智能）语言模型。这个智能助手能够执行多种任务，包括自然语言处理、问答系统、智能对话、智能推荐、智能写作和智能客服等。

### API URL

- Grop 默认 API URL：`https://api.groq.com/openai/v1/chat/completions`
- MiniMax API URL：`https://api.minimax.chat/v1/text/chatcompletion_v2`
- [DeepInfra](https://deepinfra.com/meta-llama/Meta-Llama-3-70B-Instruct/api?example=openai-js)：`https://api.deepinfra.com/v1/openai/chat/completions`
- [Mistral](https://docs.mistral.ai/getting-started/quickstart/)：`https://api.mistral.ai/v1/chat/completions`
- [百川大模型](https://platform.baichuan-ai.com/docs/api)：`https://api.baichuan-ai.com/v1/chat/completions`
- [DeepSeek](https://platform.deepseek.com/api-docs/zh-cn/)：`https://api.deepseek.com/chat/completions`

### API Key

- Groq：在 [GroqCloud](https://console.groq.com/keys) 申请 API Key，填入即可。

- MiniMax：在 [账户管理](https://api.minimax.chat/user-center/basic-information/interface-key) 申请 API Key，复制填入即可。（[官方教程](https://www.minimaxi.com/document/guides/example?id=6433f36f94878d408fc82947)）

  ![MiniMax API Key](https://b2.wwkejishe.top/WP-CDN-02/2024/202404201041418.webp)

- DeepInfra：登录 - Dashboard - [API Keys](https://deepinfra.com/dash/api_keys) 申请 API Key，填入即可。

- Mistral：登录 - La Plateforme - [API Keys](https://console.mistral.ai/api-keys/) 申请 API Key（需要订阅），填入即可。

- DeepSeek：登录 - [API Keys](https://platform.deepseek.com/api_keys) - 创建 API key，复制填入即可。

### 对话模型

1. Groq：在 [GroqCloud 模型介绍](https://console.groq.com/docs/models) 中选择一款即可，只填 `API String 后的文字`

   - `llama2-70b-4096`

   - `mixtral-8x7b-32768`

   - `gemma-7b-it`

2. MiniMax：在 [MiniMax API文档](https://www.minimaxi.com/document/guides/chat-model/V2?id=65e0736ab2845de20908e2dd) 中选择一款即可，只填 `模型名称`

   - `abab6-chat`

   - `abab5.5-chat`（推荐）

   - `abab5.5s-chat`

3. DeepInfra

   - `meta-llama/Meta-Llama-3-70B-Instruct`
   - [其他模型介绍](https://deepinfra.com/models/text-generation)

4. Mistral：在 [Mistral 模型介绍](https://docs.mistral.ai/getting-started/models/) 中选择一款即可，只填 `API Endpoints`

   - `open-mistral-7b`
   - `open-mixtral-8x7b`
   - `open-mixtral-8x22b`
5. 百川大模型：在下面中模型中选择一款即可
   - `Baichuan4`
   - `Baichuan3-Turbo`
   - `Baichuan3-Turbo-128k`
   - `Baichuan2-Turbo`
   - `Baichuan2-Turbo-192k`
6. DeepSeek：在下面[模型](https://platform.deepseek.com/api-docs/zh-cn/pricing)填入即可。
   - `deepseek-chat`

## AI SEO Summary Pro 大模型API设置：腾讯混元大模型

腾讯混元大模型（Tencent Hunyuan）是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。

[免费领取额度资源包](https://cloud.tencent.com/product/hunyuan)

### SecretId、SecretKey

[点击链接](https://console.cloud.tencent.com/capi) 创建 API 密钥，即可获得 `SecretId、SecretKey`

### 对话模型

[腾讯混元大模型介绍](https://cloud.tencent.com/document/api/1729/105701)

- `hunyuan-lite`
- `hunyuan-standard`
- `hunyuan-standard-256K`
- `hunyuan-pro`

## AI SEO Summary Pro 更新记录

### 2.3.0

- 新增：版本在线更新
- 新增：AI批量总结
- 新增：中英文切换翻译

### 2.2.9

#### 2024年10月29日

- 新增：自定义总结文章内容提示词
- 新增：自定义总结文章关键词提示词
- 修改：一些错误判定

#### 2.2.8

#### 2024年10月22日

- 更新：小问题

### 2.2.7

#### 2024年10月22日

- 修改：文章内容过短，则不去除标签化所导致的获取不到内容问题
- 新增：总结语言选项

### 2.2.6

#### 2024年10月21日

- 修改：更新逻辑，可以手动和自动更新

### 2.2.5

#### 2024年10月20日

- 修改：星火大模型 API 地址
- 增加：检查更新功能
