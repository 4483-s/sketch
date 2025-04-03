const container = document.querySelector(".container");
let isDrawing = false;
const gridCount = 16;
for (i = 0; i < gridCount; i++) {
  const childRow = document.createElement("div");
  childRow.style.display = "flex";
  childRow.style.gap = "0.2rem";
  childRow.classList.add("row");
  for (j = 0; j < gridCount; j++) {
    const childSquare = document.createElement("div");
    childSquare.style.backgroundColor = "white";
    childSquare.classList.add("gr");
    childSquare.style.width = "2rem";
    childSquare.style.height = "2rem";
    let isColored = false;
    childSquare.addEventListener("mouseenter", function () {
      if (!isDrawing && !isColored) {
        childSquare.style.backgroundColor = "rgb(200, 210, 210)";
      } else if (isDrawing) {
        childSquare.style.backgroundColor = "red";
        isColored = true;
      }
    });
    childSquare.addEventListener("mousedown", () => {
      isDrawing = true;
      isColored = true;
      childSquare.style.backgroundColor = "red";
    });
    childSquare.addEventListener("mouseleave", () => {
      if (!isDrawing && !isColored) {
        childSquare.style.backgroundColor = "white";
      }
    });
    childSquare.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    childRow.append(childSquare);
  }
  container.append(childRow);
}
