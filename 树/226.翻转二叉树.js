/*
 * @Author: zengfh
 * @Date: 2022-01-11 20:57:09
 * @LastEditTime: 2022-02-22 09:39:18
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
//  var invertTree = function(root) {
//   const invertNode = function(root) {
//     if(!root) return;

//     let temp = root.left;
//     root.left = root.right;
//     root.right = root.left;
//   }

//   if(root === null) return root;

//   invertNode(root);
//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

const invertTree = function(root) {
  const invertNode = function(node1, node2) {
    let temp = node1;
    node1 = node2;
    node2 = temp;
  }

  if(root === null) return;
  invertNode(root.left, root.right);
  invertTree(root.left);
  invertTree(root.right);


  return root;
}