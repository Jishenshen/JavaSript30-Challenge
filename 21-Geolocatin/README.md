# Day21 Geolocation

本次的挑战任务，是利用浏览器内置 Web Geolocation API,将获取到的地理位置及相关坐标，与可视化指南针连接在一起。

## CSS

波点背景的实现：使用了`radial-gradient`画小圆圈，然后`background-size`重复

## JS

1. [Geolocation](http://localhost:3000/) 的两个主要方法：
   - [watchPosition()](http://localhost:3000/)
   - getCurrentPosition(): 只获取一次当前的位置

<b>该功能在 https 下可正常使用，webos 用了 xcode 的 simulator，使用了 external urls，但是目前 safari block 了 insecure connection，目前还在找解决方案</b>
