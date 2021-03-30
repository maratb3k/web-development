def front3(str):
  if len(str) >= 3:
    chars = str[:3]
  else:
      chars = str[:len(str)]
  return chars*3