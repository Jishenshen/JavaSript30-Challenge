const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"],[name="text"]')
const stopButton = document.getElementById('stop')
const speakButton = document.getElementById('speak')
msg.text = document.querySelector('[name="text"]').value

//获取人声
function populateVoiceList () {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .map(
      voice =>
        `<option value='${voice.name}'>${voice.name}(${voice.lang})</option>`
    )
    .join('')
  console.log(this)
}

//设置人声
function setVoice () {
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle()
}

//每次切换语言时都从头重新开始播放
function toggle (startOver = true) {
  speechSynthesis.cancel()
  if (startOver) {
    speechSynthesis.speak(msg)
  }
}

//设定速率和音准
function setOption () {
  msg[this.name] = this.value
  toggle()
  console.log(msg)
}

// 设置语言下拉选择框
speechSynthesis.addEventListener('voiceschanged', populateVoiceList)

// 当切换语言选择下拉菜单时被调用
voicesDropdown.addEventListener('change', setVoice)

//监听rate和pitch控制条
options.forEach(option => option.addEventListener('change', setOption))

speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
