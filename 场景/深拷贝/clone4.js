/*
 * @Author: zengfh
 * @Date: 2022-03-27 10:11:10
 * @LastEditTime: 2022-03-27 11:52:50
 * @Description: 
 */

function forEach (array, iteratee) {
  let index = -1
  const length = array.length
  while(++index < length) {
    iteratee(array[index], index, array)
  }
  return array
}

// 判断是否是引用类型
function isReference(target) { 
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

// 获取精确的引用类型（每个引用类型都有 toString 方法，若该方法未被重写。则返回”[object type], 其中type是对象的类型“）
function getReferenceType(target) {
  let typeStr = Object.prototype.toString.call(target)
  return typeStr.substring(8, typeStr.length - 1)
}

// 常见的引用类型, 分为可继续遍历类型和不可继续遍历类型
const deepType = ['Object','Array','Map','Set']
const unDeepType = [
  'Number',
  'String',
  'Boolean',
  'Date',
  'RegExp',
  'Symbol',
  'Error']

// 处理可遍历类型，首先需要获取它们的初始化数据，例如上面的 [] 和 {}, 
// 可以通过拿到 constructor 的方式来通用的获取
function getInitial(target) {
  const Cons = target.constructor
  return new Cons()
}


const deepClone = function(target, map = new WeakMap()) {
  // 不是 引用 类型，直接返回
  if(!isReference(target)) {
    return target
  }

  // 判断是否存在拷贝过的副本，防止循环引用
  if(map.get(target)) {
    return map.get(target)
  }

  let copy
  map.set(target, copy) // 存放副本

  const type = getReferenceType(target) // 获取引用类型
  if(deepType.includes(type)) { // 如果是可遍历的引用类型
    copy = getInitial(target)
    if(type === 'Map') { // 拷贝map
      target.forEach((value, key) => {
        copy.set(key, deepClone(value, map))
      })
    }
    if(type === 'Set') { // 拷贝set
      target.forEach((value, key) => {
        copy.add(deepClone(value, map))
      })
    }
    if(type === 'Array') {
      target.forEach((value, index) => {
        copy[index] = deepClone(value, map)
      })
    }
    if(type === 'Object') {
      forEach(Object.keys(target), (value) => {
          copy[value] = deepClone(target[value], map)
      })
    }
  } else {
    const Cons = target.constructor
    switch(type) {
      case 'Symbol':
        return Symbol(Symbol.prototype.valueOf.call(target))
      case 'Regexp': {
        const reFlags = /\w*$/;
        const result = new target.constructor(target.source,
          reFlags.exec(target));
        result.lastIndex = target.lastIndex;
        return result;
      }
      case 'Function': return target
      case 'Date':
        return new Date(target)
      default:
        return new Cons(target)
    }
  }

  return copy
}



module.exports = deepClone