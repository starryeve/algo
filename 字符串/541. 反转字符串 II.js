/*
 * @Author: zengfh
 * @Date: 2022-01-01 19:50:32
 * @LastEditTime: 2022-01-01 21:40:18
 * @Description: 
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
  const n = s.length;
  const arr = Array.from(s);

  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1);
  }

  return arr.join('');
};


const reverse = function(arr, l, r) {

  l --;
  r ++;

  while(++l < --r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
  }
}