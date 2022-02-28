/*
 * @Author: zengfh
 * @Date: 2022-02-28 08:09:12
 * @LastEditTime: 2022-02-28 09:05:01
 * @Description: 以前序数组的第一个元素作为切割点，先切中序数组，
 * 根据中序数组，再来切前序数组
 */
function TreeNode(val, left, right) {
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.val = val === undefined ? 0: val
}

const buildTree = function(preOrder, inOrder) {
  // 确定递归参数和返回值：传入前序和中序遍历数组，返回树的根节点
  function traversal(preOrder, inOrder) {
    // 1. 如果数组大小为0，说明是空节点
    if(preOrder.length === 0) return null

    // 2. 前序遍历数组第一个元素，就是当前的中间节点
    let rootVal = preOrder[0]
    const root = new TreeNode(rootVal, null, null)

    // 3. 找切割点
    let delimiter
    for (delimiter = 0; delimiter < inOrder.length; delimiter++) {
      if(inOrder[delimiter] === rootVal)  break
    }

    // 4. 切割中序数组，得到 中序左数组和中序右数组
    let leftInOrder = inOrder.slice(0, delimiter), rightInOrder = inOrder.slice(delimiter + 1)
    // 5. 切割前序数组，得到 前序左数组和前序右数组
    let leftPreOrder = preOrder.slice(1, 1 + leftInOrder.length), 
    rightPreOrder = preOrder.slice(1 + leftInOrder.length)

    // 6. 生成左右子树
    root.left = traversal(leftInOrder, leftPreOrder)
    root.right = traversal(rightInOrder, rightPreOrder)

    return root
  }
}