const container = document.querySelector(".container");
const gridCount = 32;
const gridSizeBtn = document.querySelector(".gridSize");
const toggleBorder = document.querySelector(".toggle");
const redBtn = document.querySelector(".red");
const colourfulBtn = document.querySelector(".colourful");

let red = true;
let rgb = false;
redBtn.addEventListener("click", changeColor);
colourfulBtn.addEventListener("click", changeColor);
function changeColor() {
  red = rgb;
  rgb = !red;
}
//
toggleBorder.addEventListener("click", () => {
  container.classList.toggle("showborder");
  [...container.children].forEach((x) => x.classList.toggle("showborder"));
});
let isDrawing = false;
document.addEventListener("dragstart", (e) => e.preventDefault());
//button click
function askForSize() {
  return window.prompt("grid size? must lower than 100");
}
gridSizeBtn.addEventListener("click", () => {
  // container.classList.remove("showborder");
  let userGrid;
  do {
    userGrid = +window.prompt("grid size? must lower than 100");
  } while (userGrid > 100);
  if (userGrid) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    generateGrid(userGrid);

    if (container.classList.contains("showborder")) {
      [...container.children].forEach((x) => x.classList.toggle("showborder"));
    }
  }
});
//stop drawing once mouse is up
document.addEventListener("mouseup", () => {
  isDrawing = false;
});
//mouse event for mousedown on container but not grid
container.addEventListener("mousedown", () => {
  isDrawing = true;
});
//generate
function generateGrid(userGrid) {
  for (i = 0; i < userGrid; i++) {
    const childRow = document.createElement("div");
    childRow.style.display = "flex";
    childRow.style.flex = "1";
    childRow.style.width = "100%";
    childRow.classList.add("row");
    // childRow.style.gap = "0.1rem";
    for (j = 0; j < userGrid; j++) {
      const childSquare = document.createElement("div");
      childSquare.style.backgroundColor = "white";
      childSquare.style.flex = 1;
      let isColored = false;
      childSquare.addEventListener("mouseenter", function () {
        if (!isDrawing && !isColored) {
          childSquare.style.backgroundColor = "rgb(200, 210, 210)";
        }
        if (isDrawing) {
          childSquare.style.backgroundColor = red ? "red" : generateRgb();
          isColored = true;
        }
      });
      childSquare.addEventListener("mousedown", () => {
        isDrawing = true;
        isColored = true;
        if (red) childSquare.style.backgroundColor = "red";
        childSquare.style.backgroundColor = red ? "red" : generateRgb();
      });
      childSquare.addEventListener("mouseup", () => {
        isDrawing = false;
      });
      childSquare.addEventListener("mouseleave", () => {
        if (!isDrawing && !isColored) {
          childSquare.style.backgroundColor = "white";
        }
      });
      childRow.append(childSquare);
    }
    container.append(childRow);
  }
}
function generateHex() {
  let hexResult = `#`;
  const hexRange = "1234567890abcdef";
  for (i = 0; i < 6; i++) {
    hexResult += hexRange[Math.floor(Math.random() * 16)];
  }
  return hexResult;
}
function generateRgb() {
  return `rgb(${Math.floor(Math.random() * 180 + 76)}, ${Math.floor(
    Math.random() * 180 + 76
  )}, ${Math.floor(Math.random() * 180 + 76)})`;
}

generateGrid(gridCount);
