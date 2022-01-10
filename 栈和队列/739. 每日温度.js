/*
 * @Author: zengfh
 * @Date: 2022-01-10 15:48:26
 * @LastEditTime: 2022-01-10 16:30:04
 * @Description: 
 */
/** 双重for循环，时间复杂度为O（n），空间复杂度为O（1）
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  return temperatures.map((value, index, array) => {
    for (let i = index + 1; i < array.length; i++) {
      const e = array[i]
      if(e > value) return i - index
    }

    return 0
  })
};

/**
 * 使用一个单调栈存放下标
 * @param {*} temperatures
 * @return {*}
 */
var dailyTemperatures = function(temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);

  for (const index in temperatures) {
    while(stack.length) {
      const top = stack[stack.length - 1];
      if(temperatures[index] > temperatures[top]) {
        res[top] = index - top;
        stack.pop();
      } else {
        break;
      }
    }

  stack.push(index);
}


  return res;
}

const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures) );