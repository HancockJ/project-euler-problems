// What is the value of the first triangle number to have over five hundred divisors?

function findFactors(x){
	let factors = []
	for(let i = x; i >0; i--){
		if(x % i == 0){
			factors.push(i);
		}
	}
	return factors.length;
}

function highlyDivisible(factors){
	let triangularNumber = 0;
	maxFactors = 0;
	for(i = 1;; i++){
		triangularNumber += parseInt(i);
		if(findFactors(triangularNumber) > factors){
			return triangularNumber;
		}
	}
}

console.log(highlyDivisible(500));