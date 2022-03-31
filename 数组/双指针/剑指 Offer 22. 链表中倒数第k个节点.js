/*
 * @Author: zengfh
 * @Date: 2022-03-31 08:49:40
 * @LastEditTime: 2022-03-31 08:49:40
 * @Description: 
 */

var getKthFromEnd = function(head, k) {
  let slow = head, fast = head
  while(fast) {
      if(k-- <= 0) slow = slow.next 
      fast = fast.next
  }
  return slow
};