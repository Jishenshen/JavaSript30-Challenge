const areaData =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

//fetch data

const cities = []

fetch(areaData)
  .then(blob => blob.json())
  .then(data => {
    cities.push(...data)
    // console.log(cities)
  })
//result generator

function matchResult (inputValue, cities) {
  return cities.filter(place => {
    let regExp = new RegExp(inputValue, 'gi')
    return place.city.match(regExp) || place.state.match(regExp)
  })
}
function displayResult () {
  const matchArray = matchResult(this.value, cities)
  const html = matchArray
    .map(place => {
      let regExp = new RegExp(this.value, 'gi')
      let cityName = place.city.replace(
        regExp,
        `<span class='hl'>${this.value}</span>`
      )
      return `
    <li>
    <span>${cityName},${place.state}</span>
    <span class='population'>${place.populatin}</span>
    </li>`
    })
    .join('')
  suggestions.innerHTML = html
}

//eventListener
const inputs = document.querySelector('.input')
const suggestions = document.querySelector('.suggestion')

inputs.addEventListener('change', displayResult)
inputs.addEventListener('keyup', displayResult)
