/*
 * @Author: zengfh
 * @Date: 2021-11-27 14:03:39
 * @LastEditTime: 2021-11-27 15:09:04
 * @Description: 直观的做法是从0开始遍历到n，寻找到某一个i满足 i*i>=n, 时间复杂度为n
 * 由于是从0开始，可以认为是有序数组。采用二分降低时间开销
 */


/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) { 
  if(x <= 0) {
    return 0;
  }
  let left = 1;
  let right = x + 1;

  while(left < right) {
    let middle = Math.floor((left + right) / 2);
    let square = middle * middle; 
    if(square > x) {
      right = middle;
    } else if(square < x) {
      left = middle + 1
    } else {
      return middle;
    }
  }

  return left - 1;
};


console.log(mySqrt(3));