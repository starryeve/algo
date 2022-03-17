/*
 * @Author: zengfh
 * @Date: 2022-03-17 09:28:39
 * @LastEditTime: 2022-03-17 09:28:50
 * @Description: 
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s:string) {
  const n = s.length
  let res = ''
  const dp = new Array(n).fill([]).map(_ => new Array(n).fill(0))

  for(let i = n - 1; i >= 0; i--) {
      for(let j = i; j <= n - 1; j++) {
          if(s[j] === s[i]) {
              if(j - i <= 1)  {
                  dp[i][j] = 1
                  res = j - i + 1 > res.length ? s.substring(i, j+1) : res
              } else {
                  dp[i][j] = dp[i+1][j-1]
                  if( dp[i][j] === 1) {
                      res = j - i + 1 > res.length ? s.substring(i, j+1) : res
                  }
              }
          }
      }
  }

  return res
};