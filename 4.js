// Palindrome Problemn

function isPalindrome(word) {

	for(let i = 0; i < word.length; i++){
		if(word[i] !== word[word.length - (i+1)]){
			return false;
		}

	}
	return true;
}

function findPalindrome(){
	let palindromes = [];
	for(let a = 999; a > 1; a--){
		for(let b = 999; b > 1; b--){
			if(isPalindrome(String(a * b))){
				palindromes.push(a * b);
			}
		}
	}
	return Math.max(...palindromes);
}

console.log(findPalindrome())