const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

function getVideo () {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      //   console.log(localMediaStream)
      video.srcObject = localMediaStream
      video.play()
    })
    .catch(err => {
      console.log(`Oh nop! ${err}`)
    })
}

function createCanvas () {
  //js获取视频院士高度
  //.height和.width是播放器尺寸
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height

  //you can have access to that interval and you can call clearInterval on it
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    // pixels = redEffect(pixels)
    pixels = rgbSplit(pixels)
    // pixels = greenScreen(pixels)
    ctx.putImageData(pixels, 0, 0)
    // ctx.globalAlpha = 0.1
    // console.log(pixels )
    // debugger
  }, 0)
}

function takePhoto () {
  snap.currentTime = 0
  snap.play()

  //save image
  const imgData = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = imgData
  link.innerHTML = `<img src=${imgData} alt="your moment"/>`

  //Self-implemented download
  link.setAttribute('download', 'moment')
  strip.insertBefore(link, strip.firstChild)
  //   console.log(imgDat a)
}

function redEffect (pixels) {
  for (i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100
    pixels.data[i + 1] = pixels.data[i + 1] - 50 //green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5 //blue
  }
  return pixels
}

function greenScreen (pixels) {
  let levels = {}
  inputs = document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value
  })
  //   console.log(levels)
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0]
    green = pixels.data[i + 1]
    blue = pixels.data[i + 2]
    alpha = pixels.data[i + 3]

    if (
      red >= levels.rmin &&
      red <= levels.rmax &&
      green >= levels.gmin &&
      green <= levels.gmax &&
      blue >= levels.bmin &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0
    }
  }
  return pixels
}

function rgbSplit (pixels) {
  for (i = 1; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] //red
    pixels.data[i + 100] = pixels.data[i + 1] //green
    pixels.data[i - 550] = pixels.data[i + 2] //blue
  }
  return pixels
}

getVideo()

//当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
video.addEventListener('canplay', createCanvas)
