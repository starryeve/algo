/*
 * @Author: zengfh
 * @Date: 2021-12-28 15:19:39
 * @LastEditTime: 2021-12-28 15:32:01
 * @Description: 设相交链表长度为c，链表A处交集外的长度为a，链表B除交集外的长度为b，则
 * a + c + b = b + c + a，时间复杂度为O（a + c + b）,即两个链表的长度和
 */
function ListNode (value, next) {
  this.value = value;
  this.next = next;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let h1 = headA, h2 = headB; 
    while(h1 !== h2) {
      h1 = h1 === null ? headB : h1.next;
      h2 = h2 === null ? headA : h2.next;
    }

    return h1;
};