const container = document.querySelector(".container");

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
    childDiv.addEventListener("mousemove", function () {
      childDiv.style.backgroundColor = "rgb(210, 210, 210)";
    });
    childDiv.addEventListener("mouseout", () => {
      childDiv.style.backgroundColor = "white";
    });
    childDiv.addEventListener("mousedown", () => {
      childDiv.style.backgroundColor = "blue";
    });
    childRow.append(childDiv);
  }
  container.append(childRow);
}
