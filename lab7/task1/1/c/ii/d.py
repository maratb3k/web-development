n = int(input())
num = 1
while num <= n:
    num = num * 2
num = num // 2
if num == n:
    print('YES')
else:
    print('NO')