function judgeSquareSum(target) {
	if (target < 0) return false
	let i = 0,
		j = Math.floor(Math.sqrt(target))
	while (i <= j) {
		let powSum = i * i + j * j
		if (powSum === target) {
			return true
		} else if (powSum > target) {
			j--
		} else [i++]
	}

	return false
}
