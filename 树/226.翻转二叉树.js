/*
 * @Author: zengfh
 * @Date: 2022-01-11 20:57:09
 * @LastEditTime: 2022-01-11 21:01:01
 * @Description: 
 */
 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  const invertNode = function(root) {
    if(!root) return;

    let temp = root.left;
    root.left = root.right;
    root.right = root.left;
  }

  if(root === null) return root;

  invertNode(root);
  invertTree(root.left);
  invertTree(root.right);

  return root;
};