def end_other(a, b):
  
  a = a.lower()
  b = b.lower()
  
  large = a
  small = b
  
  if (len(a) < len(b)):
    small = a
    large = b
  
  check = large[len(large) - len(small): len(large)]
  
  return check == small