// Document connectors

const message = document.querySelector("#message")
const board = document.querySelector('.board')
const sizeButton = document.querySelector(".size")
const refreshButton = document.querySelector(".refresh")

let input

//Create a grid

function makeBoard(size) {
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

makeBoard(input)

// User input for board size creation



sizeButton.addEventListener('click', chooseSize)
function chooseSize() {
   let input = prompt("Please enter a number to select your grid size");
    if (input == "") {
        message.textContent = "Please Select a Number"
    }
    else if (input < 0 || input > 100) {
        message.textContent = "Please select a number between 1-100"
    }
    else return input
}

//Refresh Button Function

refreshButton.addEventListener('click', refresh)

function refresh() {
    location.reload();
}