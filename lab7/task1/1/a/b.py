a = int(input())
txt1 = "The next number for the number {} is {}."
txt2 = "The previous number for the number {} is {}."
print(txt1.format(a, a+1))
print(txt2.format(a, a-1))