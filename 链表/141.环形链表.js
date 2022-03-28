/*
 * @Author: zengfh
 * @Date: 2022-03-28 09:37:49
 * @LastEditTime: 2022-03-28 09:44:32
 * @Description: 
 */
function LinkNode(val, next) {
  this.value = val ;
  this.next = next ;
}


var hasCycle = function(head) {
  const set = new Set()
  let cur = head
  while(cur) {
      if(set.has(cur))    return true
      set.add(cur)
      cur = cur.next
  }
  return false
};

