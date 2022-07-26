
function factorial(n) {
if(n === 1){
	return 1;
} else {
	return (n * factorial(n - 1)).toLocaleString('fullwide', {useGrouping:false}) ;
}
}

function sumOfDigits(n){
	let sum = 0;
	for(let i = 0; i < n.length; i++){
		// console.log(i)
		sum += parseInt(n[i]);
	}
	return sum;
}
console.log(factorial(100))

console.log(sumOfDigits(factorial(100)));