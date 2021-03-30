def no_teen_sum(a, b, c):
  if fix_teen(a) and fix_teen(b) and fix_teen(c):
    return 0
  if fix_teen(b) and fix_teen(c):
    return a
  if fix_teen(a) and fix_teen(c):
    return b
  if fix_teen(a) and fix_teen(b):
    return c
  if fix_teen(a):
    return b + c
  if fix_teen(b):
    return a + c
  if fix_teen(c):
    return b + a
    return b
  else: 
    return a + b + c
    
    
def fix_teen(n):
  if n == 15 or n == 16:
    return False
  elif n >= 13 and n <= 19:
    return True
  else: return False