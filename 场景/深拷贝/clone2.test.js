/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:09:32
 * @LastEditTime: 2022-03-27 09:23:05
 * @Description: 
 */
const clone = require('./clone2');


const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

target.target = target;

const result = clone(target);

console.log(result);