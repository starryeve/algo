function TreeNode(x, left, right) {
	this.val = x
	this.left = left
	this.right = right
}

/**
 * @param preOrder int整型一维数组
 * @param inOrder int整型一维数组
 * @return TreeNode类一维数组
 */
function getBinaryTrees(preOrder, inOrder) {
	const res = []
	if (preOrder.length === 0) {
		return [null]
	}

	const rootValue = preOrder[0]

	inOrder.forEach((val, idx) => {
		if (val === rootValue) {
			const preOrderLeft = preOrder.slice(1, idx + 1),
				preOrderRight = preOrder.slice(idx + 1)
			const inOrderLeft = inOrder.slice(0, idx),
				inOrderRight = inOrder.slice(idx + 1)

			const lefts = getBinaryTrees(preOrderLeft, inOrderLeft)
			const rights = getBinaryTrees(preOrderRight, inOrderRight)

			lefts.forEach((left) => {
				rights.forEach((right) => {
					const node = new TreeNode(rootValue, left, right)
					res.push(node)
				})
			})
		}
	})

	return res
}

const preOrder = [1, 1, 2],
	inOrder = [1, 2, 1]
console.log(getBinaryTrees(preOrder, inOrder))
