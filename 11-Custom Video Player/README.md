# Day11-Custom Video Player

第十一天是要做一个自定义的视频播放器，在具有基本样式的前提下，实现视频的播放，暂停，进度条拖拽，音量加减，播放速度加减，快进快退的功能。
功能[文档](https://www.w3schools.com/tags/ref_av_dom.asp)

## 实现思路：

### 方法 1:

1. control 属性供添加播放、暂停和音量控件。
2. 还需用 js 实现播放速度加减的功能

### 方法 2

手动用 js 实现一下功能

- <b>播放/暂停</b>
  - video 对象的各种属性、方法和事件
    1. paused
    2. play()
    3. pause()
    4. currentTime
- <b>快退/快进</b>

  1. 用到 `currentTime` 属性，并用 `parseFloat()`将 string 转为 floating point number

- 音量加减
- 播放速度加减
- 进度条操作

  1. 这里需要注意，offsetX & offsetY 相对于带有定位的父盒子的 x，y 坐标
     ![showcase](https://img-blog.csdn.net/20180612002242162?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTM0MjU4NQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

  2. ```javaScript
     progress.addEventListener('mousemove', e => mousedown && scrub(e))
     ```
     使用&&判断左右两变量，只有两个都为真的时候整体表达式才为真，且在判断时从左向右依次判断，若左变量就为假，就不会再去执行右边的表达式。
