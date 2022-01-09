/*
 * @Author: zengfh
 * @Date: 2022-01-09 13:20:24
 * @LastEditTime: 2022-01-09 13:28:30
 * @Description: 
 */
var removeDuplicates = function(s) {
  const stack = [];
  for (const c of s) {
    const top = stack.pop();
    if(top === c) continue;
    else stack.push(top, c);
  }
 
  return stack.join("");
}

const s = "abbaca"
console.log(removeDuplicates(s) );