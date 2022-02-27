/*
 * @Author: zengfh
 * @Date: 2022-02-27 09:50:48
 * @LastEditTime: 2022-02-27 10:34:08
 * @Description: 
 */
const binaryTreePaths = function(root) {
  const res = []

  // 1. 确定递归参数: 传入树的根节点，记录每一条路径的 path 和存放结果集的 res
  function traversal(root, path, res) {
    path.push(root.val) // 先记录中间节点，push 进 path 数组中
    // 2. 确定递归终止条件：当前节点是叶子节点
    if(root.left === null && root.right === null) {
      // 将路径添加进结果集 res
      let s = ''
      for (let i = 0; i < path.length; i++) {
        s += path[i]
        if(i !== path.length - 1) s += '->'
      }

      res.push(s)
      return
    }

    // 3. 编写单层逻辑
    if(root.left) {
      traversal(root.left, path, res)
      path.pop()
    }

    if(root.right) {
      traversal(root.right, path, res)
      path.pop()
    }
  }

  if(root === null) return res

  traversal(root, [], res)
  return res
}