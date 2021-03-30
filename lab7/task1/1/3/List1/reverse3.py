def reverse3(nums):
  new = []
  for i in range(2, -1, -1):
    new.append(nums[i])
  return new
