/*
 * @Author: zengfh
 * @Date: 2022-01-11 16:17:07
 * @LastEditTime: 2022-02-21 09:18:32
 * @Description: 快排的三个基本步骤：
 * 1.从数组中选择一个元素作为基准点
 * 2. 排序数组，所有比基准点小的元素放在元素左边，所有比
 *    基准点大的元素放在右边，每次排序完成后基准值都会插入到
 *    数组中间
 * 3. 使用递归，将基准值左边的数组和右边的数组进行上述1和2操作
 */
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}



/**
 * @description: O(n log n)，但由于用到了 js 的内置 concat 函数（ O（n）），实际复杂度会变高
 * 并且这种做法不是原地排序，还需要花费 O（n）的空间复杂度
 * @param {*} arr
 * @return {*}
 */
const quickSort = function(arr) {
  if(arr.length <= 1) return arr;
  let pivotIndex = arr.length - 1;
  let pivotValue = arr[pivotIndex];

  let left = [], right = [];
  for (let i = 0; i < pivotIndex; i++) {
    arr[i] < pivotValue ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat([pivotValue], quickSort(right));
}

/**
 * @description: O(n log n)，原地排序
 * @param {*} arr
 * @return {*}
 */
const quickSort2 = function(arr) {

  const sort = function(arr, left, right) {
    if(left >= right) return arr

    let partitionPivot = partition(arr, left, right)
    sort(arr, left, partitionPivot - 1)
    sort(arr, partitionPivot + 1, right)
  }

  const partition = function(arr, left, right) {
    let pivot = left
    let index = left + 1;
    for(let i = index; i <= right; i++) {
      if(arr[i] < arr[pivot]) {
        swap(arr, i, index)
        index ++
      }
    }

    let partitionPivot = index - 1
    swap(arr, pivot, partitionPivot)

    return partitionPivot
  }

  let left = 0, right = arr.length - 1
  sort(arr, left, right)

  return arr
}

const arr = [3, 1, 1, 5, 7];

console.time('quick sort')
console.log( quickSort(arr) );
console.timeEnd('quick sort')