/*
 * @Author: zengfh
 * @Date: 2022-02-24 08:18:58
 * @LastEditTime: 2022-02-24 08:39:05
 * @Description: 
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  // 1. 确定递归参数，只需要传入树的根节点root

  // 2. 确定递归终止条件

  if(root === null) return 0

  // 3. 编写单层递归逻辑
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  return 1 + (leftDepth > rightDepth ?  leftDepth : rightDepth)
};

const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4, null,null),
    new TreeNode(5, null,null)
  ),
  new TreeNode(3,
   null,
    null
  )
)

console.log( maxDepth(tree) )