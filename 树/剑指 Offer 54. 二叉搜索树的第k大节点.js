/*
 * @Author: zengfh
 * @Date: 2022-02-27 11:07:29
 * @LastEditTime: 2022-02-27 11:19:44
 * @Description: 
 * 二叉搜索树中序遍历的结果是有序的, 则可以右中左，遍历到第k个节点就可以返回了
 */
const kthLargest = function(root, k) {
  let res = 0
  const inOrderTraversal = function(root) {
    if(root === null) {
      return
    }
    inOrderTraversal(root.right)
    if(k === 1) res = root.val
    k--
    inOrderTraversal(root.left)
  }

  inOrderTraversal(root)

  return res
}
