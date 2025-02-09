const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
]

const wrapper = document.querySelector('.wrapper')

function strip (bandName) {
  return bandName.replace(/^(a |the |an )/i, '')
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1))

wrapper.innerHTML = sortedBands
  .map(band => {
    return `<li>${band}</li>`
  })
  .join('')

// const a = bands.sort()
