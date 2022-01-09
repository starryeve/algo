/*
 * @Author: zengfh
 * @Date: 2022-01-09 12:27:12
 * @LastEditTime: 2022-01-09 13:13:13
 * @Description:
 */

/**首先想到的是使用栈，把所有的左括号先push到栈中，当遇到右括号，则从栈中pop一个元素，看是否能凑成一对
 * 但这样子还会涉及到是否凑成一对的判断，其实这些不必要的操作。
 * 每次遇到左括号，可以将与其对应的右括号push到栈中；每次遇到右括号，就从栈中pop一个元素，看是否等于右括号，若不是，就已经不匹配了直接return
 * 不匹配的情况有三种：
 * 1.左括号冗余
 * 2.右括号冗余
 * 3.没有冗余，但在遍历到某个元素的时候，括号没有匹配上
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    switch(c) {
      case '(': {
        stack.push(')');
        break;
      }
      case '{': {
        stack.push('}');
        break;
      }
      case '[': {
        stack.push(']');
        break;
      }
      default: {
        let top = stack.pop();
        if(top !== c)   return false; // 如果top为null, 则是情况2；否则，情况3
      }
    }
  }


  return stack.length > 0 ? false : true; // 注意判断栈中是否还有元素，有的话证明左括号冗余（情况1）
};


console.log(isValid("{}{})"));