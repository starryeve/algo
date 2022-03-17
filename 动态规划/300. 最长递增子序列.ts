/*
 * @Author: zengfh
 * @Date: 2022-03-17 10:03:39
 * @LastEditTime: 2022-03-17 10:07:46
 * @Description: 
 */
var lengthOfLIS = function(nums: number[]) {
  const dp = new Array(nums.length).fill(1)
  let res = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i] )
    }
    if(dp[i] > res)  res = dp[i]
  }

  return res
};