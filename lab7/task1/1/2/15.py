#Set .union() Operation
n = int(input())
nset = set(map(int, input().split()))
b = int(input())
bset = set(map(int, input().split()))
ans = nset.union(bset)
print(len(ans))