const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"],[name="text"]')
const stopButton = document.getElementById('stop')
const speakButton = document.getElementById('speak')
msg.text = document.querySelector('[name="text"]').value

function speakMsg () {}
function stopMsg () {}

function populateVoiceList () {
  let voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .filter(voice => {
      voice.lang.includes('en')
    })
    .map(
      voice =>
        `<option value = "${voice.name}"> ${voice.name}(${voice.lang})></option>`
    )
  // .join('')
}

speakButton.addEventListener('click', speakMsg)
stopButton.addEventListener('click', stopMsg)

speechSynthesis.addEventListener('voiceschanged', populateVoiceList)
