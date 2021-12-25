/*
 * @Author: zengfh
 * @Date: 2021-11-26 20:20:13
 * @LastEditTime: 2021-11-27 14:10:50
 * @Description:  区间问题一般都有四种解决方案，即【】，【），（】，（），
 * 最重要的是要理解区间的定义，根据区间的定义来处理边界
 */

/**
 * @description: 左闭右闭区间
 * @param {number[]} nums
 * @param {number} target
 * @return {*}
 */
const binarySearch1 = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let middle = Math.floor( (left + right) / 2 );
    if(nums[middle] > target) {
      right = middle - 1;
    } else if(nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}


/**
 * @description: 左闭右开区间
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
const binarySearch2 = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while(left < right) {
    let middle = Math.floor( (left + right) / 2);
    if(nums[middle] > target) {
      right = middle;
    } else if(nums[middle] < target) {
      left = middle + 1;  
    } else {
      return middle;
    }
  }
  return -1;
}


const test = function() {
  const nums = [1,3,5,6,7];
  const res = binarySearch2(nums, 3);
  console.log(res);
}

test();