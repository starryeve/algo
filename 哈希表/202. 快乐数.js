/*
 * @Author: zengfh
 * @Date: 2021-12-29 16:52:08
 * @LastEditTime: 2021-12-29 17:15:32
 * @Description: 题目中重点提到了“无限循环”，也就是说当我们计算出某个数，其每个位置上数字的平方和，已经在之前的计算中
 * 出现过，则可以判断该数不是快乐数。快速判断某个数是否在某个范围内，就可以使用哈希表
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  const sumSet = new Set();

  let sum = n;
  
  while(true) {
    sum = getBitsSum(sum); // 计算当前n各位之和

    if(sum === 1) return true;
    if(sumSet.has(sum)) return false;

    sumSet.add(sum); // 记录当前n各位之和
  }
};

var getBitsSum = function(n) {
  let sum = 0;
  while(n > 0) { // 从个位数计算起
    let bit = n % 10; // 
    sum += bit ** 2;

    n = Math.floor(n / 10);
  }

  return sum;
}


console.log(isHappy(19));