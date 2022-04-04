/*
 * @Author: zengfh
 * @Date: 2022-04-04 14:12:29
 * @LastEditTime: 2022-04-04 14:15:48
 * @Description: 
 */
function buildHeap(arr) {
  let arrLength = arr.length
  if(arrLength <= 1)  return
  let cur = Math.floor((arrLength - 1 - 1) / 2)
 while(cur >= 0) {
   heapify(arr, cur)
   cur--
 }
}

function heapify(items, i) {
 let heapSize = items.length
 while(true) {
   let minI = i
   let lI = 2*i + 1, rI = 2*i + 2
   if(lI < heapSize && items[lI] < items[i]) minI = lI
   if(rI < heapSize && items[rI] < items[minI]) minI = rI
   if(minI == i)	break
   swap(items, i, minI)
   i = minI
  }

}

function swap(items, i, j) {
 [items[i], items[j]] = [items[j], items[i]]
}


const arr = [6,5,4,1,3,2,8]
buildHeap(arr)
console.log(arr);