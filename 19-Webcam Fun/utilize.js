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
  }, 16)
}

function takePhoto () {
  snap.currentTime = 0
  snap.play()
}

getVideo()

//当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
video.addEventListener('canplay', createCanvas)
