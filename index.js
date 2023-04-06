let countDisplay =  document.getElementById("count-display");
let saveDisplay = document.getElementById("save-display");

let count = 0;

function increment() {
    count += 1;
    countDisplay.textContent = count;
}

function decrement() {
    count -= 1;
    countDisplay.textContent = count;
}

function reset() {
    count = 0;
    countDisplay.textContent = count;
}

function save() {
    let saveStr = count + " - "
    saveDisplay.textContent += saveStr;
    countDisplay.textContent = 0;
    count = 0;
}