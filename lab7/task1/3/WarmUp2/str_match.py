def string_match(a, b):
  shorter = min(len(a), len(b))
  return sum(1 for i in range(shorter-1) if a[i:i+2] == b[i:i+2])