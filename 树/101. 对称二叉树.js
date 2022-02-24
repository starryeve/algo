/*
 * @Author: zengfh
 * @Date: 2022-02-23 08:20:29
 * @LastEditTime: 2022-02-23 09:43:25
 * @Description: 判断根节点的两个子树是否是镜像对称的，
 * 那么如何判断这两个子树是对称的呢，通过判断左子树的左节点和右子树的右节点是否对称以及
 * 右子树的左节点和左子树的右节点是否对称。。。
 */
function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


const isSymmetric = function(root) {
  // 1. 确定递归参数
  function compareTree (left, right) { // 比较两棵树是否对称
    // 2.确定递归终止条件
    if(left === null && right !== null ||
      left !== null && right === null){
      return false;
    }
    else if(left === null && right === null) {
      // 如果都为空树，
      return true
    }
    else if(left.value !== right.value)  {
      // 如果值不相等
      return false
    }

    // 3. 确定单层递归逻辑
    const outside = compareTree(left.left, right.right) // 判断左树的左子树和右树的右子树是否对称
    const inside = compareTree(left.right, right.left)// 判断左树的右子树和右树的左子树是否对称

    const isSame = outside && inside
    return isSame
  }

  return compareTree(root.left, root.right)
}

const tree = new TreeNode(1,
  new TreeNode(2,
    null,
    null
  ),
  new TreeNode(3,
   null,
    null
  )
)

console.log( isSymmetric(tree) )