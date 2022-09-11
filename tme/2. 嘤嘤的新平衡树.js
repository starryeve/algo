function TreeNode(x, left, right) {
	this.val = x
	this.left = left
	this.right = right
}

/**
 * @param {TreeNode}tree string字符串 给定字符串
 * @return {number}
 */
function getTreeSum(tree) {
	const num = dfs(tree)

	return num % (1e9 + 1)
}

/**
 * @param {TreeNode}tree string字符串 给定字符串
 * @return {number}
 */
function dfs(tree) {
	if (tree.left === null && tree.right === null) return 0
	let res = 0
	let num1 = dfs(tree.left)
	let num2 = dfs(tree.right)

	res = 2 * Math.max(num1, num2) + 1
}
