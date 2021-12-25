/*
 * @Author: zengfh
 * @Date: 2021-12-12 17:59:15
 * @LastEditTime: 2021-12-12 18:01:04
 * @Description: 
 */

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const selectSort = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i; // 最小元素下标
    for (let j = i+1; j < len; j++){
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }
}

const arr = [5,4]
selectSort(arr);

console.log(arr);