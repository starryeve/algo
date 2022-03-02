/*
 * @Author: zengfh
 * @Date: 2022-02-28 09:15:59
 * @LastEditTime: 2022-03-01 08:15:40
 * @Description: 
 * 1. BFS 只保留每层最后一个节点
 * 2. DFS 中右左前序遍历，每次判断当前深度是否有值，没有的话代表就是每层
 *  最右边节点
 */

// const rightSideView = function(root) {
//   const res = []
//   const queue = []

//   if(root === null) return res
//   queue.push(root)


//   while(queue.length) {
//     let size = queue.length
//     while(size --) {
//       const node = queue.shift()
//       if(size === 0)  res.push(node.val)
//       if(node.left) queue.push(node.left)
//       if(node.right) queue.push(node.right)
//     }
//   }

//   return res
// }


const rightSideView = function(root) {
  const res = []
  let depth = 0
  function traversal(root) {
    if(root === null) {
      return
    }
    depth ++
    if(!res[depth]) {
      res.push(root.val)
    }

    traversal(root.right)
    traversal(root.left)
  }

  return res
}