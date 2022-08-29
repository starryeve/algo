/* 
https://leetcode.cn/problems/minimize-deviation-in-array/
*/
const Heap = require('../../堆/Heap')

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = function (nums) {
	nums.map((_, index) => {
		;(nums[index] & 1) !== 0 && (nums[index] = nums[index] * 2)
	})

	let res = Number.MAX_SAFE_INTEGER,
		min = Number.MAX_SAFE_INTEGER
	const heap = new Heap((a, b) => a > b)
	for (const num of nums) {
		min = Math.min(num, min)
		heap.push(num)
	}

	while (true) {
		const max = heap.pop()
		console.log(max)
		res = Math.min(res, max - min)
		if (max & 1) break
		min = Math.min(min, max >> 1)
		heap.push(max >> 1)
	}

	return res
}

const nums = [399, 908, 648, 357, 693, 502, 331, 649, 596, 698]
console.log(minimumDeviation(nums))
