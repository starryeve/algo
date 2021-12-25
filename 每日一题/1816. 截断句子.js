/*
 * @Author: zengfh
 * @Date: 2021-12-06 10:01:04
 * @LastEditTime: 2021-12-06 21:21:04
 * @Description: 单词与单词之间以空格作分割，遍历数组，每次元素为空格，则更新截取指针i。同时待截取数k --，直到k为0
 */


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
   if(k === 0) { // 如果要要截取的单数数量小于等于0，则返回空串
     return "";
   }
  let i; 
  for (i = 1; i <= s.length; i++) {
    if(s[i] === ' ') { // 若s[i] 为 空格，则截取单词数 + 1
      k --;
    }
    if(k === 0) { // 当截取的单词数量已达到k, 则break
      break;
    }
  }
  return s.slice(0, i);
};


const s = "Hello how are you Contestant", k = 4;

console.log(truncateSentence(s, k));