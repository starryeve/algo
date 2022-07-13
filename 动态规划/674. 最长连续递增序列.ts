const findLengthOfLCIS = function (nums: number[]): number {
	if (nums.length <= 0) return 0
	let res = 1,
		dp = new Array(nums.length).fill(1)
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i]) {
			dp[i + 1] = dp[i] + 1
		}
		if (dp[i + 1] > res) res = dp[i + 1]
	}
	return res
}

export {}
