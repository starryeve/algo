/*
 * @Author: zengfh
 * @Date: 2022-03-31 09:09:32
 * @LastEditTime: 2022-03-31 09:09:32
 * @Description: 
 */
var removeNthFromEnd = function(head, n) {
  const vnode = new ListNode(0, head)
    let slow = vnode, fast = vnode
    while(fast.next) {
        if(n-- <= 0) slow = slow.next 
        fast = fast.next
    }
  slow.next = slow.next ? slow.next.next : slow.next // 考虑删除的是头结点
    return vnode.next
  };