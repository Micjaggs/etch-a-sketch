// Document connectors

const message = document.querySelector("#message")
const board = document.querySelector('.board')
const sizeButton = document.querySelector(".size")
const refreshButton = document.querySelector(".refresh")


//Create a base 16 x 16 grid

function makeBoard(input) {
    board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${input}, 1fr)`;

//Create divs

    let grideSize = input * input;
    
// Hover event that shades pixels

    for (i = 0; i < grideSize; i++) {
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }
}

makeBoard(16)


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
    else {
        board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${input}, 1fr)`;

// Hover event that shades pixels

    let grideSize = input * input;

    for (i = 0; i < grideSize; i++) {
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
        } 
    }
}

//Refresh Button Function

refreshButton.addEventListener('click', refresh)

function refresh() {
    location.reload();
}