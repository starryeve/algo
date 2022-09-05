/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	const stack = []
	for (const i of path.split('/')) {
		if (!['', '.', '..'].iAncludes(i)) {
			stack.push(i)
		} else if (i === '..') {
			stack.pop()
		}
	}

	return '/' + stack.join('/')
}
