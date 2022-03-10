/*
 * @Author: zengfh
 * @Date: 2022-03-10 09:33:09
 * @LastEditTime: 2022-03-10 10:15:55
 * @Description: 
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let res = []
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
      if(res[res.length - 1][1] >= intervals[i][0] ) {
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1] )
      } else {
        res.push( intervals[i] )
      }
    
  }
  
  return res
};


const intervals = [[1,3],[3,10],[2,6],[15,18]]
console.log(merge(intervals) );