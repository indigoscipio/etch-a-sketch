let gridContainer = document.getElementById("grid-container");
// let gridRow = document.getElementsByClassName("row");
// let cells = document.getElementsByClassName("cell");

function makeRows(cols, rows) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let newCell = document.createElement("div");
    gridContainer.appendChild(newCell).className = "grid-item";
  }
}

gridContainer.addEventListener("mouseover", (e) =>{
    console.log(e.target)
})
}

//Default Grid
// function defaultGrid() {
//   makeRows(16);
//   makeColumns(16);
// }

//creates row
// function makeRows(row) {
//   for (r = 0; r < row; r++) {
//     let newRow = document.createElement("div");
//     newRow.setAttribute("class", "row");
//     // gridContainer.appendChild(newRow).className = "row";
//     gridContainer.appendChild(newRow);
//   }
// }

// //creates column
// function makeColumns(cell) {
//   for (i = 0; i < gridRow.length; i++) {
//     for (j = 0; j < cell; j++) {
//       let newCell = document.createElement("div");
//       gridRow[j].appendChild(newCell).className = "cell";
//     }
//   }
// }
