/*
 * @Author: zengfh
 * @Date: 2022-04-05 08:45:48
 * @LastEditTime: 2022-04-05 09:35:00
 * @Description: 
 */

const heapSort = function(arr) {
  let validSize = arr.length // 初始时有效序列的长度为数组长度
  buildHeap(arr, validSize)
  console.log(arr);
	for(let i = validSize - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    console.log(arr);
    validSize --
    heapify(arr, 0, validSize) // 因为只调整了根节点，下方的子树还是保持着堆的特性，所以只需要从根节点开始进行堆化
  }
}

function buildHeap(arr, validSize) {
  let cur = Math.floor((validSize - 1 - 1) / 2) // 取最后一个非叶子节点下标
  while(cur >= 0) { // 从后往前遍历堆化
    heapify(arr, cur, validSize)
    cur --
  }
}

function heapify(arr, i, validSize) {
  while(true) { // 从上往下堆化
    let minI = i
    let lI = 2*i + 1, rI = 2*i + 2
    if(lI < validSize && arr[lI] > arr[i]) minI = lI
    if(rI < validSize && arr[rI] > arr[minI])	minI = rI
    if(minI === i)	break
    [arr[i], arr[minI]] = [arr[minI], arr[i]]
    i = minI
  }
}
const arr = [6,5,4,1,3,2,8]

heapSort(arr)
console.log(arr);