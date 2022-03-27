/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:11:43
 * @LastEditTime: 2022-03-27 09:22:56
 * @Description: 解决循环引用问题，可以开辟一个存储空间，来存储当前对象和拷贝对象的对应关系
 * 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过该对象，如果有的话，直接返回
 * 如果没有，才继续拷贝
 */

// 1. 递归入参：待拷贝对象，map存放待拷贝对象和其副本
const deepClone = function(target, map = new Map()) {
  if(typeof target === 'object') {
    let copy = Array.isArray(target) ? [] : {}
    if(map.get(target)) { // 如果待拷贝对象在内存空间中已存在副本
      return map.get(target)
    }
    map.set(target, copy) // 记录待拷贝对象和副本的对应关系
    for (const key in target) {
     copy[key] = deepClone(target[key], map)
    }

    return copy
  } else {
    return target
  }
}

module.exports = deepClone