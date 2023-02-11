const newSize = document.querySelectorAll(".button");
let color = "black";

let isMouseDown = false;

function makeBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;


    board.addEventListener('mousedown', function() {
        isMouseDown = true;
        drawingMode();
    });

    board.addEventListener('mouseup', function() {
        isMouseDown = false;
        drawingMode();
    });

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

// Random RGB coloring
const randomColorButton = document.querySelector(".randomColor");
randomColorButton.addEventListener("click", () => {
    color = "random";
});

function colorSquare() {
    if (isMouseDown) {
        if (color === "random") {
            this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// Display current color selection
let colorMode = document.querySelector(".colorMode");
let colorClicked = document.querySelector(".color");
function changeColor(colorChoice) {
    color = colorChoice
    colorMode.textContent = `Color: ${color}`;
}



// Display drawing mode and if active

let drawing = document.querySelector(".drawing");

function drawingMode() {
    if (isMouseDown) {
        drawing.textContent = "Drawing...";
    } else {
        drawing.textContent = null;
    }
}

// Reset board

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.insertAdjacentElement('beforeend', resetButton);
resetButton.addEventListener("click", () => {
  makeBoard(16);
});




