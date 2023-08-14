//Create a grid

function makeBoard(size) {

let board = document.querySelector('.board')

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

makeBoard(36)
