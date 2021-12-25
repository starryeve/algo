/*
 * @Author: zengfh
 * @Date: 2021-12-10 14:16:33
 * @LastEditTime: 2021-12-10 15:35:15
 * @Description: 每次只画一个圈线，在这条线里面顺时针方向遍历
 * 并填充数组，如果n为奇数的话，遍历整数圈之后还会剩下最中间的空位未被填充
 * 随着圈数的递减，每个方向上可遍历的元素也会递减，每次减2，因此需要维护一个offset
 * 控制遍历填充的大小
 * 
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let startX = startY = 0; // 起始位置
  let loop = Math.floor(n / 2); // 循环圈数
  let mid = Math.floor(n / 2); // 中间位置,处理奇数

  let offset = 1; // 控制每一层填充元素个数
  let count = 1; // 更新填充数字
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(res);

  while(loop--) {
    console.log(loop);
    let row = startX, col = startY;

    // 上行从左到右
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++
    }

    // 右列从上到下
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }

    // 下行从右到左
    for ( ;  col > startX; col--) {
      res[row][col] = count++;
    }

    // 左列从下到上
    for ( ; row > startX; row--) {
      res[row][col] = count++;
    }
    

    // 更改startX和startY
    startX++;
    startY++;

    offset += 2;
  }

   // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
   if (n % 2 === 1) {
    res[mid][mid] = count;
    }
  return res;
};


console.log(generateMatrix(4));