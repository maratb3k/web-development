def front_times(str, n):
  if len(str) >= 3:
    chars = str[:3]
  else:
      chars = str[:len(str)]
  return chars*n
