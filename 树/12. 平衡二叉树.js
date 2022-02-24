/*
 * @Author: zengfh
 * @Date: 2022-02-24 09:37:59
 * @LastEditTime: 2022-02-24 09:49:36
 * @Description: 平衡二叉树定义为两个子树的盖度差不超过1，那么只要求得树的
 * 两棵子树各地的高度（后序遍历），进行比较即可
 */

var isBalanced = function(root) {

  // 1. 传入树的根节点，返回树的高度
  function getHeight(root) {
  // 2. 终止条件
    if(root === null) return 0

  // 3. 编写单层递归逻辑
    let leftHeight = getHeight(root.left)
    let rightHeight = getHeight(root.right)

    if(leftHeight === -1 || rightHeight === -1) return -1

    if(Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }

    return 1 + Math.max(leftHeight, rightHeight)
  }


  return getHeight(root) === -1 ? false : true
}