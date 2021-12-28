/*
 * @Author: zengfh
 * @Date: 2021-12-28 16:28:51
 * @LastEditTime: 2021-12-28 16:44:27
 * @Description: 
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
    if(value > 0) res = false;
  }))

  return res;
};

console.log( isAnagram("alas", "alasasas"));