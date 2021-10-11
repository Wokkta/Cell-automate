console.log("start");
let cells = [
  ["-------*-------"]["---------------"]["---------------"]["---------------"][
    "---------------"
  ]
];
let rules = {
  "***": "*",
  "**-": "*",
  "*-*": "*",
  "-**": "*",
  "---": "-",
  "-*-": "*",
  "--*": "*",
  "*--": "*"
};

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
let el = document.createElement("div");
document.body.appendChild(el);
el.innerHTML = cells;
iteration1d();

console.log("end");
