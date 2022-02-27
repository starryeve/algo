/*
 * @Author: zengfh
 * @Date: 2022-02-27 09:27:01
 * @LastEditTime: 2022-02-27 09:38:02
 * @Description: 
 */
const compareVersion = function(v1, v2) {
  // 1. 分割修订号
  const revise1  = v1.split('.')
  const revise2 = v2.split('.')

  function formatRevise(r) {
    return  r === undefined ? 0 : r
  }

  for (let i = 0;  i < Math.max(revise1.length, revise2.length); i++) {
    let cur = Number(formatRevise(revise1[i])) - Number( formatRevise(revise2[i]) )

    if(cur < 0)  return -1
    if(cur > 0) return 1
  }

  return 0
}

const version1 = "1", version2 = "1.1"

console.log( compareVersion(version1, version2) );