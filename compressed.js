let el = document.createElement("div");
document.body.appendChild(el);

//examples of using
/*
const Automate=new CellularAutomate({
	rules:'life',
	binarity:1,
	colors:['white','black'],
	tor:1,
	element:el
})
Automate.RandomMatrix =[8,8]
let cells=Automate.getSetedMatrix
*/
/*
matrixes = []
matrixes.push(cells)
for (let iteration = 0; iteration < 50; iteration++) {
	matrixes.push(iteration2d(matrixes[matrixes.length - 1], el, iteration));
};
*/
class CellularAutomate {
	constructor(options) {
		this.rules = options.rules
		this.binarity = options.binarity //1 or 0
		this.colors = options.colors // rgb(),'white',['white','black']
		this.tor = options.tor // 1 or 0
		this.SetedMatrix = []
		this.$element=options.element // DOM element
		this.dimentions=options.dimentions // how mush dimentions 1,2...
	}
	get infoSelf() {
		return [
			['rules', this.rules],
			['binarity', this.binarity],
			['colors', this.colors],
			['tor', this.tor],
			['SetedMatrix', this.SetedMatrix],
			["element",this.element],
			['dimentions',this.dimentions]
		]
	}
	set RandomMatrix(argument) { //[x,y] or string
		// set 2 dimentional or 1 dimentional matrix
		if (typeof(argument)=='string'){
			this.SetedMatrix=argument
			el.innerHTML = argument;
			return this.SetedMatrix
		}
		for (let i = 0; i < argument[0]; i++) {
			let row = []
			for (let j = 0; j < argument[1]; j++) {
				row.push(Math.floor(Math.random() * 2))
			}
			this.SetedMatrix.push(row)
		}
	}
	get getSetedMatrix() {
		return this.SetedMatrix
	}
}
class oneDimentionalCellularAutomate extends CellularAutomate{
	constructor(options){
		super(options.binarity),
		super(options.colors),
		super(options.tor),
		super(options.$element),
		this.SetedMatrix=options.SetedMatrix
		this.dimentions=1
	}
}
/*
const Automate=new CellularAutomate({
	rules:'life',
	binarity:1,
	colors:['white','black'],
	tor:1
})
Automate.RandomMatrix =[8,8]
let cells=Automate.getSetedMatrix
*/
console.clear();
function showCells(matrix, element) {
	element.innerHTML = "";
	for (let i = 0; i < matrix.length; i++) {
		element.innerHTML += "\n";
		for (let j = 0; j < matrix[i].length; j++) {
			element.innerHTML += matrix[i][j];
		}
	}
}
function consoleMatrix(matrix, matrixName, counter) {
	console.log(matrixName, 'iteration ', counter);
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
function iteration2d(matrix, element, counter) {
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
	setTimeout(showCells(matrix, element), 5000);
	consoleMatrix(matrix, 'matrix', counter)
	return nextMatrix;
}
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
let iteration1d = () => {
  let newCells = "";
  for (let i = 0; i < cells.length; i++) {
    let current = "";
    let left = "";
    let right = "";
    current = cells[i];
    i === 0 ? (left = cells[cells.length - 1]) : (left = cells[i - 1]);
    i === cells.length - 1 ? (right = cells[0]) : (right = cells[i + 1]);
    let steck = left + current + right;
    //console.log(steck);
    newCells += rules[steck];
  }
  let el = document.createElement("div");
  document.body.appendChild(el);
  el.innerHTML = newCells;
  cells = newCells;
  setTimeout(iteration1d, 400);
};
const Automate=new CellularAutomate({
	rules:'life',
	binarity:1,
	colors:['white','black'],
	tor:1
})
Automate.RandomMatrix ='-------------------------------------------------------*-------------------------------------------------------'
