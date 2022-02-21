/*
 * @Author: zengfh
 * @Date: 2022-01-11 15:43:11
 * @LastEditTime: 2022-02-20 09:00:12
 * @Description: 归并就是利用二分的思想，将原数组递归地拆分成两个数组，直到数组本身只有一个元素，
 * 再通过比较两个元素的大小，组合成一个有序数组，之后对这些有些数组进行归并排序（两个有序数组合并成一个有序数组）
 */

// const mergeSort = function(arr) {
//   const len = arr.length;
//   if(len < 2) return arr;

//   let middle = Math.floor(len / 2);
//   let left = arr.slice(0, middle), right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }
const mergeSort = function(arr) {
  if(arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  return merge(mergeSort( arr.slice(0, middle) ), mergeSort( arr.slice(middle) ));
}

const merge = function(left, right) {
  const res = [];

  while(left.length && right.length) {
    res.push( left[0] < right[0] ? left.shift() : right.shift() );
  }

  while(left.length) res.push(left.shift());
  while(right.length) res.push(right.shift());

  return res;
}

const arr = [1, 7, 6, 7, 2];

console.log( mergeSort(arr) );