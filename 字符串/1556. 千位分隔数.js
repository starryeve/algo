/*
 * @Author: zengfh
 * @Date: 2022-01-12 14:44:37
 * @LastEditTime: 2022-01-12 16:43:08
 * @Description: 
 */
/**
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function(n = 10100) {
  const arr = n.toString().split('').reverse();

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if(i % 3 === 0) {
      res.unshift(',');
    }
    res.unshift(arr[i]);
  }

  if(res[res.length - 1] === ',')  res.pop();
  return res.join('');
}
const n = 10100; 00101
console.log(thousandSeparator(0));