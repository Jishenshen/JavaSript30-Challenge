# Day19 - Webcam Fun

在 index-start.html 中提供了一个名为 Take Photo 的按钮，该按钮的点击事件会触发 takePhoto()函数，并提供了一组标有 RGBmin/max 标记的 range 类型 input 元素，一个 canvas 元素，一个 video 元素，以及带有 strip 类名的空 div 元素。

reference: https://soyaine.github.io/JavaScript30/19%20-%20Webcam%20Fun/index-finished-Dashrun.html

#### 本次的编程任务：

- 1.通过编写 javascript 代码，请求调用用户的网络摄像头;
- 2.在页面上展示来自 webcam 的数据流信息;
- 3.允许用户保存展示的照片;
- 4.使用滑块来改变图像的色彩。(滤镜)

##### 原理

调用摄像头，将摄像头返回的媒体流渲染到视频标签`<video>`中，再通过 `canvas` 绘制到画布上面，最后通过 canvas 分析拍下来的图片，使用滑块来改变图片的 rgb

### JS

1. URL.createObjectURL 方法在 chrome 浏览器中报错，原因为[Remove URL.createObjectURL from MediaStream](https://developers.google.com/web/updates/2018/10/chrome-71-deps-rems#remove_urlcreateobjecturl_from_mediastream)。取代方案：`video.srcObject = localMediaStream`

2. 当音频/视频处于加载过程中时，会依次发生以下事件：

> > - loadstart
> > - durationchange
> > - loadedmetadata
> > - loadeddata
> > - progress
> > - canplay
> > - canplaythrough
