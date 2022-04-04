/*
 * @Author: zengfh
 * @Date: 2022-04-04 13:44:16
 * @LastEditTime: 2022-04-04 13:49:26
 * @Description: 
 */
function swap(items, i, j) {
  [items[i], items[j]] = [items[j], items[i]]
}
function buildHeap(items) {
  const heap = []
  function insert(item) {
    heap.push(item)
    let i = heap.length - 1
    let pI = Math.floor((i - 1) / 2)
    while( pI >= 0 && heap[i] < heap[pI]) {
      swap(heap, i , pI) // 交换
      i = pI
      pI = Math.floor((i - 1) / 2)
    }
  }
  items.forEach(item => {
    insert(item)
  })
  return heap
}


const arr = [6,5,4,1,3,2,8]


console.log(buildHeap(arr));