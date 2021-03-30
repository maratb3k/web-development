n = int(input())
list = input().split()
for i in range(n):
    list[i] = int(list[i])
cnt = 0
for i in range(len(list)):
    if(list[i] > 0):
        cnt+=1
print(cnt)
    