/*
 * @Author: zengfh
 * @Date: 2022-02-27 07:53:00
 * @LastEditTime: 2022-02-27 09:08:33
 * @Description: 使用快慢指针，使用一个 map 记录滑动窗口中的字符及其下标，
 * 快指针遍历字符串，判断当前字符是否在滑动窗口中出现过，若是，更新慢指针，更新
 * map
 */

const lengthOfLongestSubstring = function(s) {
 const map = new Map()
 const n = s.length

 let res = 0

 for (let fast = 0, slow = 0 ; fast < n; fast++) {
  let c = s.charAt(fast)
  if(map.has(c) && map.get(c) <= fast && map.get(c) >= slow) {
    // 判断当前字符是否在滑动窗口中出现过，若是，更新滑动窗口
    slow = map.get(c) + 1
    map.set(c, fast)
  }

  res = Math.max(res, fast - slow + 1)
  map.set(c, fast)
 }

 return res
}

const s = "abcabced"

console.log(lengthOfLongestSubstring(s))
