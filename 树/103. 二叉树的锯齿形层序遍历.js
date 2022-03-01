/*
 * @Author: zengfh
 * @Date: 2022-03-01 08:27:59
 * @LastEditTime: 2022-03-01 08:48:47
 * @Description: 
 */
const zigzagLevelOrder = function(root) {
  const res = []
  const queue = []

  if(root === null) return res

  queue.push(root)
  let odd = true // 奇数层
  while(queue.length) {
    let size = queue.length
    const levelRes = []
    while(size --) {
      const node = queue.shift()
      odd ? levelRes.push(node.val) : levelRes.unshift(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    odd = !odd
    res.push(levelRes)
  }

  return res
}