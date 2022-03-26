/*
 * @Author: zengfh
 * @Date: 2022-03-23 20:17:19
 * @LastEditTime: 2022-03-26 09:51:59
 * @Description:
 */
const smallestK =  (arr, k) => {
  const sort = function(arr, left, right) {
    if(left >= right) return

    let partitionPivot = partition(arr, left, right)
    // if(partitionPivot >= k - 1) return arr.slice(0, k)
    if(partitionPivot === k)  return arr.slice(0, k)
    else if(partitionPivot < k)  sort(arr,  partitionPivot + 1, right)
    else sort(arr, left, partitionPivot - 1)
  }

  const swap = function(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }

  const partition = function(arr, left,
    right) {
    let pivot = left
    let index = left + 1
    for (let i = index; i <= right; i++) {
      if(arr[i] < arr[pivot]) {
        swap(arr, i, index)
        index ++
      }
    }
    let partitionPivot = index - 1
    swap(arr, partitionPivot, pivot)

    return partitionPivot
  }

  sort(arr, 0, arr.length - 1)
  return arr.slice(0, k)
}
const arr = [1,3,5,7,2,4,6,8], k = 4
console.log(smallestK(arr, k) );

