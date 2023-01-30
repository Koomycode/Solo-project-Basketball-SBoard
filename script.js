const hNum = document.getElementById("h-num")
const gNum = document.getElementById("g-num")
const hInc1 = document.getElementById("h-inc1")
const hInc2 = document.getElementById("h-inc2")
const hInc3 = document.getElementById("h-inc3")
const gInc1 = document.getElementById("g-inc1")
const gInc2 = document.getElementById("g-inc2")
const gInc3 = document.getElementById("g-inc3")

let hNumber = 0
let gNumber = 0

hInc1.addEventListener("click", function() {
    hNumber += 1
    hNum.textContent = hNumber
})

hInc2.addEventListener("click", function() {
    hNumber += 2
    hNum.textContent = hNumber
})

hInc3.addEventListener("click", function() {
    hNumber += 3
    hNum.textContent = hNumber
})

gInc1.addEventListener("click", function() {
    gNumber += 1
    gNum.textContent = gNumber
})

gInc2.addEventListener("click", function() {
    gNumber += 2
    gNum.textContent = gNumber
})

gInc3.addEventListener("click", function() {
    gNumber += 3
    gNum.textContent = gNumber
})