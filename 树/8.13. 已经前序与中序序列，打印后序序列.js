function postOrderSequence(preOrderSequence, inOrderSequence) {
	if (preOrderSequence.length <= 1) return preOrderSequence

	const root = preOrderSequence.shift()
	const delimiter = inOrderSequence.indexOf(root)

	const leftPreOrder = preOrderSequence.slice(0, delimiter),
		rightPreOrder = preOrderSequence.slice(delimiter)

	const leftInOrder = inOrderSequence.slice(0, delimiter),
		rightInOrder = inOrderSequence.slice(delimiter + 1)

	return [...postOrderSequence(leftPreOrder, leftInOrder), ...postOrderSequence(rightPreOrder, rightInOrder), root]
}

const preOrder = ['A', 'B', 'D', 'E', 'C', 'F'],
	inOrder = ['D', 'B', 'E', 'A', 'C', 'F']
console.log(postOrderSequence(preOrder, inOrder))
