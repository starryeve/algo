/*
 * @Author: zengfh
 * @Date: 2022-03-07 07:35:20
 * @LastEditTime: 2022-03-07 07:59:44
 * @Description: 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  const res = []
  const path = []

  function backtracking(candidates , sum, target, startIndex) {

    if(sum === target) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i]
      path.push(candidates[i])
      backtracking(candidates, sum, target, startIndex)
      sum -= candidates[i]
      path.pop()
    }
  }

  backtracking(candidates, 0, target, 0)
  return res
};

const candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target) );