/*
 * @Author: zengfh
 * @Date: 2021-12-06 22:43:57
 * @LastEditTime: 2021-12-08 17:22:50
 * @Description: 考虑负数，有序数组元素平方的最大值总是在两端出现，因此可以使用头尾指针遍历，
 * 每次只比较两端元素的平凡，大者添加到数组最后，时间复杂度为O(n), 空间复杂度为O(n)
 */
const sortedSquares  = function(nums) {
  const res = [];
 
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);

    if(left > right) {
      res.unshift(left * left);
      i ++;
    } else {
      res.unshift(right * right);
      j --;
    }
    
  }

  return res;
}


const nums =  [-4,-1,0,3,10];
console.log(sortSquares(nums));