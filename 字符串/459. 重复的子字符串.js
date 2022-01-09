/*
 * @Author: zengfh
 * @Date: 2022-01-08 14:02:42
 * @LastEditTime: 2022-01-09 12:22:51
 * @Description:
 */
/**换句话说也就是将小括号内的内容至少重复两遍。
 * 最后加上了^和$表示开头和结尾表示对整个字符串进行匹配（这里的^其实可以省略）
 * @param {string} s
 * @return {boolean}
 */
//  var repeatedSubstringPattern = function(s) {
//    // ^和$表示匹配整个字符串，[a-zA-Z]+表示一个或多个任意英文字符的串 \1+表示第一个括号的内容重复一次或多次
//   const reg = new RegExp(/^([a-zA-Z]+)\1+$/);
//   return reg.test(s);
// };

var repeatedSubstringPattern = function(s) {
  // 1. 计算s的长度l
  // 2. 从i = 0开始，每次取0 ~ i的子串sub
  // 3. 求l % （i - 0 + 1）
  // 4.`若 != 0，则返回到2
  //    若 = 0
  // 5. 计算n = l / (i - 0 + 1), 判断 n 个sub是否等于s，若是，返回sub；若否，返回2

  const sLen = s.length;
 
  for (let i = 0; i < Math.floor(sLen / 2); i++) {
    const sub = s.substring(0, i + 1);

    const subLen = i + 1;
    if(sLen % subLen !== 0) continue;

    n = sLen / subLen;
    let tmpStr = "";

    for (let j = 0; j < n; j++) {
      tmpStr += sub;
    }
    if(tmpStr === s) return true;
  }

  return false;
}

console.log(repeatedSubstringPattern("abcabc") )