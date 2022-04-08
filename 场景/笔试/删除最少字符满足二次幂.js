/*
 * @Author: zengfh
 * @Date: 2022-04-08 08:19:11
 * @LastEditTime: 2022-04-08 09:14:31
 * @Description: 给定一个二进制字符串，求最少删除多少个字符，满足2的n次幂
 * @Input: “1100”
 * @Output:  1
 *
 * @Input: “1111”
 * @Output: 3
 */

// 首先列举几个2的n次幂数，1,10,100,100，...
// 容易发现2的n次幂数只有一个1
// 那么只要最后输出的字符串最多只有一个1即可，即遍历s，统计1的数量后减1（只保留一个1）
function minCnt(s) {
  let cnt = 0
  for (const c of s) {
    if(c === '1') cnt++
  }
  return cnt - 1
}

console.log(minCnt("1111"));