/*
 * @Author: zengfh
 * @Date: 2021-12-12 18:35:02
 * @LastEditTime: 2021-12-25 14:00:52
 * @Description: 
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while(cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}; 


const reverseList = function(head) {
  let prev = null;
  let cur = head;
  while(cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}


