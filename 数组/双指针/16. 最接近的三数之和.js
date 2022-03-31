/*
 * @Author: zengfh
 * @Date: 2022-03-31 08:40:24
 * @LastEditTime: 2022-03-31 08:40:25
 * @Description: 
 */

function threeSumClosest( num ,  target ) {
  if(num.length < 3)   {
      return num.reduce((pre, cur, idx) => cur += pre, 0)
  }
  num.sort((a, b) => a - b)
  let res = Infinity
  for(let i = 0; i < num.length - 2; i++) {
      let l = i + 1, r = num.length - 1
      while(l < r) {
          let sum = num[i] + num[l] + num[r]
          if(sum < target) l++
          else r --
          if(Math.abs(sum - target) < Math.abs(res - target)) res = sum
      }
  }
  return res
}