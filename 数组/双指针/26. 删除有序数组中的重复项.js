/*
 * @Author: zengfh
 * @Date: 2021-11-29 22:16:25
 * @LastEditTime: 2021-12-05 14:48:51
 * @Description: 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if(nums[i + 1] === nums[i]) {
      for (let j = i + 2; j < length; j++) {
        nums[j - 1] = nums[j];
      }
      length --;
      i --; // 记得i --,因为我们经过移除操作之后，仍然需要从i开始跟最新的i+1进行比较
      nums.splice(length);
    }
  }
  console.log(nums);
  // nums.splice(length + 1);
  return length;
};

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while(nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
  }
};

// const removeDuplicates = function(nums) {
//   let length = nums.length;
//   if(length === 0) {
//     return 0;
//   }
//   let fastIndex = slowIndex = 1;
//   while(fastIndex < n) {
//     if(nums[fastIndex] !== nums[fastIndex - 1]) {
//       nums[slowIndex] = nums[fastIndex];
//       slowIndex ++;
//     }
//     fastIndex ++;
//   }

//   return slowIndex;
// }

console.log(removeDuplicates([0,0,1,1,1,4]));