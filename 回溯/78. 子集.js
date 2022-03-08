/*
 * @Author: zengfh
 * @Date: 2022-03-08 08:57:33
 * @LastEditTime: 2022-03-08 09:09:12
 * @Description: 组合问题和切割问题收集树的叶子节点， 子集问题是找树的所有节点
 */
var subsets = function(nums) {
  const res = []
  const set = []

  function backtracking(nums, set, startIndex) {
    if(startIndex >= nums.length) {
      return 
    }

    for (let i = startIndex; i < nums.length; i++) {
      set.push(nums[i])
      res.push([...set])
      backtracking(nums, set, i + 1)
      set.pop()
    }

   
  }

  res.push([])
  backtracking(nums, [], 0)
  return res
};

const nums = [1,2,3]
console.log(subsets(nums)); 