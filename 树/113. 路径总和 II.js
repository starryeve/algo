/*
 * @Author: zengfh
 * @Date: 2022-03-03 08:03:40
 * @LastEditTime: 2022-03-03 08:15:01
 * @Description: 
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  const res = []
  const path = []

  function traversal(root, path, targetSum) {
    if(root.left === null && root.right === null) {
      const sum = path.reduce((pre, cur) => cur += pre, 0)
      if(sum === targetSum) {
        res.push([...path])
      }
    }

    if(root.left) {
      path.push(root.left.val)
      traversal(root.left, path, targetSum)
      path.pop()
    }

    if(root.right) {
      path.push(root.right.val)
      traversal(root.right, path, targetSum)
      path.pop()
    }
  }

  if(root === null) return res
  path.push(root.val)
  traversal(root, path, targetSum)
  return res
};