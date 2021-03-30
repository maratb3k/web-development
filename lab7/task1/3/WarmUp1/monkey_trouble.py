def monkey_trouble(a_smile, b_smile):
  if (a_smile and b_smile) or (not b_smile and not a_smile):
    return True
  else:
    return False