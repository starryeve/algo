/*
 * @Author: zengfh
 * @Date: 2022-03-12 09:02:57
 * @LastEditTime: 2022-03-12 09:28:50
 * @Description: 
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length, n = obstacleGrid[0].length
  const dp: number[][]  = new Array<Array<number>>(m).fill([])
  .map(_ => new Array<number>(n).fill(0))

  for (let i = 0; i < m  && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = obstacleGrid[i][0]
  }
  for (let j = 0; j < n&& obstacleGrid[0][j] == 0; j++) {
    dp[0][j] =  obstacleGrid[0][j]
  }

  console.log(dp);
  

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if(obstacleGrid[i][j] === 1 ) dp[i][j] = 0
      else dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};


const obstacleGrid =[[1,0]]
console.log(uniquePathsWithObstacles(obstacleGrid) );
