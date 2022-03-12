/*
 * @Author: zengfh
 * @Date: 2022-03-12 08:06:14
 * @LastEditTime: 2022-03-12 08:18:29
 * @Description: 
 */
const minCostClimbingStairs = function(cost: number[]):number {
  // 1. 确定dp数组及下标含义：dp[i]表示到达第i个台阶所花费的最少体力为dp[i]
  // 2. 确定递推公式：dp[i] = min(dp[i-1], dp[i-2]) + cost[i]
  // 3. dp数组初始化：dp[0] = cost[0] dp[1] = cost[1]
  // 4. 确定遍历顺序：从前往后
  // 5. 举例推导dp数组：
  //    [1,100,1,1,1,100]
  //    [1,100,2,3,4,104]
  const dp = new Array<number>(cost.length).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
  }
    
  return Math.min(dp[dp.length - 1], dp[dp.length - 2])
} 