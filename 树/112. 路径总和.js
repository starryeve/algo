/*
 * @Author: zengfh
 * @Date: 2022-02-27 10:22:45
 * @LastEditTime: 2022-02-27 10:56:45
 * @Description: 
 */
const hasPathSum = function(root, target) {
  
  // 1. 确定递归参数和返回值: 需要传入根节点和一个计数器，用以判断是否等于目标值
  function traversal(root, count) {

  // 2. 确定递归终止条件： 到达叶子节点且 count === 0
    if(root.left === null && root.right === null) {
      if(count === 0) return true
      else return false
    }

  // 3. 编写单层递归逻辑：使用回溯
    if(root.left) {
      count -= root.left.val
      if(traversal(root.left, count)) return true
      count += root.left.val
    }

    if(root.right) {
      count -= root.right.val
      if( traversal(root.right, count) ) return true
      count += root.right.val
    }

    return false
  }


  if(root === null) return false
  return traversal(root, target - root.val)
}