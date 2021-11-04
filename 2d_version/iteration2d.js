console.clear();
let cells = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

let el = document.querySelector("div");

function showCells(matrix, element) {
  element.innerHTML = "";
  for (let i = 0; i < matrix.length; i++) {
    element.innerHTML += "\n";
    for (let j = 0; j < matrix[i].length; j++) {
      element.innerHTML += matrix[i][j];
    }
  }
}

function consoleMatrix(matrix, matrixName) {
  console.log(matrixName);
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i], `row ${i}`);
  }
}

function findingNeibors(i, j, matrix) {
  let previousI = 0;
  if (i == 0) {
    previousI = matrix.length - 1;
  } else {
    previousI = i - 1;
  }
  let previousJ = 0;
  if (j == 0) {
    previousJ = matrix[i].length - 1;
  } else {
    previousJ = j - 1;
  }
  let nextI = 0;
  i + 1 > matrix.length - 1 ? (nextI = 0) : (nextI = i + 1);
  let nextJ = 0;
  j + 1 > matrix[i].length - 1 ? (nextJ = 0) : (nextJ = j + 1);
  return [previousI, previousJ, i, j, nextI, nextJ];
}

function summar(indexses, matrix) {
  let previousI = indexses[0];
  let previousJ = indexses[1];
  let indexI = indexses[2];
  let indexJ = indexses[3];
  let nextI = indexses[4];
  let nextJ = indexses[5];
  let sum =
    matrix[previousI][previousJ] +
    matrix[previousI][indexJ] +
    matrix[previousI][nextJ] +
    matrix[indexI][previousJ] +
    matrix[indexI][nextJ] +
    matrix[nextI][previousJ] +
    matrix[nextI][indexJ] +
    matrix[nextI][nextJ];
  return sum;
}

function iteration2d(matrix, element) {
  let nextMatrix = [];
  for (let i = 0; i < cells.length; i++) {
    let row = [];
    for (let j = 0; j < cells[i].length; j++) {
      let neigbr = summar(findingNeibors(i, j, matrix), matrix);
      switch (neigbr) {
        case 0:
          //testing
          row.push(0);
          break;
        case 1:
          row.push(0);
          break;
        case 2:
          row.push(matrix[i][j]);
          break;
        case 3:
          row.push(1);
          break;
        default:
          row.push(0);
      }
    }
    nextMatrix.push(row);
  }
  showCells(matrix, element);
  consoleMatrix(matrix,'matrix')
  setTimeout(iteration2d(nextMatrix, element), 10000);
  return nextMatrix;
}

consoleMatrix(cells, "start");
consoleMatrix(iteration2d(cells, el), "step 1");
consoleMatrix(iteration2d(iteration2d(cells, el), el), "step 2");
consoleMatrix(
  iteration2d(iteration2d(iteration2d(cells, el), el), el),
  "step 3"
);

console.log("end");

function testFinding(matrix) {
  let indexesMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let summ = summar(findingNeibors(i, j, matrix), matrix);
      row.push(summ);
    }
    indexesMatrix.push(row);
  }
  return indexesMatrix;
}
