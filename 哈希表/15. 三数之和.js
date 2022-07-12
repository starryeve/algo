/*
 * @Author: zengfh
 * @Date: 2021-12-31 15:28:42
 * @LastEditTime: 2022-07-12 22:52:57
 * @Description: 使用哈希表，两重for循环判断map中是否存在0 - (a + b)，时间复杂度为O（n^2），但还需要对结果数组进行去重，开销是很大的
 *
 */
// const threeNum = function(nums) {
//   const res = [];
//   const set = new Set();
//   set.add(nums[0]);
//   for (let i = 1; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if(set.has(0 - sum)) res.push([0 - sum, nums[i], nums[j]]);
//     }
//     set.add(nums[i]);
//   }

//   return res;
// }

const threeSum = function (nums) {
	nums.sort((a, b) => a - b)
	const res = [],
		len = nums.length
	for (let i = 0; i < len; i++) {
		let l = i + 1,
			r = len - 1
		if (nums[i] > 0) return res
		if (i > 0 && nums[i] === nums[i - 1]) continue // a 元素去重
		while (l < r) {
			let a = nums[i],
				b = nums[l],
				c = nums[r]
			let sum = a + b + c
			if (sum > 0) {
				r--
			} else if (sum < 0) {
				l++
			} else {
				res.push([a, b, c])
				while (l < r && b === nums[l + 1]) l++ // b 元素去重
				while (l < r && c === nums[r - 1]) r-- // c 元素去重

				// 找到答案时，双指针同时收缩
				r--
				l++
			}
		}
	}

	return res
}

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
