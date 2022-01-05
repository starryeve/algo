/*
 * @Author: zengfh
 * @Date: 2022-01-03 16:42:26
 * @LastEditTime: 2022-01-05 21:11:22
 * @Description:
 */

/**
 * 使用JavaScript的api实现
 * @param {*} s
 * @return {*}
 */
// const reverseWords = function(s) {
//   const arr  = s.split(/\s+/); // 正则表达式以一个或多个空格作为分割符
//   arr.reverse();

//   return arr.join(" ").trim(); // 过滤前后两端空格
// }

const reverseWords = function(s) {
  // 将字符串转为字符数组，方便操作
  const arr = Array.from(s);
  // todo1: 先去除多余空格
  removeExtraSpaces(arr);

  // todo2: 对字符串进行翻转
  reverse(arr, 0, arr.length - 1);
  console.log(arr);
  // todo3: 根据空格分割word，对word进行翻转
  let start = 0, end = 0;
  for (let i = 0; i < arr.length + 1; i++) {
    if(arr[i] === ' ' || i === arr.length) {
      end = i - 1;
      reverse(arr, start, end);
      start = i + 1;
    }
  }

  return arr.join("");
}

const reverse = function(arr, l, r) {
  l --;
  r ++;

  while(++l < --r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
  }
}
const removeExtraSpaces = function(arr) {
  let slow = 0, fast = 0; // 定义快，慢指针
  // 先去掉字符串前面的空格
  while(arr[fast] === ' ') {
    fast ++;
  }

  for ( ;  fast < arr.length; fast++) {
      // 去掉中间冗余的空格
      if(arr[fast] === ' ' && arr[fast - 1] === arr[fast]) { // 单词的后面有两个以上的字符串
        continue;
      } else {
        arr[slow] = arr[fast];
        slow++;
      }
  }


  // 去掉字符串后面的空格
  if(arr[slow - 1] === ' ' ) arr.splice(slow - 1);
  else arr.splice(slow);

  return arr;
}

const s = "the     sky is blue   "
console.log(reverseWords(s));

