/*
 * @Author: zengfh
 * @Date: 2022-04-01 09:06:04
 * @LastEditTime: 2022-04-01 09:07:07
 * @Description: 从右上角开始，类似二叉搜素树，时间复杂度为O(m + n)
 */
var findNumberIn2DArray = function(matrix, target) {
  let i = 0, j = matrix[0]?.length - 1 || 0
  while(i < matrix.length &&  j >= 0) {
      if(matrix[i][j] === target) return true
      else if(matrix[i][j] < target) i++
      else j--
  }
  return false
};
