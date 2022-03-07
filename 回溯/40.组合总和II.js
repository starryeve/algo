/*
 * @Author: zengfh
 * @Date: 2022-03-07 08:07:43
 * @LastEditTime: 2022-03-07 08:53:27
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

    const used = []
    for (let i = startIndex; i < candidates.length; i++) {
      if(i > 0 && candidates[i] === candidates[i - 1] ) continue // 如果同一层出现重复
      sum += candidates[i]
      path.push(candidates[i])
      backtracking(candidates, sum, target, i + 1)
      path.pop()
      sum -= candidates[i]
    }
  }


  backtracking(candidates, 0, target, 0)

  return res
};

