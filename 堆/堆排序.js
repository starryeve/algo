/*
 * @Author: zengfh
 * @Date: 2022-04-04 14:37:45
 * @LastEditTime: 2022-04-04 15:13:05
 * @Description: 
 */
const heapSort = function(arr) {
  let validSize = arr.length
  buildHeap(arr, validSize)

  while(validSize > 0) {
    [arr[0], arr[validSize - 1]] = [arr[validSize - 1], arr[0]] // 交换堆顶元素与有效序列最后一个元素
    buildHeap(arr, --validSize)
    console.log(arr);
  }
}

function buildHeap(arr, validSize) {
	if(arr.length <= 1) return
  let cur = 1
  while(cur < validSize) {
    heapify(arr, cur)
    cur ++
  }
}

function heapify(arr, i) {
  let pI = Math.floor((i - 1) / 2)
  while(pI >= 0 && arr[i] < arr[pI]) {
    [arr[i], arr[pI]] = [arr[pI], arr[i]]
    i = pI
    pI = Math.floor((i - 1) / 2)
  }
}

const arr = [2,1,3,4,2]

heapSort(arr)
console.log(arr);