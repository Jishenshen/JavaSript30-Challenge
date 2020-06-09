const player = document.querySelector('.player')
const viewer = player.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipButton = document.querySelectorAll(`[data-skip]`)
const ranges = player.querySelectorAll('.player__slider')

//video play or pause
function toggleVideo () {
  if (viewer.paused) {
    viewer.play()
    toggle.textContent = '❚ ❚'
  } else {
    viewer.pause()
    toggle.textContent = '►'
  }
}

//快进快退函数
function skipVideo () {
  viewer.currentTime += parseFloat(this.dataset.skip)
}

//调节音量
function handleRangeUpdate () {
  viewer[this.name] = this.value
}

//handle progress
function handleProgress () {
  const percent = (viewer.currentTime / viewer.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub (e) {
  console.log(e)
}

//event
viewer.addEventListener('click', toggleVideo)
toggle.addEventListener('click', toggleVideo)
skipButton.forEach(x => {
  x.addEventListener('click', skipVideo)
})
ranges.forEach(range => {
  range.addEventListener('click', handleRangeUpdate)
})

viewer.addEventListener('timeupdate', handleProgress)

progress.addEventListener('click', scrub)
