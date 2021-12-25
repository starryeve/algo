/*
 * @Author: zengfh
 * @Date: 2021-12-05 16:06:34
 * @LastEditTime: 2021-12-05 17:01:59
 * @Description: 数组原地操作移动的，基本都要用到快慢指针。这道题还要保证数组的末尾都是 0 
 */
// var moveZeroes = function(nums) {
//   let l = nums.length;
//   for (let i = 0; i < l; i++) {
//    if(nums[i] === 0) {
//      for (let j = i + 1; j < l; j++) {
//        let temp = nums[j - 1];
//        nums[j - 1] = nums[j];
//        nums[j] = temp;
//      }
//      l --;
//      i --;
//    } 
//   }

//   return nums;
// };
const moveZeroes = function(nums) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if(nums[fastIndex] !== 0) {
      nums[slowIndex] = nums[fastIndex];
      if(fastIndex > slowIndex) {
        nums[fastIndex] = 0;
      }
      
      slowIndex ++;
    }
  }
  return nums;
} 

console.log(moveZeroes([1]));