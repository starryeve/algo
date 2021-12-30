/*
 * @Author: zengfh
 * @Date: 2021-12-30 16:07:29
 * @LastEditTime: 2021-12-30 16:10:57
 * @Description: 
 */


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  const strArr = new Array(26).fill(0);
  const base = "a".charCodeAt();

  for (const c of magazine) {
    strArr[c.charCodeAt() - base]++;
  }

  for (const c of ransomNote) {
    const index = c.charCodeAt() - base;
    if(!strArr[index])  return false;
    strArr[index]--;
  }

  return true;
};