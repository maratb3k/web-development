def extra_end(str):
  size = len(str)
  if size <= 2:
    return str * 3
  else:
    sub = str[size-2:size]
    return sub * 3