/**
 * @param {string} time
 * @return {boolean}
 */
function isValidTime(time) {
	const regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/

	return regex.test(time)
}

/**
 * @param {string} time
 * @return {boolean}
 */
function isValidDate(date) {
	const regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

	return regex.test(date)
}

console.log(isValidTime('23:88'))
console.log(isValidTime('23:18'))

console.log(isValidDate('2022-08-10'))
console.log(isValidTime('2012-07:32'))
