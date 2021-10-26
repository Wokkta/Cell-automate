console.log(200))
console.clear();
let cells = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
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
function consoleMatrix(matrix,matrixName) {
  console.log(matrixName)
  for (let i=0;i<matrix.length;i++){
    console.log(matrix[i],`row ${i}`)
  }
}
function findingNeibors(i, j, matrix) {

  let sum = 0;
  let previousI = 0;
  i - 1 < 0 ? (previousI = matrix.length - 1) : (previousI = i - 1);
  let previousJ = 0;
  j - 1 < 0 ? (previousJ = matrix[i].length - 1) : (previousI = j - 1);
  let nextI = 0;
  i + 1 > matrix.length - 1 ? (nextI = 0) : (nextI = i + 1);
  let nextJ = 0;
  j + 1 > matrix[i].length - 1 ? (nextJ = 0) : (nextJ = j + 1);
  return [previousI, previousJ, i, j, nextI, nextJ]
}

function summar(indexses, matrix) {
  previousI = indexses[0]
  previousJ = indexses[1]
  indexI = indexses[2]
  indexJ = indexses[3]
  nextI = indexses[4]
  nextJ = indexses[5]
  sum =
    matrix[previousI][previousJ] +
    matrix[previousI][indexJ] +
    matrix[previousI][nextJ] +
    matrix[indexI][previousJ] +
    matrix[indexI][nextJ] +
    matrix[nextI][previousJ] +
    matrix[nextI][indexJ] +
    matrix[nextI][nextJ];
  return sum
}

function iteration2d(matrix,element) {
  nextMatrix=[]
  for (let i = 0; i < cells.length; i++) {
    row=[]
    for (let j = 0; j < cells[i].length; j++) {
      neigbr = summar(findingNeibors(i, j, matrix), matrix);
      switch (neigbr) {
        case 0:
          row.push(0)
          break;
        case 1:
          row.push(0)
          break;
        case 2:
          break;
        default:
          row.push(1)
      }
    }
    nextMatrix.push(row)

  }
  showCells(matrix,element)
  return nextMatrix
}
consoleMatrix(iteration2d(cells,el),'Matrix');
console.log("end");
function testFinding(matrix){
  indexesMatrix=[]
  for(let i=0;i<matrix.length;i++){
    row=[]
    for (let j=0;j<matrix[i].length;j++){
      summ=summar(findingNeibors(i, j, matrix), matrix);
      row.push(summ)
    }
    indexesMatrix.push(row)
  }
  return indexesMatrix
}
matrixQ=[
  [0,0,0,0],
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,0]
]
indexTest=[
  [0,0,0,0],
  [0,3,3,0],
  [0,3,3,0],
  [0,0,0,0]
]
/*
testFinding(matrixQ)==indexTest?console.log('Fine'):consoleMatrix(matrixQ,'testing');consoleMatrix(testFinding(matrixQ),'test variant')
*/
