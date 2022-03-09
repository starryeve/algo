/*
 * @Author: zengfh
 * @Date: 2022-03-08 09:31:13
 * @LastEditTime: 2022-03-09 09:06:38
 * @Description: 
 */

// const maxSubArray = function(nums) {
//   let res = -Infinity
//   let count
//   for (let i = 0; i < nums.length; i++) { // 设置起始值
//     count = 0
//     for (let j = i; j < array.length; j++) { // 每次从起始值位置i开始遍历数组
//       count += nums[j]
//       res = count > res ? count : res
//     } 
//   }
// }
// 局部最优：当前“连续和”为负数的时候立刻放弃，
// 从下一个元素重新计算“连续和”，因为负数加上下一个元素 “连续和”只会越来越小。
const maxSubArray = function(nums) {
  let res = -Infinity
  let sum = 0
  for (let i = 0; i < nums.length; i++) { // 设置起始值
    sum += nums[i]
    if(sum > res) res = sum // 当亲连续和大于当前结果，更新结果
    if(sum < 0) sum = 0 // 当前连续和已经为负数，则重置为0
  }

  return res
}

const nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums) );