/*
 * @Author: zengfh
 * @Date: 2021-11-27 14:03:39
 * @LastEditTime: 2021-11-27 15:02:19
 * @Description: 
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;
  let middle = 0;
  while(left < right) {
    middle =  Math.floor((right + left) / 2);
    if(nums[middle] > target) {
      right = middle;
    } else if(nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle
    }
  }

  return nums[middle] > target ? middle : middle + 1;
};



const test = function() {
  const nums = [1,3,5];
  const res = searchInsert(nums, 0);
  console.log(res);
}

test();
