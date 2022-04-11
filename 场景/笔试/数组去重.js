/*
 * @Author: zengfh
 * @Date: 2022-04-11 20:34:05
 * @LastEditTime: 2022-04-11 20:43:33
 * @Description: 
 */
// 浅去重
// ES6
function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}
// or
function unique (arr) {
  return Array.from(new Set(arr))
}
