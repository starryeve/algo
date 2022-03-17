/*
 * @Author: zengfh
 * @Date: 2022-03-13 10:23:49
 * @LastEditTime: 2022-03-17 09:09:16
 * @Description: 
 */

  // 1. 确定dp数组，dp[i][j]表示范围为[i,j]的子串是否是回文串，如果是，则为true
 

  // 2. 确定递推公式：
  //    dp[i][j]
  //    1) s[i] !== s[j]，则dp[i][j] = false
  //    2) s[i[ === s[j]:
  //       - i === j || j - i === 1（即子串长度为2），dp[i][j] = true
  //       j - i >= 2, dp[i][j] = dp[i+1] === dp[j-1] ? true : false

  // 3.dp 初始化：dp[i][j] 为 0
  // 4. 确定遍历顺序：从递推公式，看出dp[i+1][j-1]在dp[i][j]的左下角，则遍历一定要从下到上，
  //    从左到右(注意只遍历矩阵的右上部分)

  var countSubstrings = function(s:string) {
    const n = s.length;
    const dp = new Array(n).fill([]).map(_ => new Array(n).fill(0))


    let res = 0
    for(let i = n - 1; i >= 0; i--) {
        for(let j = i; j <= n - 1  ; j++ ) {
            if(s[j] === s[i]) {
                if(j - i <= 1) {
                     dp[i][j] = 1

                     res++
                } else {
                    dp[i][j] = dp[i+1][j-1]
                    if(dp[i][j] === 1)  res++
                }
            }
        }
    }


    return res
};

const s='aaa'

console.log(countSubstrings(s));
 