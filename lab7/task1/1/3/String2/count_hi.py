def count_hi(str):
  hi = "hi"
  cnt = 0
  for i in range(len(str)-1):
    if str[i] + str[i+1] == hi:
      cnt+=1
  return cnt
