/*
 * @Author: zengfh
 * @Date: 2022-01-10 15:48:26
 * @LastEditTime: 2022-01-10 15:50:47
 * @Description: 
 */
/**
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

const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures) );