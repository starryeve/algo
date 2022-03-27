/*
 * @Author: zengfh
 * @Date: 2022-03-27 09:06:54
 * @LastEditTime: 2022-03-27 09:07:19
 * @Description:
 */
const clone = require('./clone1');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

const result = clone(target);

console.log(result);