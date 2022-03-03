/*
 * @Author: zengfh
 * @Date: 2022-03-02 08:10:47
 * @LastEditTime: 2022-03-02 08:25:55
 * @Description: 使用贪心，局部最优就是大饼干喂给胃口大的，
 * 全局最优就是喂饱尽可能多的小孩
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
  s = s.sort((a, b) => a - b)
  g = g.sort((a, b) => a - b)


  // let count = 0
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = count; j < g.length; j++) {
  //     if(s[i] >= g[i]) {
  //       count ++
  //       break
  //     }
  //   }
  // }

  let count = 0
  let index = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if(index >= 0 && s[index] >= g[i])
    count ++
    index --
  }

  return count
}