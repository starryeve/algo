/*
 * @Author: zengfh
 * @Date: 2022-03-11 07:43:57
 * @LastEditTime: 2022-03-11 07:56:35
 * @Description: 使用一个变量记录股票市场的最低价格，另一个
 * 记录最大利润。遍历一次 prices，如果当前比先前的最低价格还低，
 * 则更新最低价格，如果当前减去最低价格比最大利润还大，则更新最大利润
 * 
 */

const maxProfit = function(prices) {
  let minPrice = prices[0]
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if(prices[i] <  minPrice) minPrice = prices[i]
    else if(prices[i] - minPrice > res) {
      res = prices[i] - minPrice
    }
  }

}

