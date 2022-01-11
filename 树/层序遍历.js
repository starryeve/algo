/*
 * @Author: zengfh
 * @Date: 2022-01-11 20:38:59
 * @LastEditTime: 2022-01-11 20:52:28
 * @Description: 
 */

const TreeNode = function(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const levelOrderTraversal = function(root) {
  const res = [];
  const queue = [];

  if(root) {
    queue.push(root);
  }

  while(queue.length) {
    const size = queue.length; // 本层的节点数
    const levelRes = []; // 本次的节点值
    for (let i = 0; i < size; i++) {
      const front = queue.shift();
      levelRes.push(front.val);
      if(front.left) { // 如果有左子树
        queue.push(front.left);
      }
      if(front.right) { // 如果有右子树
        queue.push(front.right);
      }
    }

    res.push(levelRes);
  }
}