let el = document.createElement("div");
document.body.appendChild(el);
/* testing
document.addEventListener('click',e=>(){
	if (e.style.backgroundColor=='red'){
		e.style.backgroundColor='black';
	}
	else{
		e.style.backgroundColor='red';
	}
})
*/
class CellularAutomate {
	constructor(options) {
		this.rules = options.rules
		this.binarity = options.binarity //1 or 0 
		this.colors = options.colors // rgb(),'white',['white','black']
		this.tor = options.tor // 1 or 0
		this.SetedMatrix = []
		this.element = options.element // DOM element
		this.dimentions = options.dimentions // how mush dimentions 1,2...
		this.sizes = options.sizes // [10,10]
		this.logs = [] // last iterations
	}
	changeHTML = function(sizes) { // still in test
		for (let i = 0; i < (sizes[0] * sizes[1]); i++) {
			document.body.appendChild(document.createElement("div"))
		}
	}
	get infoSelf() {
		return [
			['rules', this.rules],
			['binarity', this.binarity],
			['colors', this.colors],
			['tor', this.tor],
			['SetedMatrix', this.SetedMatrix],
			["element", this.$element],
			['dimentions', this.dimentions]
		]
	}
	get getSetedMatrix() {
		return this.SetedMatrix
	}
}
class oneDimentionalCellularAutomate extends CellularAutomate {
	constructor(options) {
		super(options),
			this.SetedMatrix = '',
			this.dimentions = 1
	}
	set RandomMatrix(length) {
		this.SetedMatrix = ''
		for (let i = 0; i < length; i++) {
			Math.floor(Math.random() * 2) ? this.SetedMatrix += '*' : this.SetedMatrix += '-'
		}

	}
}
class twoDimentionalCellularAutomate extends CellularAutomate {
	constructor(options) {
		super(options),
			this.SetedMatrix = [],
			this.dimentions = 2
	}
	set RandomMatrix(argument) { //[x,y]
		this.sizes = [argument[0], argument[1]]
		for (let i = 0; i < argument[0]; i++) {
			let row = []
			for (let j = 0; j < argument[1]; j++) {
				row.push(Math.floor(Math.random() * 2))
			}
			this.SetedMatrix.push(row)
		}
	}
	showCells = function() {
		this.element.innerHTML = "";
		for (let i = 0; i < this.SetedMatrix.length; i++) {
			this.element.innerHTML += "\n";
			for (let j = 0; j < this.SetedMatrix[i].length; j++) {
				this.element.innerHTML += this.SetedMatrix[i][j];
			}
		}
	}
	iterationMatrix = function(matrix, counter) {
		let nextMatrix = [];
		for (let i = 0; i < matrix.length; i++) {
			let row = [];
			for (let j = 0; j < matrix[i].length; j++) {
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

		//consoleMatrix(nextMatrix, 'matrix', counter)
		this.SetedMatrix = nextMatrix
		//this.showingColors(trying.SetedMatrix,[100,100],['black','red'])
		//setTimeout(this.iterationMatrix(this.SetedMatrix,counter+1),5000)
	}
	settingCellsInColors = function(box, matrix, sizes, colors) { // document.body,SetedMatrix,[10,10],['black','white']
		box.style.display = 'grid';
		box.style.gridTemplateRows = ` repeat(${sizes[0]}, 1fr)`;
		box.style.gridTemplateColumns = ` repeat(${sizes[1]}, 1fr)`;
		box.style.gridGap = '1px';
	}
	showingColors = function(matrix, sizes, colors) { // SetedMatrix,[10,10],['black','white']
		let counter = 0
		for (let i = 0; i < sizes[0]; i++) {
			for (let j = 0; j < sizes[1]; j++) {
				counter += 1
				if (matrix[i][j]) {
					document.querySelector(` div:nth-child(${counter})`).style.backgroundColor = colors[0];
				} else {
					document.querySelector(` div:nth-child(${counter})`).style.backgroundColor = colors[1];
				}
			}
		}
		this.logs.push(matrix)
	}
	iterationFull = function(box, matrix, sizes, colors, counter) { // in test
		this.showingColors(matrix, sizes, colors);
		this.iterationMatrix(matrix, counter);
		setTimeout(this.iterationFull(box, matrix, sizes, colors, counter), 5000)

	}
}

console.clear();

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
let trying = new twoDimentionalCellularAutomate({
	rules: 'life',
	binarity: 1,
	colors: ['white', 'black'],
	tor: 1,
	element: el,
	sizes: [100, 100]
})
//trying.changeHTML(trying.sizes) testing,still not ready
trying.RandomMatrix = trying.sizes
trying.settingCellsInColors(document.body, trying.SetedMatrix, trying.sizes, ['black', 'red'])
trying.showingColors(trying.SetedMatrix, trying.sizes, ['black', 'red'])
//trying.iterationFull(document.body,trying.SetedMatrix,[100,100],['black','red'],0)
