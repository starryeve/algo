/*
 * @Author: zengfh
 * @Date: 2021-12-27 22:18:10
 * @LastEditTime: 2021-12-27 22:34:21
 * @Description: 
 */
function LinkNode(value, next) {
  this.value = value ;
  this.next = next ;
}

const removeNthFromEnd = function(head, n) {
  let ret = new LinkNode(0, head);
  let fast = ret, slow = ret;

  n = n + 1;
  while(n--) {
    fast = fast.next;
  }

  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return ret.next;
}

const node1 = new LinkNode(1, new LinkNode(2, new LinkNode(3, null)));

console.log(removeNthFromEnd(node1, 3)); ;
