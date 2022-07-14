// Find 10,001st prime


function xPrime(x){
	let primes = [2];
	let counter = 3;
	while(primes.length < x){
		if(!primes.find(prime => (counter % prime) == 0)){
			primes.push(counter);
		}
		counter++;
	}
	return primes[x -1];
}

console.log(xPrime(10001));

