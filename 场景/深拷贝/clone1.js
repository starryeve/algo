/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:04:40
 * @LastEditTime: 2022-03-27 09:11:25
 * @Description: 能处理简单的对象/数组引用类型，
 * 存在循环依赖栈溢出(对象的属性间接或直接地引用了自身)
 */

// / 深拷贝使用递归，考虑：
// 1. 递归入参：对象
// 2. 递归返回值：对象
// 3. 递归终点：如果是基本属性(即非引用类型)，则直接返回
const deepClone = function(target) {
  if(typeof target === 'object') {
    // 判断是对象还是数组
    let copy = Array.isArray(target) ? [] : {}
    for (const key in target) {
      copy[key] = deepClone(target[key])
    }
    return copy
  } else {
    return target
  }
}

module.exports = deepClone