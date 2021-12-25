
/*
 * @Author: zengfh
 * @Date: 2021-11-27 14:03:39
 * @LastEditTime: 2021-11-27 14:10:31
 * @Description: 直观的思路是定义两个变量，记录第一次和最后一次arr[i] == target时候的i,
 * 时间复杂度为O（n, 考虑到数据有序，可以使用二分，分别寻找左右边界，时间复杂度为O（2logn）
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  const getLeftBorder = (nums, target) => {
    let left = 0;
    let right = nums.length;
    let leftBorder = -1;
    while(left < right ) {
      let middle = Math.floor( (left + right) / 2);
      if(target > nums[middle]) { // 寻找左边界，nums[middle] == target的时候更新lefBorder = right
        left = middle + 1;
      } else { 
        right = middle;
        if(target == nums[middle]) {
          leftBorder = right;
        }
      }
    }

    return leftBorder;
  }

  const getRightBorder = (nums, target) => {
    let left = 0;
    let right = nums.length;
    let rightBorder = -1;
    while(left < right) {
      let middle = Math.floor( (left + right) / 2);
      if(target >= nums[middle]) { // 寻找右边界，nums[middle] == target的时候更新rightBorder = left
        left = middle + 1;
        if(target == nums[middle]) {
          rightBorder = middle;
        }
      } else { 
        right = middle;
      }
    }

    return rightBorder;
  }



  let left = getLeftBorder(nums, target);
  let right = getRightBorder(nums, target);

  return [left, right];
};



var searchRangeByApi = function(nums, target) { // O(n)
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}

console.log(searchRange([5,7,7,8,8,10], -1)); 