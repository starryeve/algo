/*
 * @Author: zengfh
 * @Date: 2022-02-24 09:19:05
 * @LastEditTime: 2022-02-24 09:23:10
 * @Description: 
 */

/*
Time Complexity: O(n)
*/
var countNodes = function(root) {
  // 1. 确定递归参数和返回值，传入一棵树的根节点，返回该树的节点数

  // 2. 确定递归终止条件
  if(root === null) return 0

  // 3. 编写单层递归逻辑
  let leftNum = countNodes(root.left)
  let rightNum = countNodes(root.right)

  return 1 + leftNum + rightNum
}