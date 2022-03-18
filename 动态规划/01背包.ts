/*
 * @Author: zengfh
 * @Date: 2022-03-13 09:33:17
 * @LastEditTime: 2022-03-18 09:25:39
 * @Description:
 */
const test01Bag = function(weight: number[], value: number[],
   size: number): number {
  /*
  1.确定dp数组及下标含义：
    dp[i][j]表示从下标为[0-i]的物品里任意取，
    放进容量为j的背包，价值总和最大是多少
    背包重量0 1 2 3 4
    物品0
    物品1
    物品2

    2.确定递推公式 :
     - 不放物品i：dp[i][j] = dp[i -1][j]
      (当物品的重量大于背包j重量时，物品i无法放入背包中，所以dp[i][j]的价值依然和前面相同)
     - 放物品i：dp[i][j] = dp[i -1][j - weight[i]] + value[i]
       (dp[i - 1][j - weight[i] ]为背包容量为j - weight[i] 的时候
       不放物品i的最大价值，那么dp[i - 1][j - weight[i]] + value[i],
       就是背包放物品i得到的最大价值
    所以递归公式： dp[i][j] = max(dp[i - 1][j],
     dp[i - 1][j - weight[i]] + value[i]);

     3.dp数组初始化
      背包重量0 1 2 3 4
      物品0  0|15|15|15|15
      物品1  0
      物品2  0

     4.确定遍历顺序
      从上图看出，有两个遍历的维度：物品与背包重量；从dp递推公式，无论是
      dp[i - 1][j] 还是 dp[i - 1][j - weight],dp[i][j]所需的数据
      都从左上角获得，那么先遍历物品再遍历背包，或者反过来，都是可以的

     5.举例推导
      背包重量0  1  2  3  4
      物品0  0|15|15|15|15
      物品1  0|15|15|20|35
      物品2  0|15|15|20|35
    */
      const n = weight.length
      // dp[i][j]表示从下标0-i的物品里任意取，放进容量为j的背包，所能达到的最大价值
      const dp: number[][] = new Array(n).fill([]).map(_ => new Array(size+1).fill(0))
      for(let j = 1; j <= size; j++) {
        if(weight[0] <= j) dp[0][j] = value[0]
      }



      for (let i = 1; i < n; i++) {
        for (let j = 1; j <= size; j++) {
          if( weight[i] > j)   dp[i][j] = dp[i - 1][j]
          else dp[i][j] = Math.max( dp[i - 1][j - weight[i]] + value[i], dp[i - 1][j] )
        }
      }

      console.log(dp);


      return dp[n-1][size] ;
}



function test () {
  console.log(test01Bag([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test()