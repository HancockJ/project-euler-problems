def factorial(n):
	if(n == 1):
		return 1;
	else:
		return n * factorial(n-1)

def sum_digits(n):
	sum = 0
	for digit in n:
		# print(digit)
		sum += int(digit)
	return sum

print(sum_digits(str(factorial(100))))