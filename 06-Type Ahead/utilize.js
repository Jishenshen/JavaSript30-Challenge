const areaData =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

const prom = fetch(areaData)
  .then(blob => blob.json())
  .then(data => {
    cities.push(...data)
    // console.log(cities)
  })

function findMatches (inputWords, cities) {
  return cities.filter(place => {
    let regex = new RegExp(inputWords, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatches () {
  // console.log(this.value)
  const matchArray = findMatches(this.value, cities)
  const html = matchArray
    .map(place => {
      let regex = new RegExp(this.value, 'gi')
      let cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      )
      return `
      <li>
      <span>${cityName},${place.state}</span>
      <span class = 'population'>${place.population}</span>
      </li>
      `
    })
    .join('')
  suggestions.innerHTML = html
}

const searchs = document.querySelector('.input')
const suggestions = document.querySelector('.suggestion')

searchs.addEventListener('change', displayMatches)
searchs.addEventListener('keyup', displayMatches)
