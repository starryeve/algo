/*
 * @Author: zengfh
 * @Date: 2022-03-11 08:21:24
 * @LastEditTime: 2022-03-13 08:51:26
 * @Description: 
 */
const climbStairs = function(n: number): number {
  if(n<=2)    return n
  const dp = new Array<number>(n+1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for(let i = 3; i <=n; i++) {
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}


const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.on('line', data => {
   const n = parseInt(data)
   console.log( climbStairs(n) )
})



