//1p,2p,5p,10p,20p,50p,1e,2e
// 1e = 100p
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can 2e be made using any number of coins?

// Make it all 1 unit?
// 1 unit = 1P
// 0-7
let units = [1, 2, 5, 10, 20, 50, 100, 200]


// Going to try and do it with random probability
/*
function randomWay(){
	let max = 7;
	let remaining = 50;
	let combination = [];
	while(remaining != 0){
		let tryCoin = Math.floor(Math.random() * max)
		if(remaining - units[tryCoin] >= 0){
			remaining = remaining - units[tryCoin];
			combination.push(units[tryCoin]);
		} else {
			max = tryCoin - 1;
		}
	}
	return combination.sort(function(b, a) {
  if( a === Infinity ) 
    return 1; 
  else if( isNaN(a)) 
    return -1;
  else 
    return a - b;
});
}
let Combinations = []
for(let i = 0; i < 10000000; i++){
	let combo = randomWay().toString();
	if(Combinations.includes(combo) == false){
		Combinations.push(combo);
	}
	if(i % 1000000 == 0){
		console.log(Combinations.length)
	}
}
console.log(Combinations.length)
*/
// Although fun, this isn't practical.

// Let's start with ways to make 0 units and go to 200

let target = 200;
let Combinations = new Array(target + 1).fill(0);

//Base case
Combinations[0] = 1;
for(let i = 0; i < units.length; i++){
	for(let j = units[i]; j <= target; j++) {
		Combinations[j] += Combinations[j - units[i]];
	}
}

console.log(Combinations[200]);
// Solution = 73682