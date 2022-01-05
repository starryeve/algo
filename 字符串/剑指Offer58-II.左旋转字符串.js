/*
 * @Author: zengfh
 * @Date: 2022-01-05 21:17:04
 * @LastEditTime: 2022-01-05 21:19:34
 * @Description: 
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  const arr = Array.from(s);

  const left = arr.splice(0, n);

  arr.push(...left);

  return arr.join("");
}

const s = "abcdefg", k = 2
console.log(reverseLeftWords(s, 2));