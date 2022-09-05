/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
	const res = nums.sort((a, b) => b + '' + a - (a + '' + b)).join('')
	return res[0] === '0' ? '0' : res
}
