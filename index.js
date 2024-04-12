let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//let backEl = document.getElementById("back-el")
let count = 0

function increase() {
  count += 1
  countEl.textContent = count
}

function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr
    // countEl.textContent = 0
    
}

function decrease() {
countEl.textContent -= 1
count -= 1
}

function reset () {
 countEl.textContent = 0
 count = 0
}
