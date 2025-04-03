const container = document.querySelector(".container");
const gridCount = 3;
const gridSizeBtn = document.querySelector(".gridSize");
let isDrawing = false;
document.addEventListener("dragstart", (e) => e.preventDefault());
//button click
function askForSize() {
  const promptInputValue = window.prompt("grid size? must lower than 100");
  return promptInputValue;
}
gridSizeBtn.addEventListener("click", () => {
  let userGrid = 101;
  while (userGrid > 100) {
    userGrid = askForSize();
    if (userGrid > 100) alert("to much");
  }
  if (userGrid) {
    while (container.firstChild) {
      console.log(container.firstChild);
      container.removeChild(container.firstChild);
    }

    generateGrid(userGrid);
  }
});
//

document.addEventListener("mouseup", () => {
  isDrawing = false;
});
container.addEventListener("mousedown", () => {
  isDrawing = true;
});
function generateGrid(userGrid) {
  for (i = 0; i < userGrid; i++) {
    const childRow = document.createElement("div");
    childRow.style.display = "flex";
    childRow.style.flex = "1";
    childRow.style.width = "100%";
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
          childSquare.style.backgroundColor = "red";
          isColored = true;
        }
      });
      childSquare.addEventListener("mousedown", () => {
        isDrawing = true;
        isColored = true;
        childSquare.style.backgroundColor = "red";
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
generateGrid(gridCount);
