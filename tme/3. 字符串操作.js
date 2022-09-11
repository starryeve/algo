/**
 * @param {string}str string字符串 给定字符串
 * @return int整型
 */
function minOperations(str) {
	const nums = new Array(26).fill(0)
	for (let i = 0; i < str.length; i++) {
		nums[str.charCodeAt(i) - 97]++
	}
	let count = 0,
		kinds = 0
	for (let i = 0; i < 26; i++) {
		count += Math.floor(nums[i] / 2)
		kinds += nums[i] % 2
	}

	if (count + kinds <= 26) {
		return count
	} else {
		return 2 * count - (26 - kinds)
	}
}

console.log(minOperations('abab'))
