const container = document.querySelector(".container");
let isDrawing = false;
const gridCount = 16;
for (i = 0; i < gridCount; i++) {
  const childRow = document.createElement("div");
  childRow.style.display = "flex";
  childRow.style.gap = "0.2rem";
  childRow.classList.add("row");
  for (j = 0; j < gridCount; j++) {
    const childDiv = document.createElement("div");
    childDiv.style.backgroundColor = "white";
    childDiv.classList.add("gr");
    childDiv.style.width = "2rem";
    childDiv.style.height = "2rem";

    childDiv.addEventListener("mouseenter", function () {
      if (!isDrawing) {
        childDiv.style.backgroundColor = "rgb(200, 210, 210)";
      } else if (isDrawing) {
        childDiv.style.backgroundColor = "red";
      }
    });
    childDiv.addEventListener("mousedown", () => {
      isDrawing = true;
      childDiv.style.backgroundColor = "red";
    });
    childDiv.addEventListener("mouseleave", () => {
      if (!isDrawing) {
        childDiv.style.backgroundColor = "white";
      }
    });
    childDiv.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    childRow.append(childDiv);
  }
  container.append(childRow);
}
