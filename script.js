let gridContainer = document.getElementById("grid-container");
let gridItem = document.getElementsByClassName("grid-item");
let gridSizeIndicator = document.querySelector("#grid-size-indicator");
let gridSlider = document.querySelector("#grid-slider");
let clearButton = document.querySelector("#clear");
let colorPicker = document.querySelector("#color-picker");
let rainbowButton = document.querySelector("#rainbow");
let gridLineButton = document.querySelector("#grid-line");
let rainbowToggle = false;
let gridLineToggle = false;

//Set default grid size
makeRows(8, 8);
let currentColor = "#000000";

//Grid Slider/Update Grid Size
gridSlider.addEventListener("change", (e) => {
  //reset the inner HTML
  gridContainer.innerHTML = "";
  //create row based on input
  makeRows(e.target.value, e.target.value);
  //update the text indicator
  gridSizeIndicator.innerText = `${e.target.value} X ${e.target.value}`;
  updateGridLine();
});

clearButton.addEventListener("click", clearGrid);
colorPicker.addEventListener("change", updateColor);
rainbowButton.addEventListener("click", rainbow);
gridLineButton.addEventListener("click", gridLine);

//Clear Grid, set the color to just white?
function clearGrid() {
  gridContainer.innerHTML = "";
  makeRows(gridSlider.value, gridSlider.value);
  //reset grid line
  updateGridLine();
}

function updateColor() {
  currentColor = colorPicker.value;
}

function updateGridLine() {
  if (gridLineToggle) {
    gridLineToggle = true;
    [...gridItem].forEach((item) => {
      item.classList.add("activeborder");
    });
  }
}

//Rainbow Toggle
function rainbow() {
  if (!rainbowToggle) {
    rainbowToggle = true;
  } else {
    rainbowToggle = false;
  }
}

//Grid Line Toggle
function gridLine() {
  if (!gridLineToggle) {
    gridLineToggle = true;
    updateGridLine();
  } else {
    gridLineToggle = false;
    [...gridItem].forEach((item) => {
      item.classList.remove("activeborder");
    });
  }
}

function makeRows(cols, rows) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let newCell = document.createElement("div");
    gridContainer.appendChild(newCell).className = "grid-item";
  }
}

gridContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = currentColor;
  console.log(e.target);

  if (rainbowToggle == true) {
    currentColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    colorPicker.value = currentColor;
  }
});
