/*
 * @Author: zengfh
 * @Date: 2022-03-27 10:57:57
 * @LastEditTime: 2022-03-27 11:48:03
 * @Description: 
 */
const clone = require('./clone4');


const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');
map.set(Symbol('symbol'), 'symbol');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    [Symbol('symbol')]: 'symbol',
    symbol: Symbol(1),
    date: new Date(),
    reg: /\d+/,
    // error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};


const result = clone(target);


console.log(result);