#Mutations
str = input()
pos, char = input().split()
pos = int(pos)
front = str[:pos]
back = str[pos+1:]
print(front + char + back)
    

