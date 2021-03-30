def first_two(str):
  size = len(str)
  if size <= 2:
    return str
  else:
    sub = str[:2]
    return sub