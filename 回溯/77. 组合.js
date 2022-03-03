/*
 * @Author: zengfh
 * @Date: 2022-01-11 21:39:25
 * @LastEditTime: 2022-03-03 08:57:22
 * @Description: 
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  // 定义两个变量，一个用来存放符合条件的单一结果,
  // 一个用来存放符合条的结果集
  const res = [];
  const path = [];

  const backtracking = function(n, k, startIndex) {
    if(path.length === k) {
      // res.push(path); // 这里不可以是path本身，否则res的每个结果都会指向同一个引用
      res.push([...path]);
      return;
    }

   for (let i = startIndex; i <= n; i++) {
   
     // 剪枝。如果 for 循环选择的起始位置之后的元素个数 已经不足 k
     if(n - i + 1 + path.length >= k) {
      path.push(i)
      backtracking(n, k, i+1)
      path.pop()
     }

    
   }
  }

  backtracking(n, k, 1);

  return res;
};

const n = 4, k = 2;
console.log(combine(n, k));