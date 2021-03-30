def last2(str):
  cnt = 0
  compStr = str[len(str) - 2: len(str)] 
  
  for i in range(len(str) - 2):  
    if str[i:i + 2] == compStr:
      cnt = cnt + 1
      
  return cnt