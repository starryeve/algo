/*
 * @Author: zengfh
 * @Date: 2022-01-05 21:17:04
 * @LastEditTime: 2022-01-05 21:33:47
 * @Description: 
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// var reverseLeftWords = function(s, n) {
//   const arr = Array.from(s);

//   const left = arr.splice(0, n);

//   arr.push(...left);

//   return arr.join("");
// }

/**
 * 先整体翻转，再局部翻转
 * @param {*} s
 * @param {*} n
 * @return {*}
 */
var reverseLeftWords = function(s, n) {
  const arr = Array.from(s);

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, arr.length - n - 1);
  reverse(arr, arr.length - n, arr.length - 1);

  return arr.join("");
}

const reverse = function(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start ++;
    end --;
  }
}
const s = "abcdefg", k = 2
console.log(reverseLeftWords(s, 2));