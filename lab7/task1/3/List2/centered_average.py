def centered_average(nums):
  sum = 0
  largest = nums[0]
  smallest = nums[0]
  
  for i in range(0, len(nums), 1):
    sum = sum + nums[i]
    largest = max(largest,nums[i])
    smallest = min(smallest,nums[i])
    
    
  return (sum - largest - smallest) / (len(nums) - 2)