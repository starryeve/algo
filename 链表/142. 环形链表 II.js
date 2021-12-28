/*
 * @Author: zengfh
 * @Date: 2021-12-28 15:33:52
 * @LastEditTime: 2021-12-28 16:23:14
 * @Description: 最容易想到的是遍历链表中的每个节点，并使用一张哈希表将它记录下来（这里直接用set就行了）。
 * 当遇到了此前遍历过的节点，就可以判断链表中存在环，这种做法是需要消耗很多额外的内存空间。时间复杂度和空间复杂度都为O(n)
 */ 
function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

// /** 哈希表解法
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//  var detectCycle = function(head) {
//     const visited = new Set();
//     let pos = head;
//     while(pos !== null){
//       if(visited.has(pos)) {
//         return pos;
//       }

//       visited.add(pos);
//       pos = pos.next;
//     } 

//     return pos;
// };


/**
 * 双指针解法,这类链表题目一般都是使用双指针法解决的，例如寻找距离尾部第K个节点、寻找环入口、寻找公共尾部入口等。
 * @param {*}
 * @return {*}
 */

const detectCycle = function(head) {
  if(head === null) {
    return null;
  }

  let slow = head, fast = head;
  while(fast !== null) {
    slow = slow.next;
    if(fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if(fast === slow) {
      let ptr = head;
      while(ptr !== slow) {
        ptr = ptr.next;
        slow= slow.next;
      }
      return ptr;
    }
  }
  return null;
}


