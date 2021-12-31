/*
 * @Author: zengfh
 * @Date: 2021-12-31 15:28:42
 * @LastEditTime: 2021-12-31 15:53:34
 * @Description: 使用哈希表，两重for循环判断map中是否存在0 - (a + b)，时间复杂度为O（n^2），但还需要对结果数组进行去重，开销是很大的
 * 
 */
const threeNum = function(nums) {
  const res = [];
  const set = new Set();
  set.add(nums[0]);
  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if(set.has(0 - sum)) res.push([0 - sum, nums[i], nums[j]]);
    }
    set.add(nums[i]);
  }

  return res;
}

const nums =  [-1, 0, 1, 2, -1, -4];
console.log(threeNum( nums));