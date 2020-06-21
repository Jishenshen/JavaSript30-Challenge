# Day19 - Webcam Fun

在 index-start.html 中提供了一个名为 Take Photo 的按钮，该按钮的点击事件会触发 takePhoto()函数，并提供了一组标有 RGBmin/max 标记的 range 类型 input 元素，一个 canvas 元素，一个 video 元素，以及带有 strip 类名的空 div 元素。

reference: https://soyaine.github.io/JavaScript30/19%20-%20Webcam%20Fun/index-finished-Dashrun.html

#### 本次的编程任务：

- 1.通过编写 javascript 代码，请求调用用户的网络摄像头;
- 2.在页面上展示来自 webcam 的数据流信息;
- 3.允许用户保存展示的照片;
- 4.使用滑块来改变图像的色彩。(滤镜)

#### 原理

调用摄像头，将摄像头返回的媒体流渲染到视频标签`<video>`中，再通过 `canvas` 绘制到画布上面，最后通过 canvas 分析拍下来的图片，使用滑块来改变图片的 rgb

## JavaScript

### 1. 调用摄像头

```javascript
function getVideo() {
  //// 取得user的media devices
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      //   console.log(localMediaStream)
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.log(`Oh nop! ${err}`);
    });
}
```

> 这里需要注意的是，URL.createObjectURL 方法在 chrome 浏览器中报错，原因为[Remove URL.createObjectURL from MediaStream](https://developers.google.com/web/updates/2018/10/chrome-71-deps-rems#remove_urlcreateobjecturl_from_mediastream)。取代方案：`video.srcObject = localMediaStream`

### 2. 将 live 图像用 canvas 绘制到页面中

```javascript
function createCanvas() {
  //js获取视频院士高度
  //.height和.width是播放器尺寸
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  //you can have access to that interval and you can call clearInterval on it
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 0);
}
```

- 当音频/视频处于加载过程中时，会依次发生以下事件：
  - loadstart
  - durationchange
  - loadedmetadata
  - loadeddata
  - progress
  - canplay
  - canplaythrough

当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。

```JavaScript
video.addEventListener('canplay', createCanvas)
```

### 3. 实现拍摄图片并保存的功能

点击 savePhoto()函数时调用 canvas 的 toDataUrl()方法即可获得 canvas 中的图像数据，默认格式为 png，也可修改为其他格式，生成的图像数据指定给 img.src 时即可预览图片;

```javascript
function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  //save image
  const imgData = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = imgData;
  link.innerHTML = `<img src=${imgData} alt="your moment"/>`;

  //Self-implemented download
  link.setAttribute("download", "moment");
  strip.insertBefore(link, strip.firstChild);
  //   console.log(imgDat a)
}
```

> 参阅：[MDN-HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) && [MDN-Node.insert Before()](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

### 4. 实现滤镜效果

1. [getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)方法获取 canvas 图像的 pixel data, 为 rgba 循环

2. 加上滤镜后，使用[putImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)方法将最新的像素作用在 canvas 图像上
