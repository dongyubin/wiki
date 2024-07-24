---
title: 稿定设计如何去水印最新办法及懒人脚本（2024年7月）
---

# 稿定设计如何去水印最新办法及懒人脚本（2024年7月）

![稿定设计去水印](https://image.baidu.com/search/down?url=https://gzw.sinaimg.cn/large/006xxuvply1gov37y4fqij32yo1o014l.jpg)

## 稿定设计去水印最新办法

1. Chrome浏览器打开 [稿定设计官网](https://www.gaoding.com/) 设计页面，按`F12`打开开发者工具，点击三个点 - 更多工具 - 屏蔽网络请求 - + - 输入：`https://www.gaoding.com/*-*-*-*-*` - 添加并勾选，刷新当前页面

   ![稿定设计Chrome去水印操作](https://b2.wwkejishe.top/WP-CDN-02/2024/202407011028478.webp)

2. 点击`下载`，格式：`PNG`，商品用途改为`个人/公益使用`即可下载一张干净的 PNG 图片了（可能会用到的工具：[去背景工具](https://www.wangdu.site/software/tools/86.html)）

   ![稿定设计下载去水印图片](https://b2.wwkejishe.top/WP-CDN-02/2024/202407011029449.webp)


## 已失效

1. 在稿定设计页面，找到自己想要的资源，点击进入编辑页面，默认是有水印的

![](https://b2.wwkejishe.top/WP-CDN/20210324160216.webp)

2. 在此页面点击键盘 **F12** 或者快捷键 **Ctrl+Shift+i**，打开控制台

![](https://b2.wwkejishe.top/WP-CDN/20210324161647.webp)

3. 在控制台按快捷键 **Ctrl+F**，在搜索框输入 **.editor-watermark**，找到第 2 个，点击这行代码

![](https://b2.wwkejishe.top/WP-CDN/20210324161907.webp)

4. 在右边，将 **.editor-watermark** 属性里的  **z-index: 5;** 前面的 对勾 √ 去掉，水印就消失了

![](https://b2.wwkejishe.top/WP-CDN/20210716094214.webp)

5. 如果是『静态图片』就用『[截图软件](https://www.wangdu.site/software/484.html)』截图即可；如果是 『动态图片』就用『[Gif 软件](https://www.wangdu.site/software/484.html)』录制即可。
