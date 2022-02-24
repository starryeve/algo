/*
 * @Author: zengfh
 * @Date: 2022-02-24 09:08:54
 * @LastEditTime: 2022-02-24 09:16:13
 * @Description: 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
  // 1. 确定递归参数和返回值，参数传入树的根节点，返回树的最小深度

  // 2. 确定递归终止条件
  if(root === null) return 0

  // 3. 书写单层递归逻辑
  let leftDepth = minDepth(root.left)
  let rightDepth = minDepth(root.right)

  if(root.left === null && root.right !== null) {
    return 1 + rightDepth
  }
  if(root.left !== null && root.right === null) {
    return 1 + leftDepth
  }


  return 1 + Math.min(leftDepth, rightDepth)
};