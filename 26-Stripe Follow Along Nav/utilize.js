const triggers = document.querySelectorAll('.main > li');
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top")

//鼠标移入事件
function handleEnter(){
    this.classList.add("trigger-enter")
    setTimeout(()=>{this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active")},100)
    background.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropDownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        width : dropDownCoords.width,
        height: dropDownCoords.height,
        top:dropDownCoords.top,
        left:dropDownCoords.left
    }

    background.style.setProperty('width',`${coords.width}px`)
    background.style.setProperty('height',`${coords.height}px`)
    background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`)
}

//鼠标移出事件
function handleLeave(){
    this.classList.remove("trigger-enter","trigger-enter-active")
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));