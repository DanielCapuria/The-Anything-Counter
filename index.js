// //  // document.getElementById("count-el").innerText = 5
// // let welcomeEL = document.getElementById("welcome-el")
// // let name = "Daniel Capuria"
// // // let greeting = "Welcome back"
// // welcomeEl.innterText += 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//let backEl = document.getElementById("back-el")
let count = 0

function increase() {
  count += 1
  countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function back() {
countEl.textContent -= 1
count -= 1
}