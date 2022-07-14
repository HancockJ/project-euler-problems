// Smallest Multiple

function smallestMultiple(numbers){
	let found = true;
	for(let a = numbers; a != 0; a++){
		found = true;
		for(let i = 1; i < numbers; i++){
			if(a % i != 0){
				found = false;
				break;
			}
		}
		if(found){
			return a;
		}
	}
}

console.log(smallestMultiple(20));