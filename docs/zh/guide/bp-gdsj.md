# 稿定设计如何下载无水印图片

![稿定设计](https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/006xxuvply1gov37y4fqij32yo1o014l.jpg)

[稿定设计官网](https://www.gaoding.com/)

## 操作步骤

1. 在稿定设计页面，找到自己想要的资源，点击进入编辑页面，默认是有水印的

![](https://cdn.jsdelivr.net/gh/dongyubin/WP-CDN@main/20210324160216.png)

2. 在此页面点击键盘 **F12** 或者快捷键 **Ctrl+Shift+i**，打开控制台

![](https://cdn.jsdelivr.net/gh/dongyubin/WP-CDN@main/20210324161647.png)

3. 在控制台按快捷键 **Ctrl+F**，在搜索框输入 **.editor-watermark**，找到第 2 个，点击这行代码

![](https://cdn.jsdelivr.net/gh/dongyubin/WP-CDN@main/20210324161907.png)

4. 在右边，将 **.editor-watermark** 属性里的  **z-index: 5;** 前面的 对勾 √ 去掉，水印就消失了

![](https://gcore.jsdelivr.net/gh/dongyubin/WP-CDN/20210716094214.png)

5. 如果是『静态图片』就用『[截图软件](https://www.wangdu.site/software/484.html)』截图即可；如果是 『动态图片』就用『[Gif 软件](https://www.wangdu.site/software/484.html)』录制即可。
