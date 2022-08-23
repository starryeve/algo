/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
	const map = new Map()
	let maxFrequency = 0
	for (const ch of s) {
		const frequency = (map.get(ch) || 0) + 1
		map.set(ch, frequency)
		maxFrequency = Math.max(frequency, maxFrequency)
	}

	const buckets = new Array(maxFrequency + 1).fill(0).map(() => new Array())
	for (const [ch, fre] of map.entries()) {
		buckets[fre].push(ch)
	}

	const res = []
	for (let i = maxFrequency; i > 0; i--) {
		const bucket = buckets[i]
		for (const ch of bucket) {
			for (let k = 0; k < i; k++) {
				res.push(ch)
			}
		}
	}

	return res.join('')
}
