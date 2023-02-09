const newSize = document.querySelectorAll(".button");

function makeBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i ++) {
        let div = document.createElement("div");
        div.addEventListener('mouseover', colorSquare)
        div.style.borderStyle = "solid";
        div.style.borderColor = "grey";
        board.insertAdjacentElement('beforeend',div);
    }
}

makeBoard(16);

 newSize.forEach(button => button.addEventListener("click", () => {
    let choice = button.value;
    makeBoard(choice);
}))

function colorSquare() {
    this.style.backgroundColor = "black";
}


