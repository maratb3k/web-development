n = int(input())
list = input().split()
for i in range(n):
    list[i] = int(list[i])
for i in range(len(list)-1, -1, -1):
    print(list[i], end=' ')