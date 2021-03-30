def max_end3(nums):
  if nums[0] > nums[2]:
    maximum = nums[0]
  else:
    maximum = nums[2]
  for i in range(len(nums)):
    nums[i] = maximum
  
  return nums
