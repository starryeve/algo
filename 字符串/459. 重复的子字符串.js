/*
 * @Author: zengfh
 * @Date: 2022-01-08 14:02:42
 * @LastEditTime: 2022-01-08 14:31:30
 * @Description:
 */
/**换句话说也就是将小括号内的内容至少重复两遍。
 * 最后加上了^和$表示开头和结尾表示对整个字符串进行匹配（这里的^其实可以省略）
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
  const reg = new RegExp(/^([a-zA-Z]+)\1+$/); 
  return reg.test(s);
};


console.log(repeatedSubstringPattern("Axax") )