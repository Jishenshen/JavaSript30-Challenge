const words = document.querySelector('.words')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

// resinterimults are returned
recognition.interimResults = true
recognition.lang = 'en-US'

let p = document.createElement('p')
words.appendChild(p)

function audioToText (e) {
  // let output = e.results[0][0].transcript
  let finishStatu = e.results[0].isFinal
  let transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

  // isfinal or not
  p.textContent = transcript
  if (finishStatu) {
    p = document.createElement('p')
    words.appendChild(p)
  }
  console.log(transcript)
}

recognition.start()

recognition.addEventListener('result', audioToText)
recognition.addEventListener('end', recognition.start)
