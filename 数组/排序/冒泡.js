/*
 * @Author: zengfh
 * @Date: 2021-12-10 22:36:55
 * @LastEditTime: 2021-12-12 17:48:15
 * @Description: 
 */
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const bubbleSort = function(arr) {
  const len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
      }
    }
  }
}

const arr = [5,4]
bubbleSort(arr);

console.log(arr);