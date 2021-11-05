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
