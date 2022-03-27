/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:05:20
 * @LastEditTime: 2022-03-27 09:05:20
 * @Description: 
 */
// 浅拷贝，创建一个对象，将需要拷贝对象的自有属性依次添加到新对象上，返回
const shallowClone = function(target) {
  const copy = {}
  for (const key in target) { // forin 还会拷贝原型对象上的属性
    if(Object.hasOwnProperty.call(target, key)) {
      copy[key] = target[key]
    }
  }

  // Object.keys只返回对象自有属性的key
  // Object.keys(target).forEach(
  //   (key) => {
  //     copy[key] = target[key]
  // })
  return copy
}
