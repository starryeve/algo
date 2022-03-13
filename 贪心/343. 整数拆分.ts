/*
 * @Author: zengfh
 * @Date: 2022-03-13 08:56:27
 * @LastEditTime: 2022-03-13 08:57:52
 * @Description: 
 */

function integerBreak(n: number): number {
  if(n === 2) return 1
  if(n === 3) return 2
  if(n === 4) return 4

  let result = 1
  while(n > 5) {
    result *= 3
    n -= 3
  }
  result *= n
  return result
};