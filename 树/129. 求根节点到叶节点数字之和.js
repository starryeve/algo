/*
 * @Author: zengfh
 * @Date: 2022-02-28 07:48:03
 * @LastEditTime: 2022-02-28 07:59:50
 * @Description: 
 */

const sumNumbers = function(root) {
  let sum = 0
  function traversal(root, path) {
    if(root.left === null & root.right === null) {
      sum += Number(path)
      return
    }

    if(root.left) {
      path += String( root.left.val)
      traversal(root.left, path)
      path.slice(0, path.length - 1)
    }
    if(root.right) {
      path += String( root.right.val )
      traversal(root.right, path)
      path.slice(0, path.length - 1)
    }
  }

 

  if(root === null) return sum

  traversal(root, String( root.val ))

  return sum
}
