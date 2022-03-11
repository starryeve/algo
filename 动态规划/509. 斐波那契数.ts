/*
 * @Author: zengfh
 * @Date: 2022-03-11 08:07:52
 * @LastEditTime: 2022-03-11 08:18:57
 * @Description: 
 */
const fib = function(n: number): number {
  if(n <= 1)  return n
  // 1. 确定dp数组及下标含义
  //    dp[i]的定义是：第 i 个数的斐波那契数值是 dp[i]

  // 2. 确定递推公式 dp[i] = dp[i-1] + dp[i-2]

  // 3. dp数组初始化
  const dp = new Array<number>(2)
  dp[0] = 0
  dp[1] = 1

  // 4. 确定遍历顺序
  //    从递归公式dp[i] = dp[i-1] + dp[i-2]看出，dp[i]
  //    依赖dp[i-1]和dp[i-2]，那么遍历顺序一定是从前往后的 

  // 5. 举例推到dp数组
  for (let i = 2; i <= n; i++) {
    let sum: number = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }

  return dp[1]
}