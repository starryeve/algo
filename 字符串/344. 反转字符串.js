/*
 * @Author: zengfh
 * @Date: 2021-12-31 15:57:48
 * @LastEditTime: 2021-12-31 16:44:37
 * @Description: 注意js中的字符串是不可变的（元素只读），每当对字符串进行+操作，都是在栈新增加了一个字符串，改变了变量的指向
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  // s = s.reverse();

  let l = -1, r = s.length;

  while(++l < --r) {
    [s[l], s[r]] = [s[r], s[l]]
  }

};



const s = ["h","e","l","l","o"]
console.log(reverseString(s));
console.log(s);