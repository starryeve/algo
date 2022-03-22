/*
 * @Author: zengfh
 * @Date: 2022-03-22 08:19:52
 * @LastEditTime: 2022-03-22 09:10:38
 * @Description:
 */

function findLength(nums1: number[], nums2: number[]): number {
  // 1. 确定dp数组函数以及下标含义：dp[i][j]表示以下标 i-1 为结尾的A 和以下标 j-1 为结尾的B
  //    最长重复子数组长度为dp[i][j]

  // 2. 确定递推公式: 当A[i-1] == B[j-1], dp[i][j] = dp[i-1][j-1] + 1

  const dp = new Array<number[]>(nums1.length + 1).fill([]).
  map(_ => new Array<number>(nums2.length + 1).fill(0))

  let res = 0
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if(nums1[i-1] === nums2[j-1]) { 
        dp[i][j] = dp[i-1][j-1] + 1
      }
      if(dp[i][j] > res)  res = dp[i][j]
    }
  }
  return res
};


const readline = require('readline')
const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



const l = 2 // 设定题目需要输入的行数
const rows: string[] = [] // 存储每行输入
rl.on('line', (data:string) => {
  rows.push(data.trim())
  if(rows.length === l) { // 当输入行数等于设定值k，开始处理逻辑
    const nums1 = rows[0].split(/\s+/).map(item => parseInt(item))
    const nums2 = rows[1].split(/\s+/).map(item => parseInt(item))

    console.log( findLength(nums1, nums2) )
  }
})


export {}