/*
 * @Author: zengfh
 * @Date: 2022-03-10 10:43:10
 * @LastEditTime: 2022-03-10 14:27:21
 * @Description: 循环依赖检测。如，[
 * ['A', 'B'], ['B', 'C'],
 * ['C', 'D'], ['B', 'D']]
 * => false，
 * [['A', 'B'], ['B', 'C'], ['C', 'A']]
 * => true（2021.4 字节跳动-幸福里-后端）[2]
 */

/*
使用拓扑排序算法
1.选择途中一个入度为0的点，记录下来
2.在图中删除该点和所有以它为起点的边
3.重复1和2，直到图为空或没有入度为0的点
*/

const haveCircularDependency = function(n,prerequisites) {
  const graph = new Array(n).fill(0)
  .map(_ => new Array()) //邻接表存储图结构
  const inDegree = new Array(n).fill(0) // 每个点的入度
  const res = [] // 存储结果序列

  for (let i = 0; i < prerequisites.length; i++) {
    const a = prerequisites[i][0], b = prerequisites[i][1]
    graph[a].push(b)
    inDegree[b] ++
  }

  const queue = []
  for (let i = 0; i < n; i++) {
   if(inDegree[i] === 0)  queue.push(i)
  }

  while(queue.length) {
    // 去掉节点相连的边
    let m = queue.shift()
    res.push(m)

    for (let i = 0; i < graph[m].length; i++) {
      let m1 = graph[m][i]
      inDegree[m1]--
      if(inDegree[m1] === 0) {
        queue.push(m1)
      }
    }
  }

  if(res.length === n)  return res
  else return {}

}

const modules = [[1, 2],
[2, 1], [2, 3], [2, 4]]

console.log(haveCircularDependency(4,modules)); 