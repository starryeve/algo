/*
 * @Author: zengfh
 * @Date: 2022-04-01 09:16:20
 * @LastEditTime: 2022-04-01 09:25:42
 * @Description: 
 */
const trap = function(height: number[]): number{
  const n = height.length
  if(n === 0) {
    return 0
  }

  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for(let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for(let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  let res = 0
  for(let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return res
}