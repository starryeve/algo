/*
 * @Author: zengfh
 * @Date: 2022-03-03 09:03:00
 * @LastEditTime: 2022-03-03 09:30:42
 * @Description: 
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const  combinationSum3 = function(k, n) {
  const res = []
  const path = []

  function backtracking(targetSum, k, sum, startIndex) {
     // 剪枝，已选元素总和已经大于 targetSum
    if(sum > targetSum) {
      return
    }
    if(path.length === k) { // 元素个数等于k
      if(sum === targetSum) {
        res.push([...path])
      }
      return
    }

    for (let i = startIndex; path.length + 9 - i + 1 >= k; i++) {
   
      sum += i
      path.push(i)
      backtracking(targetSum, k, sum, i + 1)
      sum -= i
      path.pop()
    }
  }

  backtracking(n, k, 0, 1)
  return res
}