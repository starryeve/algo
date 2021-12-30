/*
 * @Author: zengfh
 * @Date: 2021-12-30 15:36:28
 * @LastEditTime: 2021-12-30 15:59:17
 * @Description: 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const twoMap = new Map(); // 统计两数之和出现过的次数
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2;
      // twoMap.get(sum) ? twoMap.set(sum, twoMap.get(sum) + 1 ) : twoMap.set(sum, 1);
      twoMap.set(sum, (twoMap.get(sum) || 0) + 1);
    }
  }

  let count = 0;
  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const sum = num3 + num4;
      if(twoMap.get(0 - sum)) { // 存在四数之和等于0
        count += twoMap.get(0 - sum); // count加上 0 - 后两数之和 的情况个数
      }
    }
  }

  return count;
};

const nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2];

console.log(fourSumCount(nums1, nums2, nums3, nums4)); 