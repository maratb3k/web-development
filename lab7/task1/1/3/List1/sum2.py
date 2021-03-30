def sum2(nums):
  size = len(nums)
  sum = 0
  
  if size == 0:
    sum = 0
  elif size <= 2:
    for i in nums:
      sum += i
  else:
    sum = nums[0] + nums[1]
  
  return sum