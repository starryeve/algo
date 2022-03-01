/*
 * @Author: zengfh
 * @Date: 2022-03-01 09:10:35
 * @LastEditTime: 2022-03-01 09:25:27
 * @Description: 
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
 
  if(root === null) return new TreeNode(val, null, null)
  if(root.val > val) {
    root.left = insertIntoBST(root.left,val)
  } else {
    root.right = insertIntoBST(root.right,val)
  }

return root
};