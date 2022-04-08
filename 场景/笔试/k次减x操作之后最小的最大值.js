/*
 * @Author: zengfh
 * @Date: 2022-04-08 08:18:18
 * @LastEditTime: 2022-04-08 09:13:42
 * @Description:
 * 给定一个数组a，对数组中的每一项都可以减x操作，但最多可执行k次，求k次操作后，数组中最小的最大值
 * @Input：a = [7,2,1], k = 3, x = 2
 * @Output：2
 */

// 这道题我一开始是想到了回溯的做法，遍历数组中的每一项，减x，同时k--，回溯继续遍历数组，直到k === 0，计算当前数组中的最大值，与全局的res做笔记
// 时间复杂度为O(n^k)，很显然过不了
function minMaxBackTrack(arr, k, x) {
  let res = Infinity
  /*
  Time Complexity: O(n^k)
  */
  function backTracking(arr, k) {
    if(k === 0) {
      const max = Math.max(...arr)
      if(max < res) res = max
      return
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] -= x
      k --
      backTracking(arr, k)
      arr[i] += x
      k ++
    }
  }

  backTracking(arr, k)

  return res
}

// 换个思路，既然这道题只需要k次后，数组中的最大值是最小的，可以使用贪心，每次只取最大的元素去减x, 最终得到的数组最大值肯定就是最小的，
// 时间复杂度为 O（kn）
function minMax(arr, k, x) {
  while(k--) {
    let max = -Infinity, maxIndex
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > max)  {
        max = arr[i]
        maxIndex = i
      }
    }
    arr[maxIndex] -= x
  }
  return Math.max(...arr)
}
const arr = [7,2,1], k = 3, x = 2

console.log( minMax(arr, k, x) );