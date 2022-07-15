//What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

const {readFileSync, promises: fsPromises} = require('fs');

function ReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const rows = contents.split("\n");

  let grid = []

  for(i in rows){
  	grid.push(rows[i].split(" "));
  }

  return grid;
}

let grid = ReadFile('./11-data.txt');

function checkGridDown(grid) {
	let max = 0;
	for(let x = 0; x < 17; x++){
		for(let y = 0; y < 20; y++){
			let product = grid[x][y] * grid[x + 1][y] * grid[x + 2][y] * grid[x + 3][y]
			if(product > max){
				max = product;
			}
		}

	}
	return max;
}

function checkGridRight(grid) {
	let max = 0;
	for(let x = 0; x < 20; x++){
		for(let y = 0; y < 17; y++){
			let product = grid[x][y] * grid[x][y + 1] * grid[x][y + 2] * grid[x][y + 3]
			if(product > max){
				max = product;
			}
		}

	}
	return max;
}

function checkGridDiagonalRight(grid) {
	let max = 0;
	for(let x = 0; x < 17; x++){
		for(let y = 0; y < 17; y++){
			let product = grid[x][y] * grid[x + 1][y + 1] * grid[x + 2][y + 2] * grid[x + 3][y + 3]
			if(product > max){
				max = product;
			}
		}

	}
	return max;
}

function checkGridDiagonalLeft(grid) {
	let max = 0;
	for(let x = 0; x < 17; x++){
		for(let y = 20; y > 3; y--){
			let product = grid[x][y] * grid[x + 1][y - 1] * grid[x + 2][y - 2] * grid[x + 3][y - 3]
			if(product > max){
				max = product;
			}
		}

	}
	return max;
}


let max = 0;
console.log(checkGridRight(grid))
console.log(checkGridDown(grid))
console.log(checkGridDiagonalRight(grid))
console.log(checkGridDiagonalLeft(grid))
console.log("done")













