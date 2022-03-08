/*
 * @Author: zengfh
 * @Date: 2022-03-07 08:57:35
 * @LastEditTime: 2022-03-07 09:25:40
 * @Description: 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  const res = []
  const path = [] // 切割后回文的子串

  function backtracking(s, startIndex) {
    if(startIndex > s.length) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      let str = s.substring(startIndex, i + 1)
      if(isPalindrome(str)) {
        path.push(str)
        backtracking(s, i + 1)
        path.pop()
      } else {
        continue
      }
    }
  }

  function isPalindrome(str) {
    const arr = Array.from(str)
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
     if(arr[i] !== arr[arr.length - i - 1]) return false
    }

    return true
  }


  backtracking(s, 0)

  return res
};

const s = "aab"
console.log(partition(s)); 