/*
 * @Author: zengfh
 * @Date: 2022-04-06 09:12:30
 * @LastEditTime: 2022-04-06 09:12:31
 * @Description: 
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
  // 1, 从数组中选择 0 ~ （k - 1），构建大顶堆
      // 2. 从下标k开始，遍历数组，与堆中根元素进行比较
      // 3. 若小于根元素，则做交换后重新堆化；否则，继续遍历
      function buildHeap(arr, validSize) { // 自上而下堆化
          let cur = Math.floor((validSize - 1 - 1) / 2)
          while(cur >= 0) { // 从前往后遍历
              heapify(arr, cur, validSize)
              cur --
          }
      }
      function heapify(arr, i, validSize) {
         while(true) {
              let minI = i
              let lI = 2*i + 1, rI = 2*i + 2
              if(lI < validSize && arr[lI] > arr[i]) minI = lI
              if(rI < validSize && arr[rI] > arr[minI]) minI = rI
              if(minI === i)    break
             [arr[i], arr[minI]] = [arr[minI], arr[i]]
             i = minI
         }
      }

      buildHeap(arr, k)
      for(let i = k; i < arr.length; i++) {
          if(arr[i] < arr[0])  {
              [arr[i], arr[0]] = [arr[0], arr[i]]
              heapify(arr, 0, k)
          }
      }

      return arr.slice(0, k)
  };