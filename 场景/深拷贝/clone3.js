/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:35:45
 * @LastEditTime: 2022-03-27 10:09:56
 * @Description: 使用 weakmap 和 while 优化性能
 */


function deepClone31(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return target;
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = deepClone31 (target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
}



function forEach (array, iteratee) {
  let index = -1
  const length = array.length
  while(++index < length) {
    iteratee(array[index], index, array)
  }
  return array
}

function deepClone32(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      const isArray = Array.isArray(target);
      let cloneTarget = isArray ? [] : {};

      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);

      const keys = isArray ? undefined : Object.keys(target);
      forEach(keys || target, (value, key) => {
          if (keys) {
              key = value;
          }
          cloneTarget[key] = deepClone32(target[key], map);
      });

      return cloneTarget;
  } else {
      return target;
  }
}

module.exports = {
  deepClone31,
  deepClone32
}