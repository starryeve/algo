/*
 * @Author: zengfh
 * @Date: 2021-12-28 16:28:51
 * @LastEditTime: 2021-12-29 21:16:00
 * @Description: 定义一个map记录s字符串中每个字符出现的字数，然后遍历t字符串的每个字符，map中相应字符做-1操作，
 * 最后判断map中是否每个字符个数都等于0
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  const charMap = new Map();
  for (const c of s) {
    charMap.get(c) ? charMap.set(c, charMap.get(c) + 1) : charMap.set(c, 1);
  }

  for(const c of t) {
    charMap.get(c) ? charMap.set(c, charMap.get(c) - 1) : charMap.set(c, 1);
  }

  let res = true;

  charMap.forEach(((value, key) => {
    if(value > 0) {
      res = false;
      // break;
    }
    console.log(value);
  }))




  return res;
};

console.log( isAnagram("alasaaaa", "alasasas"));