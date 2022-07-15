// Special Pythagorean Triplet

// Going to solve this with a RANDOM brute force search for fun.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// A + B + C = 1000
// A < B < C
function getRandomTriplet(){
	let a = 3;
	let b = 2;
	let c = 1;
	while(c < b){
		a = getRandomInt(0, 1000);
		b = getRandomInt(a, 1000 - a);
		c = 1000 - a - b;
	}
	return([a,b,c]);
}

function randomSearch(){
	let counter = 0;
	while(true){
		counter++;
		let triplet = getRandomTriplet();
		if(counter % 1000 == 0){
			console.log(counter);
		}
		cSquared = triplet[2] ** 2;
		if(cSquared == triplet[0]**2 + triplet[1]**2){
			return triplet;
		}
	}
}

let triplet = randomSearch();
console.log(triplet);
console.log(triplet.reduce((prev, current) => prev * current, 1));