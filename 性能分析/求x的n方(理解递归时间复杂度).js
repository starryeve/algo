/**
 * @description: 简单循环n遍，复杂度为O(n)
 * @param {*} x 
 * @param {*} n
 * @return {*}
 */
const func1  = function(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = res * x;
  }
  return res;
}


/**
 * @description: 递归算法
 * ，每次都分解为x^(n-1) * x, 递归出口为n-1=0，递归复杂度的本质要看递归次数 * 每次递归中的操作数
 * 这里每次 n - 1，递归了n次，每次进行了一个乘法操作，所以时间复杂度是n * 1 = O（n）
 * @param {*} x
 * @param {*} n
 * @return {*}
 */
const func2 = function(x, n) {
  if(n === 0) {
    return 1;
  }
  return func2(x, n --) * x;
}




const func3 = function(x, n) {
  if(n === 0 ) {
    return 1;
  }
 
  if(n % 2 === 1) {
    return func3(x, Math.floor( n / 2)) * func3(x, Math.floor( n / 2)) * x; // 注:js除法操作不会主动地向下取整
  } else {
    return func3(x, Math.floor( n / 2)) * func3(x, Math.floor( n / 2));
  }
} 


/**
 * @description: 仅有一次递归调用，且
 * 每次都是 n/2，即log2n次递归，每次的递归也都只有一次乘法操作，所以总的时间复杂度是log2n
 * @param {*} x
 * @param {*} n
 * @return {*}
 */

const func4 = function(x, n) {

  if(n === 0) {
    return 1;
  }
  let tmp = func4(x, Math.floor(n / 2));
  if(n % 2 === 0) {
    return tmp * tmp;
  } else {
    return tmp * tmp * x;
  }
}


console.log (func4(2, 4));
// console.log(count)
