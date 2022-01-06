/*
 * @Author: zengfh
 * @Date: 2022-01-06 21:34:57
 * @LastEditTime: 2022-01-06 21:59:11
 * @Description: 
 */
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//  var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle);
// };

/** 暴力匹配，让needle与haystack的每个子串做匹配，时间复杂度为O（mn）
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  let len = needle.length;

  for (let i = 0; i <= haystack.length - len; i++) {
    let flag = true; // 每轮初始化为true
    for (let j = i, z = 0; j < i + len; j++, z++) {
      if(haystack[j] !== needle[z]) { // 当某个字符不匹配了，则判断此轮从i开始的n个字符不匹配，跳出该轮
        flag = false;
        break;
      }
    };
    // 如果该轮是匹配的，则返回i
    if(flag) {
      return i;
    }
  }

  return -1;
};
haystack = "", needle = ""

console.log(strStr(haystack, needle));