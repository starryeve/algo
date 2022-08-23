/*
 * @Author: zengfh
 * @Date: 2022-03-02 08:10:47
 * @LastEditTime: 2022-08-23 11:37:47
 * @Description: 使用贪心，局部最优就是大饼干喂给胃口大的，
 * 全局最优就是喂饱尽可能多的小孩
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
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
	let gi = 0,
		si = 0
	while (gi < g.length && si < s.length) {
		if (g[gi] <= s[si]) gi++
		si++
	}
	return gi
}
