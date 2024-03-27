---
title: WordPress插件 - AI Article Summary
---

# AI Article Summary

[WordPress AI文章总结插件获取地址](https://www.wangdu.site/course/2050.html)

（如有不能访问的官网，请富强上网试试）

## 通用设置

### 正文最大长度

这个是指将截取文章的字数的长度，传给AI模型时已做了去标签化处理，以达到减少API开销和总结准确的效果

最优范围是：`2000-4000`（选择其中一个整百的整数）

### 限制分类ID

在 `文章 - 分类目录 ` 查看不需要 AI模型来总结的一类文章，在发布文章时，只要选择了此分类，此文章就不会调用 AI总结。

![分类ID](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201132225.webp)

### 限制字符

在发布文章时，文章中包含你所输入的字符，就不会调用AI总结。

## ChatGPT

### OpenAI 地址

1. 官网 API 地址：`https://api.openai.com/v1/chat/completions`，此处只需要填写 `https://api.openai.com`（国内 OpenAI API 代理地址：`https://api.openai-proxy.com`）即可，以下相同。
2. 自定义 API 地址
   - [获取免费的 API Key](https://www.wangdu.site/software/ai/1955.html)（OpenAI地址要与Key匹配，否则会导致调用失败）
   - [Moonshot AI](https://platform.moonshot.cn/docs/api-reference)：`https://api.moonshot.cn`（[获取 API 密钥](https://platform.moonshot.cn/docs/docs#%E8%8E%B7%E5%8F%96-api-%E5%AF%86%E9%92%A5)），对话模型按需选择下面 3 个，只填写前面的英文即可
     - `moonshot-v1-8k`: 它是一个长度为 8k 的模型，适用于生成短文本。
     - `moonshot-v1-32k`: 它是一个长度为 32k 的模型，适用于生成长文本。
     - `moonshot-v1-128k`: 它是一个长度为 128k 的模型，适用于生成超长文本。
   - [OpenRouter](https://openrouter.ai/)：`https://openrouter.ai/api/v1`（[获取 API 密钥](https://openrouter.ai/keys)、[API使用情况](https://openrouter.ai/activity)）
     - `openai/gpt-3.5-turbo`
     - [其他模型介绍](https://openrouter.ai/docs#models)

### OpenAI 密钥

1. 官网 API Key：[OpenAI 官网](https://platform.openai.com/account/api-keys) 页面以申请一个 API Key
2. 自定义 API Key 与 上面 API 地址对应即可

### 对话模型

[OpenAI 官网 Models 介绍](https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo)

- 默认是：gpt-3.5-turbo
- 富豪可选：gpt-4

## Gemini

### Gemini API key

在 [Google AI Studio](https://aistudio.google.com/app/apikey) （需要富强访问）申请 API key，填入即可。

## 星火大模型

### 星火大模型

[星火认知大模型介绍](https://www.xfyun.cn/doc/spark/Web.html#_1-%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E)

[星火大模型申请免费包](https://xinghuo.xfyun.cn/sparkapi?scr=price)

### APPID

1. 在 [讯飞开放平台控制台](https://console.xfyun.cn/app/myapp) 创建应用，选择应用 - 左侧栏：星火认知大模型，根据上面选择的 `星火大模型` 填入 `APPID、APISecret、APIKey`

   ![星火大模型](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403201355663.webp)

### APISecret

### APIKey

## 通义千问

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

## 智谱AI

### API Keys

注册登录，在 [API Keys](https://open.bigmodel.cn/usercenter/apikeys) 页面获取 API Key 填入即可。（注册实名送一个月额度）

### 对话模型

[官方模型介绍](https://open.bigmodel.cn/dev/api#language)

- `glm-4`
- `glm-4v`
- `glm-3-turbo`

## 文心大模型

### API Key

[官方教程](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/flfmc9do2#api-%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B%E7%AE%80%E4%BB%8B) 将获取到的 `API Key`、`Secret Key` 填入即可。

### Secret Key

## Groq

### API Key

在 [GroqCloud](https://console.groq.com/keys) 申请 API key，填入即可。

### 对话模型

在 [GroqCloud 模型介绍](https://console.groq.com/docs/models) 中选择一款即可，只填 `API String 后的文字`

- `llama2-70b-4096`
- `mixtral-8x7b-32768`
- `gemma-7b-it`