//convert nodeList to Array
const videos = Array.from(document.querySelectorAll('li'))

//get seconds
const seconds = videos
  .map(video => video.dataset.time)
  .map(timecode => {
    const timeArray = timecode.split(':').map(parseFloat)
    return timeArray[0] * 60 + timeArray[1]
  })
  .reduce((x, y) => x + y)

const getHours = Math.floor(seconds / 3600)
const getMinutes = Math.floor((seconds % 3600) / 60)
const getSeconds = (seconds % 3600) % 60

console.log(`${getHours}:${getMinutes}:${getSeconds}`)
