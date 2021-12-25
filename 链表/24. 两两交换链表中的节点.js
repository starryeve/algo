/*
 * @Author: zengfh
 * @Date: 2021-12-25 15:24:41
 * @LastEditTime: 2021-12-25 15:50:51
 * @Description: 
 */
function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  let dummyNode = new ListNode(0, null);
  dummyNode.next = head;
  let cur = dummyNode;

  while(cur.next && cur.next.next) {
    let temp = cur.next; // 缓存节点
    let temp1 = cur.next.next.next; // 缓存节点

    cur.next = temp.next;
    cur.next.next = temp;
    cur.next.next.next = temp1;

    cur = cur.next.next;
  }

  return dummyNode.next;
}