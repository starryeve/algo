/*
 * @Author: zengfh
 * @Date: 2021-12-06 21:29:38
 * @LastEditTime: 2021-12-06 22:38:13
 * @Description: 
 * 1. 两层循环原数组移除法
 * 是将这两个含退格的字符串，通过移除退格元素之后进行比较，
 * 时间复杂度为2倍的O（n^2）【但其实如果算上字符串自身的 === 就还是不止的】
 * 
 * 2. 利用栈的特性重构数组
 * 因为每次遇到‘#’，都会将上一个元素删除，否则，则顺利保存元素
 * 这可以联想到出栈和压栈，使用栈来重构原本的字符串, 时间复杂度为O（n + m）, 空间复杂度为 O（n + m） 
 * 
 * 3. 双指针比较当前字符
 * ‘#’只会消除左边的元素，对右边的元素不会造成影响，所以可以逆序从右边消除‘#’，每次都只比较S，T字符串的当前位是否相等
 *  准备两个指针i，j分别指向S，T的末位字符，再准备两个变量skipS，skipT存放S，T字符串中的待消除的‘#’数量
 *      
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var backspaceCompare = function(s, t) {
//   var build = function(s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//       if(s[i] === '#') {
//         stack.pop();
//       } else {
//        stack.push(s[i]);
//       }
//     }
   
//     return stack.toString();
//    }
//   return build(s) === build(t) ? true : false;
// };

var backspaceCompare = function(s, t) {
 let i = s.length - 1, j = t.length - 1;
 let skipS = 0, skipT = 0;

 while(i >= 0 || j >= 0) {
  while(i >= 0) {
    if(s[i] === '#') {
      skipS ++;
      i --;
    } else if(s[i] !== '#' && skipS !== 0) {
      skipS --;
      i --;
    } else {
      break;
    }
  }

  while(j >= 0) {
    if(s[j] === '#') {
      skipT ++;
      j --;
    } else if(s[j] !== '#' && skipT !== 0) {
      skipT --;
      j --;
    } else {
      break;
    }
  }

  if(s[i] !== t[j]) return false;
  i--;
  j--;
 }

 return true;
};




const s = "ab#c", t = "ad#c";

console.log(backspaceCompare(s, t)); 