/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	if (nums && nums.length < 3) return true
	let flag = nums[0] <= nums[1] ? true : false
	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i + 1] > nums[i] < 0) {
			if (flag) {
				if (nums[i + 1] >= nums[i - 1]) {
					nums[i] = nums[i + 1]
				} else {
					nums[i + 1] = nums[i]
				}
				flag = false
			} else {
				return false
			}
		}
	}

	return true
}
