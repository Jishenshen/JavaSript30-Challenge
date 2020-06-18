const content = document.querySelector('.content')
const text = content.querySelector('h1')
const walk = 40

function changeShadow (e) {
  //获取当前页面的高度与宽度
  const width = content.offsetWidth
  const height = content.offsetHeight

  //获取当前鼠标所在的界面位置
  let x = e.offsetX
  let y = e.offsetY

  //当mouse在h1对象上时
  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  let xWalk = Math.round((x / width) * walk) - walk / 2
  let yWalk = Math.round((y / height) * walk) - walk / 2

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.9),
  ${xWalk * -1.1}px ${yWalk * 1.1}px 0 rgba(0,255,255,0.9)`
}

content.addEventListener('mousemove', changeShadow)
