def make_chocolate(small, big, goal):
  smallneeded = goal - big * 5
  if goal > big * 5 + small:
    return -1
  if smallneeded <= small and smallneeded >= 0:
    return smallneeded
  elif smallneeded < 0 and goal % 5 <= small:
    return goal % 5 
  return -1
  