/*
 * @Author: zengfh
 * @Date: 2022-04-04 14:12:29
 * @LastEditTime: 2022-04-05 09:31:42
 * @Description: 
 */
function buildHeap(arr) {
  let cur = Math.floor((arr.length -  1 - 1) / 2)
  while(cur >= 0) {
   heapify(arr, cur)
   cur--
 }
}

function heapify(arr, i) {
 let heapSize = arr.length
 while(true) {
   let minI = i
   let lI = 2*i + 1, rI = 2*i + 2
   if(lI < heapSize && arr[lI] < arr[i]) minI = lI
   if(rI < heapSize && arr[rI] < arr[minI]) minI = rI
   if(minI == i)	break
   [arr[i], arr[minI]] = [arr[minI], arr[i]]
   i = minI
  }

}



const arr = [6,5,4,1,3,2,8]
buildHeap(arr)
console.log(arr);