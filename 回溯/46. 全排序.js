/*
 * @Author: zengfh
 * @Date: 2022-03-09 07:31:44
 * @LastEditTime: 2022-03-09 07:43:10
 * @Description: 使用一个used的map记录path里都有哪些元素被使用了
 */
const permute = function(nums) {
  const res = []
  const path = []
  const used = {}
  function backtracking(nums, path) {
    if(path.length === nums.length) {
      res.push([...path])
    }


    for (let i = 0; i < nums.length; i++) {
      if(used[nums[i]]) continue
      used[nums[i]] = true
      path.push(nums[i])
      backtracking(nums, path)
      path.pop()
      used[nums[i]] = false
    }
  }

  backtracking(nums, path)

  return res
}