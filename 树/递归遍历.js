/*
 * @Author: zengfh
 * @Date: 2022-01-11 20:04:06
 * @LastEditTime: 2022-01-11 20:26:57
 * @Description: 
 */
function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preOrderTraversal = function(root) {
  const res = [];

  const preOrder = function(root) {
    if(root === null) return ;

    res.push(root.value);
    preOrder(root.left);
    preOrder(root.right);
  }

  // 只使用一个参数，使用闭包存储结果
  preOrder(root);

  return res;
}

const inOrderTraversal = function(root) {
  const res = [];

  const inOrder = function(root) {
    if(root === null) return ;
    inOrder(root.left);
    res.push(root.value);
    inOrder(root.right);
  }

  inOrder(root);

  return res;
}

const postOrderTraversal = function(root) {
  const res = [];

  const postOrder = function(root) {
    if(root === null) {
      postOrder(root.left);
      postOrder(root.right);
      res.push(root.value);
    }
  }
}


const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4, null, null),
    null
  ),
  new TreeNode(3,
    new TreeNode(5, null, null),
    null
  )
)

console.log(preOrderTraversal(tree));