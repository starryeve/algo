/*
 * @Author: zengfh
 * @Date: 2021-11-27 15:15:26
 * @LastEditTime: 2021-12-05 15:40:14
 * @Description: 
 * 
 * 容易想到的做法是外层循环遍历i，找到要删除的值，
 * 内层循环j进行数组内部的移动更新，需要注意每次内层移动之后都要继续在i的位置上重新判断
 * 因为移动后的i是移动前的i+1，同时每次移动完毕，length要-1，因为放到最后的数就是要移除的，
 * 我们不需要再考虑，时间复杂度为O（n^2），没有额外的变量开销，空间复杂度为O（1）
 * 
 * 快慢指针
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number} 
 */
// var removeElement = function(nums, val) {
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     if(nums[i] === val) {
//       for (let j = i+1; j < length; j++) {
//         nums[j - 1] = nums[j];
//       }
//       i --;
//       length --;
//     }  
//   }
//   nums.splice(length);
//   return length;
// };
const removeElement = function(nums, val) {
  let slowIndex = 0; // 慢指针
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if(nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex ++;
    }
  }
  return slowIndex;
}

let nums = [1,2,2,3,3,4], val = 3

console.time();
console.log(removeElement(nums, val));
console.log(nums)
console.timeEnd();