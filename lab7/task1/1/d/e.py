n = int(input())
list = input().split()
for i in range(n):
    list[i] = int(list[i])
cnt = 0
for i in range(1, len(list)):
    if((list[i] > 0 and list[i-1] > 0) or (list[i] < 0 and list[i-1] < 0)):
        cnt+=1
if(cnt > 0):
    print("YES")
else:
    print("NO")
    