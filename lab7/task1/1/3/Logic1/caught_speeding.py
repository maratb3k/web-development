def caught_speeding(speed, is_birthday):
  speeD = 0
  if is_birthday:
    speeD = 5
  
  result = 0
  
  if speed <= 60 + speeD:
    result = 0
  elif speed < 81 + speeD:
    result = 1
  else:
    result = 2
    
  return result