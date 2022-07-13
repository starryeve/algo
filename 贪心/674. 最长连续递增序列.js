const findLengthOfLCIS = function (nums) {
	if (nums.length <= 0) return 0
	let res = 1
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i]) res++
		else res = 1
	}

	return res
}
