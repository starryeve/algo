/*
 * @Author: zengfh
 * @Date: 2022-04-04 13:50:06
 * @LastEditTime: 2022-04-04 13:55:39
 * @Description: 
 */
function buildHeap(items) {
  if(items.length <= 1)	return
  let cur = 1
  while(cur < items.length) {
    heapify(items, cur)
    cur++
  }
}

function heapify(items, i) {
  let pI = Math.floor((i - 1) / 2)
  while(pI >= 0 && items[i] > items[pI]) {
		swap(items, i , pI) // 交换
    i = pI
    pI = Math.floor((i - 1) / 2)
  }
}

function swap(items, i, j) {
  [items[i], items[j]] = [items[j], items[i]]
}

const arr = [6,5,4,1,3,2,8]
buildHeap(arr)
console.log(arr);