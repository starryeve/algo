/*
 * @Author: zengfh
 * @Date: 2022-03-09 09:07:44
 * @LastEditTime: 2022-03-10 07:45:32
 * @Description: 
 */

const maxProfit = function(prices) {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0)
  }

  return res
}