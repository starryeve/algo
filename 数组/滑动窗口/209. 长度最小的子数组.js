/*
 * @Author: zengfh
 * @Date: 2021-12-08 14:23:24
 * @LastEditTime: 2021-12-09 16:41:15
 * @Description: 
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(target, nums) {
//   let minCount = 99999;
//   for (let i = 0; i < nums.length; i++) {
//     let count = 1;
//     let sum = nums[i];
//     if(sum >= target) {
//       minCount = count;
//     }

//     let j = i + 1;
//     while(sum < target && j < nums.length) {
//       sum += nums[j]
//       j ++;
//       count ++;
      
//       if(sum >= target) {
//         minCount = minCount > count ? count : minCount;
//         break
//       }
//     }
//   }

//   return minCount === 99999 ? 0 : minCount;
// };

const minSubArrayLen = function(target, nums) {
  let slow = 0, fast = 0;
  let res = nums.length + 1; // 子数组最长不会超过自身
  let sum = 0;
  /** 1.
  while(fast < nums.length) {
    sum += nums[fast++];
    while(sum >= target) {
      res = res < fast - slow ? res : fast - slow;
      sum -= nums[slow++];
    }
  }
  */

  // 2.
  for ( ; fast < nums.length; fast++) {
    sum += nums[fast];
    if(sum >= target) {
      const num = fast - slow + 1;
      res = num < res ? num : res;
      sum = sum - nums[slow] - nums[fast];
      fast --;
      slow ++;
    }
  }

  return res > nums.length ? 0 : res;
}
const target  = 3, nums = [1,2,3,4,5];

console.log(minSubArrayLen(target, nums));