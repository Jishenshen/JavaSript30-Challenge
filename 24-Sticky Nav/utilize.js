const nav = document.querySelector('.main-nav')
const topOfNav = nav.offsetTop

function fixNav () {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px'
    document.body.classList.add('fixednav')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixednav')
  }
}

window.addEventListener('scroll', fixNav)
