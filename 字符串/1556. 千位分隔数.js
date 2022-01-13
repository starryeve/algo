/*
 * @Author: zengfh
 * @Date: 2022-01-12 14:44:37
 * @LastEditTime: 2022-01-13 14:29:21
 * @Description: 
 */
/**
 * @param {number} n
 * @return {string}
 */
// var thousandSeparator = function(n = 10100) {
//   const arr = n.toString().split('').reverse();

//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(i % 3 === 0) {
//       res.unshift(',');
//     }
//     res.unshift(arr[i]);
//   }

//   if(res[res.length - 1] === ',')  res.pop();
//   return res.join('');
// }
/**
 * @description: 正则表达式的正向零宽断言（?=p）和反向零宽断言(?!p)，
 * 从字符串尾部开始匹配，每隔三位的位置就是满足要求的位置，同时要排除字符串首部的位置
 * @param {*} n
 * @return {*}
 */
const thousandSeparator = function(n) {
  const reg = new RegExp(/\s{0}(?!^)(?=(\d{3})+$)/g);
  const str = String(n);

  return String(n).replace(reg, '.');
}
const n = 1010010009;
console.log(thousandSeparator(n));