/*
 * @Author: zengfh
 * @Date: 2022-02-28 09:15:59
 * @LastEditTime: 2022-03-01 08:15:40
 * @Description: BFS 只保留每层最后裔一个节点
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
  const queue = []

  if(root === null) return res
  queue.push(root)


  while(queue.length) {
    let size = queue.length
    while(size --) {
      const node = queue.shift()
      if(size === 0)  res.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }

  return res
}