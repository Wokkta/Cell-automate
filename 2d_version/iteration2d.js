let cells = [
  "---------------",
  "------*-*------",
  "---------------",
  "---------------",
  "---------------",
  "---------------"
];
console.log(cells);

let els = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < els.length; i++) {
  els[i] = document.getElementById(els[i]);
  els[i].innerHTML = cells[i];
}
/*
let el = document.createElement("div");
document.body.appendChild(el);
*/
let showCells = () => {
  for (let i in cells) {
    console.log("here ", i);
    els[i].innerHTML = cells[i];
    console.log(els[i].innerHTML);
  }
};
/*
y'[i][j] = f(y[i][j], y[i-1][j], y[i-1][j+1],
y[i][j+1], y[i+1][j+1], y[i+1][j], y[i+1][j-1],
y[i][j-1], y[i-1][j-1]). */
function findingNeibors(myArray, i, j) {
  let rowLimit = myArray.length - 1;
  let columnLimit = myArray[0].length - 1;
  let sum = 0;

  if (i < 0 || j < 0) {
    //console.log("invalid Index");
    //return;
  }

  if (i > rowLimit || j > columnLimit) {
    //console.log("You are Out Of Bound");
    //return;
  }

  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
      if (x !== i || y !== j) {
        //console.log(myArray[x][y], "here");
        myArray[x][y] === "*" ? (sum += 1) : (sum += 0);
      }
    }
  }
  return sum;
}
//console.log(findingNeibors(cells, 1, 7));
function iteration2d() {
  for (let i in cells) {
    for (let j in cells[i]) {
      if (findingNeibors(cells, i, j) >= 3) {
        cells[i][j] = "*";
      } else {
        cells[i][j] = "-";
      }
    }
  }

  return cells;
}
console.log(1);
showCells(iteration2d(cells));
