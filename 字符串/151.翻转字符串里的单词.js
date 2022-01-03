/*
 * @Author: zengfh
 * @Date: 2022-01-03 16:42:26
 * @LastEditTime: 2022-01-03 16:50:35
 * @Description: 
 */

const reverseWords = function(s) {
  const arr  = s.split(/\s+/); // 正则表达式以一个或多个空格作为分割符
  arr.reverse();

  return arr.join(" ").trim(); // 过滤前后两端空格
}

const s = "     the     sky is blue   "
console.log(reverseWords(s))