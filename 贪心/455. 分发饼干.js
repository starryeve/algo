/*
 * @Author: zengfh
 * @Date: 2022-03-02 08:10:47
 * @LastEditTime: 2022-03-02 08:16:35
 * @Description: 
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  s = s.sort((a, b) => a - b)
  g = g.sort((a, b) => a - b)


  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = count; j < g.length; j++) {
      if(s[i] >= g[i]) {
        count ++
        break
      }
    }
  }
}