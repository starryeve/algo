/*
 * @Author: zengfh
 * @Date: 2022-03-30 09:36:39
 * @LastEditTime: 2022-03-31 08:02:46
 * @Description: 
 */
const merge = function(nums1, m, nums2, n) {
  let i = 0, j = 0
  const sorted = []
  while(i !== m && j !== n) {
    num1s[i] < nums2[j] ? sorted.push(nums1[i++]) : sorted.push(nums2[j++])
  }
  while(i !== m) {
    sorted.push(nums1[i++])
  }
  while(j !== n) {
    sorted.push(nums2[j++])
  }
  for(let i = 0; i < nums1.length; i++) {
    nums1[i] = sorted[i]
}
}