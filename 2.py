def fib(a, b, max):
    c = a + b
    if b > max:
        return [a]
    else:
        return fib(b, c, max) + [a]


sum = 0
fibs = fib(1, 2, 4000000)
print(fibs)
for i in fibs:
    if i % 2 == 0:
        sum = sum + i
print(sum)