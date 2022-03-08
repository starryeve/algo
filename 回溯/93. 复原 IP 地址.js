/*
 * @Author: zengfh
 * @Date: 2022-03-08 08:11:54
 * @LastEditTime: 2022-03-08 08:52:11
 * @Description: 
 */
const restoreIpAddresses = function(s) {
  const res = []
  const path = []
  let pointNum = 0

  function backtracking(s, path, startIndex) {
    if(pointNum === 3) {
      const substr = s.slice(startIndex, s.length)
      console.log(substr);
      if(isValid(substr)) {
        res.push(path.join('.') + '.' + substr)
        return
      }
    }

    for (let i = startIndex; i < s.length; i++) {
      const substr = s.slice(startIndex, i + 1)
      if(isValid(substr)) {
        path.push(substr)
        pointNum ++
        backtracking(s, path, i + 1, pointNum)
        path.pop()
        pointNum --
      }
    }
  }

  function isValid(s) {
    if(s.length > 3 || s.length <= 0)  return false
    if(s[0] === '0' && s.length > 1)  return false 
    const num = Number(s)
    if(s < 0 || s > 255 || isNaN(num) )  return false

    return true
  }

  backtracking(s,path,0)
  return res
}

console.log(restoreIpAddresses("101023") )