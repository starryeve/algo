/*
 * @Author: zengfh
 * @Date: 2022-03-16 08:14:26
 * @LastEditTime: 2022-03-17 08:15:01
 * @Description: 
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return int整型
 */
 function Substrings( str ) {
  // write code here
  let path = []
  let res = []
//   let res = 0
  function isPalindrome(str) {
      for(let i = 0, j = str.length - 1; i < j; i++, j--) {
          if(str[i] !== str[j])    return false
      }
      return true
  }
  function backtracking(str, startIndex) {
      if(startIndex >= str.length) {
          res.push([...path])
          return
      }

      for (let i = startIndex; i < str.length; i++) {
          const sub = str.substring(startIndex, i +1)
         if(isPalindrome(sub)) {
            // res++
            path.push(sub)
            backtracking(str,i+1)
            path.pop()
         } 
         
      }
  }

  backtracking(str, 0)

  return res
}

const str = "aab"
console.log(Substrings( str ));

