/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	if (!nums || nums.length === 0) return 0
	let preSum = nums[0]
	let maxSum = preSum

	for (let i = 1; i < nums.length; i++) {
		preSum = preSum > 0 ? preSum + nums[i] : nums[i]
		maxSum = Math.max(preSum, maxSum)
	}

	return maxSum
}
