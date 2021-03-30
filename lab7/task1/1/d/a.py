n = int(input())
list = input().split()
for i in range(n):
    list[i] = int(list[i])
for i in range(len(list)):
    if(i%2 == 0):
        print(list[i], end=' ')
    