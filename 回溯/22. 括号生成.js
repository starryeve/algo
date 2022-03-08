/*
 * @Author: zengfh
 * @Date: 2022-03-08 07:44:17
 * @LastEditTime: 2022-03-08 08:10:58
 * @Description: 
 */
var generateParenthesis = function(n) {
  const res = []
  const path = ''

  let left = n, right = n
  function backtracking(n, path) {
    if(left > right)  return // 左括号剩余数量小于右括号 ，如 ）就应该剪枝了
    if(left === 0 && right ===0) { // 左右括号剩余数量都为0
      res.push(path)
      return
    }

    if(left > 0) {
      path += '('
      left --
      backtracking(n, path)
      path = path.substring(0, path.length - 1)
      left ++
    }
    if(right > 0) {
      path += ')'
      right --
      backtracking(n, path)
      path = path.substring(0, path.length - 1)
      right ++
    }

  }

  backtracking(n, "")
  return res
}

console.log(generateParenthesis(3)); 