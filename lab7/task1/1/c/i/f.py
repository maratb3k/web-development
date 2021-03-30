x = int(input())
while(x > 0):
    dig = x % 10
    if(rev == 1):
        rev = dig
    else:
        rev = rev*10 + dig
    x = x // 10
print(rev)