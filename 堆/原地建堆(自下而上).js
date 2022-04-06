/*
 * @Author: zengfh
 * @Date: 2022-04-04 13:50:06
 * @LastEditTime: 2022-04-06 08:56:33
 * @Description: 
 */
function buildHeap(arr) {
  let cur = 1
  while(cur < arr.length) {
    heapify(arr, cur)
    cur++
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



const arr = [233,233,233,233,233,233,234,233,233,233,233]
buildHeap(arr)
console.log(arr);