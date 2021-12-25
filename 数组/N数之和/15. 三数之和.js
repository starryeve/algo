/*
 * @Author: zengfh
 * @Date: 2021-12-11 16:50:05
 * @LastEditTime: 2021-12-11 17:56:43
 * @Description: 可以按照两数之和的思路，外层遍历nums，选定一个nums[i]作为三数中的第一个数，
 * 再从i+1开始，找出剩余的两个数字 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  const threeSum = function(nums) {
//   let map = new Map();
//   let result = []
//   for(let i = 0; i < nums.length - 2; i++) {
//       // 第一个数
//       let first = nums[i];
//       for(let j = i+1; j < nums.length; j++) {
//           // 第三个数
//           let second = 0 - nums[j] - first;
//           if(map.has(second)) {
//               result.push([first, second, nums[j]]);
//           }
//           map.set(nums[j], j);
//       }
//       map.clear();
      
//   }
//   return result;
// };

const threeSum = function(nums) {
  const len = nums.length;
  const res = [];
  if(len < 3) return [];

  nums.sort((a,b) => a - b);
  
  for (let i = 0; i < len - 2; i++) {
    if(nums[i] > 0) break;
    let l = i + 1, r = len - 1;
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if(sum < 0) {
        l++;
        continue
      }
      if(sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);
      // b c去重
      while(l < r && nums[l] === nums[++l]);
      while(l < r && nums[r] === nums[--r]);
    }
  }

  return res;
};

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

