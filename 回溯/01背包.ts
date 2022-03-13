/*
 * @Author: zengfh
 * @Date: 2022-03-13 09:08:38
 * @LastEditTime: 2022-03-13 09:27:13
 * @Description: 
 */

const bagFc = function(weight: number[], value: number[], bagWeight: number) {
  let res = 0


  const backTracking = function(w: number, v: number, i: number) {
    if(w > bagWeight)  return 
    if(i === weight.length ) {
      res = v > res ? v : res
      return
    }

    backTracking(w + weight[i], v + value[i], i + 1 )
    backTracking(w , v , i + 1 )
  }

  backTracking(0,0,0)

  return res
}
const weight = [1,3,4], value = [10,15,20], bagWeight = 4

console.log(bagFc(weight, value, bagWeight) );
