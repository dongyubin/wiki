---
title: 稿定设计如何去水印
---

![稿定设计](https://image.baidu.com/search/down?url=https://gzw.sinaimg.cn/large/006xxuvply1gov37y4fqij32yo1o014l.jpg)

[稿定设计官网](https://www.gaoding.com/)

## 最新步骤

1. 在设计页面按 F12 打开控制台，在 `源代码/来源` 关闭调试

   ![关闭调试](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403191035540.png "关闭调试")

2. 删除水印代码

   ![水印代码](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202403191035873.png)

3. Ctrl+F 搜索：`.editor-background`，第一个就是你设计好的图片，右键 - 截取节点屏幕截图，即可获得一张 PNG 图片（[去背景工具](https://www.wangdu.site/software/tools/86.html)）

## 已失效

1. 在稿定设计页面，找到自己想要的资源，点击进入编辑页面，默认是有水印的

![](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN/20210324160216.png)

2. 在此页面点击键盘 **F12** 或者快捷键 **Ctrl+Shift+i**，打开控制台

![](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN/20210324161647.png)

3. 在控制台按快捷键 **Ctrl+F**，在搜索框输入 **.editor-watermark**，找到第 2 个，点击这行代码

![](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN/20210324161907.png)

4. 在右边，将 **.editor-watermark** 属性里的  **z-index: 5;** 前面的 对勾 √ 去掉，水印就消失了

![](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN/20210716094214.png)

5. 如果是『静态图片』就用『[截图软件](https://www.wangdu.site/software/484.html)』截图即可；如果是 『动态图片』就用『[Gif 软件](https://www.wangdu.site/software/484.html)』录制即可。

## 懒人版

[懒人版](https://www.wangdu.site/course/483.html)
