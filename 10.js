// Find the sum of all the primes below two million.

function primesBelow(x){
	let primes = [2];
	let counter = 3;
	while(primes[primes.length - 1] < x){
		if(!primes.find(prime => (counter % prime) == 0)){
			primes.push(counter);
		}
		counter++;
	}
	primes.pop();
	return primes.reduce((prev, current) => prev + current, 0);
}

console.log(primesBelow(2000000));