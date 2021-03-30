def left2(str):
  size = len(str)
  if size <= 2:
    return str
  else:
    return str[2:size] + str[:2]
