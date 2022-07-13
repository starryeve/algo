const findLengthOfLCIS = function (nums) {
	if (nums.length <= 0) return 0
	let res = 1,
		count = 1
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i]) count++
		else count = 1

		if (count > res) res = count
	}

	return res
}
