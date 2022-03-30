/*
 * @Author: zengfh
 * @Date: 2022-02-27 07:53:00
 * @LastEditTime: 2022-03-30 09:07:52
 * @Description: 使用快慢指针，使用一个 map 记录滑动窗口中的字符及其下标，
 * 快指针遍历字符串，判断当前字符是否在滑动窗口中出现过，若是，更新慢指针，更新
 * map
 */

const lengthOfLongestSubstring = function(s) {
 const used = {}
 const n = s.length

 let res = 0

 for (let fast = 0, slow = 0 ; fast < n; fast++) {
  let c = s.charAt(fast)
  if(c in used && used[c] >= slow) {
    // 判断当前字符是否在滑动窗口中出现过，若是，更新滑动窗口
    slow = used[c] + 1
  } else {
    res = Math.max(res, fast - slow + 1)
  }

  used[c] = fast
 }

 return res
}

const s = "abcabced"

console.log(lengthOfLongestSubstring(s))
