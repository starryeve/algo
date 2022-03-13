/*
 * @Author: zengfh
 * @Date: 2022-03-12 09:39:17
 * @LastEditTime: 2022-03-12 09:48:54
 * @Description: 
 */

const maxSubArray = function(nums: number[]): number {
  if(nums.length === 0) return 0

  // 1. 确定dp数组及下标含义: dp[i]表示包括nums[i]的最大连续字数之和
  const dp = new Array<number>(nums.length).fill(0)
  
  // 2. dp递推公式, dp[i] = dp[i-1] + nums[0] || dp[i] = nums[i]

  // 3. dp初始化
  dp[0] = nums[0]
  let res = dp[0]

  // 4. dp遍历顺序，从左到右
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
    res = dp[i] > res ? dp[i] : res
  }

  return res
}