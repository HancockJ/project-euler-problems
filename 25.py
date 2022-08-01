# Recursive version (Will have a stack fail on python)
def fibonacci(a, b, index):
	index += 1
	c = a + b;
	print(str(a) + ", " + str(b))
	if(len(str(c)) >= 220):
		return c, index;
	else:
		return fibonacci(b, c, index)
# print(fibonacci(1, 1, 2))



# Normal loop version (Works great)
a = 1
b = 1
swap = 0
index = 2
while(len(str(b)) < 1000):
	index += 1
	swap = a + b
	a = b
	b = swap
print("Index:", index, "Term:", b)
