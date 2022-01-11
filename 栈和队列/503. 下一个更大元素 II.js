/*
 * @Author: zengfh
 * @Date: 2022-01-11 14:30:49
 * @LastEditTime: 2022-01-11 15:16:13
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack = []; // 单调栈

  for (let i = 0; i < 2 * n - 1; i++) { // 遍历两遍
    while(stack.length) {
      const top = stack.length - 1;
      if(nums[i % n] >  nums[stack[top]]) {
        res[stack[top]] = nums[i % n];
        stack.pop();
      } else {
        break;
      }
    }

    stack.push(i % n);
  }

  return res;
}

const nums = [1,2,1];
console.log(  nextGenerateElements(nums) );