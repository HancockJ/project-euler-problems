// Sum square difference

function sumSquareDifference(range){
	sumSquares = 0;
	squareSums = 0;
	for(let i = 1; i <= range; i++){
		sumSquares += i ** 2;
		squareSums += i;
	}
	return ((squareSums * squareSums) - sumSquares);
}

console.log(sumSquareDifference(100));