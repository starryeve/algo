/*
 * @Author: zengfh
 * @Date: 2022-03-10 08:43:21
 * @LastEditTime: 2022-03-10 09:03:27
 * @Description: 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  let ans = 0
  let start = 0
  let end = 0
  while(end < nums.length - 1) {
    maxPos = 0
    for (let i = start ; i <= end; i++) {
     maxPos = Math.max(nums[i] + i, maxPos)
    }
    start = end + 1// 下一次起跳范围开始的格子
    end = maxPos
    ans ++
  }
};