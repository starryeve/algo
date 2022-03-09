/*
 * @Author: zengfh
 * @Date: 2022-03-07 08:07:43
 * @LastEditTime: 2022-03-09 08:25:34
 * @Description: 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  const res = []
  const path = []

  function backtracking(candidates, sum, target, startIndex) {
    if(sum > target) return 
    if(sum === target) {
      res.push([...path])
      return
    }

    const used = {}
    for (let i = startIndex; i < candidates.length; i++) {
      if( used[candidates [i]] ) continue // 如果同一层出现重复
      sum += candidates[i]
      path.push(candidates[i])
      used[candidates [i]] = true
      backtracking(candidates, sum, target, i + 1)
      path.pop()
      sum -= candidates[i]
    }
  }

  candidates = candidates.sort((a, b) => a - b)
  backtracking(candidates, 0, target, 0)

  return res
};



const  candidates = [10,1,2,7,6,1,5], target = 8    

console.log(combinationSum2(candidates, target)); 