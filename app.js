const newSize = document.querySelectorAll(".button");
let color = "black";
const colorButton = document.querySelectorAll(".color");
const removeGrid = document.querySelector(".removeGrid");
const addGrid = document.querySelector(".addGrid");

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
        board.insertAdjacentElement('beforeend',div);
   }
}


makeBoard(16);
// Change board size
 newSize.forEach(button => button.addEventListener("click", () => {
    let choice = button.value;
    makeBoard(choice);
// Color active button
    newSize.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}));

// Random RGB coloring
const randomColorButton = document.querySelector("#randomColor");
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

// Change color buttons active style
colorButton.forEach(color => color.addEventListener("click",() => {
    colorButton.forEach(color => color.classList.remove("active"));
    color.classList.add("active");
}));
// Reset board

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
  makeBoard(16);
  color = "black";
  colorButton.forEach(color => color.classList.remove("active"));
  newSize.forEach(btn => btn.classList.remove("active"));
});


