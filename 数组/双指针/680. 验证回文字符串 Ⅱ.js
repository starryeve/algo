function validPalindrome(s) {
	for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
		if (s[i] !== s[j]) {
			return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j)
		}
	}

	return true
}

function isPalindrome(s, i, j) {
	while (i < j) {
		if (s[i++] !== s[j--]) return false
	}

	return true
}
