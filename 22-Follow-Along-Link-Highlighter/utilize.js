const links = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function showHighlight () {
  const linkCoords = this.getBoundingClientRect()
  const coords = {
    width: linkCoords.width,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
    height: linkCoords.heights
  }
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

links.forEach(link => link.addEventListener('mouseover', showHighlight))
