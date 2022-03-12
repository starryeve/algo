/*
 * @Author: zengfh
 * @Date: 2022-03-12 08:22:37
 * @LastEditTime: 2022-03-12 08:56:39
 * @Description: 使用 dfs 时间复杂度为O(2^(m+n-1))
 */
// const uniquePaths = function(m: number, n: number): number {d
//   let num = 0
//   function dfs(i: number, j:number, m: number, n: number) {
//     if(i > m || j > n)  return
//     if(m === i && n === j) {
//       num ++
//       return
//     }

//     dfs(i+1,j, m, n )
//     dfs(i, j+1, m, n)
//   }

//   dfs(1, 1, m, n)

//   return num
// }

const uniquePaths = function(m: number, n: number): number {
  // 1. 确定dp数组及下标含义:dp[i][j] 代表从（0，0）出发，到（m,n）的路径数

  // 2. 确定递推公式: dp[i][j] = dp[i-1][j] + dp[i][j-1]

  // 3. dp素组初始化：dp[0,j] = 1, dp[i,0] = 1

  // 4. 确定遍历顺序: 从左到右边，从上到下

  // 5. 举例推导

  const dp: number[][] = new Array<number>(m).fill(0)
  .map(_ => new Array<number>(n).fill(0))
console.log(dp);

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]

}

const m = 3, n = 7
console.log( uniquePaths(m, n) );
