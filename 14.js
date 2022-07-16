function collatzSequence(current, depth){
	depth += 1;
	if(current === 1){
		return (depth)
	}else if(current % 2 === 0){
		current = current / 2;
		return collatzSequence(current, depth)
	} else {
		current = (current * 3) + 1
		return collatzSequence(current, depth)
	}
}

function findLongestCollatz(maxStartingNumber){
	let longest = 0;
	let max = 0;
	for(let i = 1; i <= maxStartingNumber; i++){
		let temp = collatzSequence(i, 0)
		if(temp > max){
			longest = i;
			max = temp;
		}
	}
	return (longest + " - " + max)
}

console.log(findLongestCollatz(1000000));