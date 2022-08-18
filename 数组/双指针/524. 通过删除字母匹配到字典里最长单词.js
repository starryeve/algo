/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
function findLongestWord(s, dictionary) {
	let findLongestWord = ''
	for (const sub of dictionary) {
		const subLen = sub.length,
			longestLen = findLongestWord.length
		if (subLen < longestLen || (subLen === longestLen && sub.localeCompare(findLongestWord) >= 0)) continue
		if (isSubstr(s, sub)) {
			findLongestWord = sub
		}
	}

	return findLongestWord
}

function isSubstr(s, sub) {
	let i = 0,
		j = 0
	while (j < s.length && i < sub.length) {
		if (sub[i] === s[j]) {
			i++
		}
		j++
	}

	return i === sub.length
}
