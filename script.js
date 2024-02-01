const eyes = document.querySelector(".eyes")
const head = document.querySelector(".head")
const ears = document.querySelector(".ears")
const nose = document.querySelector(".nose")
const snout = document.querySelector(".snout")
const armright = document.getElementById("arm-right")
const shadright = document.getElementById("arm-right-shadow")
const armRightStroke = document.getElementById("arm-right-stroke")
const armleft = document.getElementById("arm-left")
const shadleft = document.getElementById("arm-left-shadow")
const armLeftStroke = document.getElementById("arm-left-stroke")


let cursorPos = { x: 0, y: 0 }
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

function definirTamaPantalla() {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

}

function mouseMove(e) {
    cursorPos = { x: e.clientX, y: e.clientY }
    seguir()

}

function touchmove(e) {
    cursorPos = { x: e.targetTouches[0].offsetx, y: e.targetTouches[0].offsety }
    seguir()

}


const seguirCursor = (el, xrelacion, yrelacion) => {
    const elOffset = el.getBoundingClientRect()
    const centerX = elOffset.x + elOffset.width / 2
    const centerY = elOffset.y + elOffset.height / 2
    const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth)
    const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight)
    el.style.transform = `translate(${distanceLeft / xrelacion}px, ${distanceTop / yrelacion}px)`

}

const seguir = () => {
    if (ears) seguirCursor(ears, 0, 0)
    if (head) seguirCursor(head, 1.8, 1.8)
    if (eyes) seguirCursor(eyes, 1.8, 1.8)
    if (snout) seguirCursor(snout, 1.8, 1.8)
    if (nose) seguirCursor(nose, 1.8, 1.8)
    if (armright) seguirCursor(armright, 1.8, 1.8)
    if (shadright) seguirCursor(shadright, 1.8, 1.8)
    if (armRightStroke) seguirCursor(armRightStroke, 1.8, 1.8)
    if (armleft) seguirCursor(armleft, 1.8, 1.8)
    if (shadleft) seguirCursor(shadleft, 1.8, 1.8)
    if (armLeftStroke) seguirCursor(armLeftStroke, 1.8, 1.8)




}

window.addEventListener('resize', definirTamaPantalla)
window.addEventListener('mousemove', mouseMove)
window.addEventListener('touchmove', touchmove)