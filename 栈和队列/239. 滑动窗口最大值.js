/*
 * @Author: zengfh
 * @Date: 2022-01-11 13:59:14
 * @LastEditTime: 2022-01-11 14:17:08
 * @Description: 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  const res = new Array(nums.length - k + 1).fill(-Infinity);
  for (let i = 0; i < nums.length - k + 1; i++) {
    for (let j = i; j < i + k; j++) {
      res[i] = res[i] < nums[j] ? nums[j] : res[i];
    }
  }

  return res;
}
const nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));