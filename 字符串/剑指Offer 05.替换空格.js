/*
 * @Author: zengfh
 * @Date: 2022-01-02 21:10:04
 * @LastEditTime: 2022-01-03 16:38:52
 * @Description: 有多种实现方式，最简单的几种都是额外开辟空间, 时间空间复杂度都为O（n）; 另外一种实现方式是先一轮遍历找出空格的数量，
 * 再将原字符串进行扩容，在原有字符串上进行替换操作，时间复杂度为O（n），空间复杂度为O(1)
 */
/**1. 开辟一个新的数组，遍历原有的字符串，当下标所属字符为‘ ’时，数组添加三个元素；否则，添加下标所属字符。
 * @param {string} s
 * @return {string}
 */
//  var replaceSpace = function(s) {
//    let ns = [];
//   for (let i = 0; i < s.length; i++) {
//    if(s[i] === ' ') {
//      ns.push('%');
//      ns.push('2');
//      ns.push('0');
//    } else {
//      ns.push(s[i])
//    }
//   }

//   return ns.join('')
// };

/**2. 正则做法
 * @param {string} s
 * @return {string}
 */
// var replaceSpace = function(s) {
//   return s.replace(/\s/g, "%20"); // String.replace方法返回一个新的字符串，满足pattern的字符子串会被replacement替换，
//   // 若pattern是字符串，则只替换第一个
// }


/**
 * @description: 3.原地扩容法
 * 为什么要从后向前填充，从前向后填充不行么？
从前向后填充就是$O(n^2)$的算法了，因为每次添加元素都要将添加元素之后的所有元素向后移动。
其实很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。
这么做有两个好处：1不用申请新数组。2从后向前填充元素，避免了从前先后填充元素要来的 每次添加元素都要将添加元素之后的所有元素向后移动。
 * @param {*} s
 * @return {*}
 */
var replaceSpace = function(s) {
  const arrArr = s.split('');

  let count = 0;
  let arrLen = arrArr.length;

  for (let i = 0; i < arrLen; i++) {
    if(arrArr[i] === ' ') count ++;
  }

  let left = arrLen - 1, right = arrLen + 2 * count - 1;
  while(left < right) {
    if(arrArr[left] === ' ') {
      arrArr[right--] = '0';
      arrArr[right--] = '2';
      arrArr[right] = '%';
    } else {
      arrArr[right] = arrArr[left];
    }

    left --;
    right --;
  }

  return arrArr.join('');
}


const s = "We are happy."

console.log(replaceSpace(s));