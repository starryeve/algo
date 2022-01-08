/*
 * @Author: zengfh
 * @Date: 2022-01-06 21:34:57
 * @LastEditTime: 2022-01-08 14:34:32
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

/** 暴力匹配，遍历原串haystack中的每个字符作为【发起点】，每次从原串的【发起点】和匹配串的【首位】开始，尝试匹配
 * - 匹配成功：返回本次匹配的原串【发起点】
 * - 匹配失败，遍历原串的下一个【发起点】，重新尝试匹配
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

/**
 * KMP算法。根据匹配串的前缀和后缀构造partial match table，每次字符匹配失败，匹配串向右移动已匹配长度 - 部分匹配值
 * 算法复杂度为O（n + m^2)
 * @param {*} haystack
 * @param {*} needle
 * @return {*}
 */
var strStr = function(haystack, needle) {
};
haystack = "", needle = ""

console.log(strStr(haystack, needle));