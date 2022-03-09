/*
 * @Author: zengfh
 * @Date: 2022-03-09 07:44:10
 * @LastEditTime: 2022-03-09 07:57:44
 * @Description: 
 */
const permuteUnique = function(nums) {
  const res = []
  const path = []

  const used = {}

  function backtracking(nums, path, used) {
    if(path.length === nums.length) {
      // 路径中的元素数量与待排列数组数量元素相等
    return res.push([...path])
    }

    const levelUsed = {}
    for (let i = 0; i < nums.length; i++) {
      if(used[i] || levelUsed[nums[i]])  continue
      path.push(nums[i])
      used[i] = true
      levelUsed[nums[i]] = true
      backtracking(nums, path, used)
      path.pop()
      used[i] = false
    }
  }

  backtracking(nums, path, used)
  return res
}

const nums = [1,1,2]
console.log(permuteUnique(nums) );