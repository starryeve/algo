const fibonacci1 = function(n) {
  if(n <= 0) {
    return 0;
  } 
  if(n === 1) {
    return 1;
  }

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

  /**
   * @description: 这里相当于用first和second来记录当前相加的两个数值，此时就不用两次递归了。
因为每次递归的时候n减1，即只是递归了n次，所以时间复杂度是 O(n)。
同理递归的深度依然是n，每次递归所需的空间也是常数，所以空间复杂度依然是O(n)
   * @param {*}
   * @return {*}
   */  
const tailFibonacci = function(n, first, second) { 
  if(n <= 0) {
    return 0;
  } 
  if(n < 3) {
    return 1;
  }
  if(n === 3) {
    return first + second;
  }
  return tailFibonacci(n-1, second, first + second) // 这里用到了es6新增的尾递归调用 
}
const fibonacci2 = function(n) {
  return tailFibonacci(n, 0, 1) // 这里才用到了es6新增的尾递归调用
}



const start_time = new Date();
console.log( fibonacci2(5000));
const end_time = new Date();
console.log(`耗时： ${ end_time - start_time }`);