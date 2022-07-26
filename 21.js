function findSumOfFactors(x){
	let factors = []
	for(let i = x - 1; i > 0; i--){
		if(x % i == 0){
			factors.push(i);
		}
	}
	console.log(factors)
	return factors.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(findSumOfFactors(220))