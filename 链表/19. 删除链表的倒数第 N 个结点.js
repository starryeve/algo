/*
 * @Author: zengfh
 * @Date: 2021-12-27 22:18:10
 * @LastEditTime: 2021-12-28 14:52:59
 * @Description: 使用快慢指针，fast首先移动n步，然后fast和slow同时移动，直到fast指向链表末尾。删除掉slow指向的结点.
 * 因为这里是删除操作，所以可以让fast多走一步（对应slow就会少走一步），最后的slow指向的是待删除节点的上一个节点
 */
function LinkNode(value, next) {
  this.value = value ;
  this.next = next ;
}
const removeNthFromLast = function(head, n) {
  let dummy = new LinkNode(0, head);
  let fast = dummy, slow = dummy;

  n = n + 1;
  while(n --) {
    fast = fast.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next; // 虚拟头节点的下一个节点就是头节点
}

// const removeNthFromEnd = function(head, n) {
//   let ret = new LinkNode(0, head);
//   let fast = ret, slow = ret;

//   n = n + 1;
//   while(n--) {
//     fast = fast.next;
//   }

//   while(fast) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;

//   return ret.next;
// }

// const node1 = new LinkNode(1, new LinkNode(2, new LinkNode(3, null)));

// console.log(removeNthFromEnd(node1, 3)); ;
