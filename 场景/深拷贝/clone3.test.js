/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:49:58
 * @LastEditTime: 2022-03-27 09:53:27
 * @Description: 
 */
const { deepClone31, deepClone32 } = require('./clone3');


const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
const result = deepClone31(target);
console.timeEnd();

console.time();
const result2 = deepClone32(target);
console.timeEnd();
