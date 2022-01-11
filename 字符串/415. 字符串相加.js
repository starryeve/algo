/*
 * @Author: zengfh
 * @Date: 2022-01-11 13:23:05
 * @LastEditTime: 2022-01-11 13:50:51
 * @Description: 
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  const checkNum = num => typeof num === 'string' && !isNaN(Number(num)) // 判断传入的是否是代表数字的字符串
  const formatNum = num => { //  针对两个大数长度不一致时，超长的数字格式化为0
    if(typeof num === 'number') return num;
    if(!isNaN(Number(num))) return Number(num);

    return 0
  }
  if(!checkNum(num1) && !checkNum(num2)) throw new Error("number type error");

  const num1arr = num1.split('').reverse(); // 将字符串转为每位数组，翻转，方便后面从低位开始相加
  const num2arr = num2.split('').reverse();

  const res = [];
  let carry = 0  // 进位
  for (let i = 0; i <= Math.max(num1arr.length, num2arr.length); i++) { // 考虑因为进位而导致的位数长度比原来的多1
    const addRes = formatNum(num1arr[i])  + formatNum(num2arr[i])  + carry; // 加上上一位计算的进位
    res[i] = addRes % 10;
    carry = addRes > 9 ? 1 : 0;
  }

  // 计算完成，翻转回来
  if(res[res.length - 1] === 0)  res.pop();
  return res.reverse().join('');
};


console.log(addStrings("0", "9999") );