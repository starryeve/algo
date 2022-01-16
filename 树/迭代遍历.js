/*
 * @Author: zengfh
 * @Date: 2022-01-16 22:01:29
 * @LastEditTime: 2022-01-16 22:45:24
 * @Description: 
 */
const TreeNode = function(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preorderTraversal = function(root) {
  const stack = [];
  const res = [];

  if(!root) return res;
  stack.push(root);
  while(stack.length) {
    const node = stack.pop(); // 访问节点的同时处理遍历
    res.push(node.val);
    if(node.right)  stack.push(node.right); // 先将右节点压入栈中，这样才会先遍历到左节点
    if(node.left)   stack.push(node.left);
  }

  return res;
}

const postorderTraversal = function(root) {
  const stack = [];
  const res = [];
  if(!root) return res;
  stack.push(root);

  while(stack.length) {
    const node = stack.pop();
    res.push(node.val); // 中
    if(node.left)   res.push(node.left); // 右
    if(node.right)  res.push(node.right); // 左
  }

  return res.reverse();
}

const inorderTraversal = function(root) {
  const stack = [];
  const res = [];

  if(root === null) return res;

  let cur = root;
  while(cur || stack.length) {
    if(cur) {
      stack.push(cur);
      cur = cur.left; // 左
    } else {
      cur = stack.pop(); // 弹出中
      res.push(cur.val); // 中

      cur = cur.right; // 右
    }
  }

  return res;
}