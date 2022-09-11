/**
 * @param {string} str
 * @return {string}
 */
function splitThousand(str) {
	// const regex = /(?!^)(?=(\d{3})+$)/g

	const regex = /(?!\b)(?=(\d{3})+\b)/g
	return str.replace(regex, ',')
}

console.log(splitThousand('4411445 1234567'))
