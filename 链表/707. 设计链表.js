/*
 * @Author: zengfh
 * @Date: 2021-12-25 14:04:45
 * @LastEditTime: 2021-12-25 15:25:39
 * @Description: 
 */

function LinkNode(val, next) {
  this.value = val ;
  this.next = next ;
}

function MyLinkedList() {
  this._size = 0;
  this._head = null;
  this._tail = null;
}

 /**根据index返回节点
  * @param {*} index
  * @return {*}
  */
 MyLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this._size)  return null;

  let cur = this._head;
  while(index -- > 0) {
    cur = cur.next;
  }

  return cur;
 }

/** 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * @param {number} index
 * @return {number}
 */
 MyLinkedList.prototype.get = function(index) {
  return this.getNode(index) ? this.getNode(index).value : -1;
};

/** 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let curHead = this._head;
  let newHead = new LinkNode(val, curHead);

  this._head = newHead;
  this._size ++;

  if(!this._tail) this._tail = this._head; // 如果还没有tail节点，则初始化tail等于head
};

/** 将值为 val 的节点追加到链表的最后一个元素。注意判断头结点是否初始化
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let curTail = this._tail;
  let newTail = new LinkNode(val, null);

  if(curTail !== null) {
    curTail.next = newTail;
    this._tail = newTail;
    this._size ++;
    return;
  }
  this._tail = newTail;
  this._head = this._tail;
  this._size ++;
};

/**在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。
 * 如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
 MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this._size) return;
  if(index <= 0) {
      this.addAtHead(val);
      return;
  }
  if(index === this._size) {
      this.addAtTail(val);
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this._size++;
};

/**如果索引 index 有效，则删除链表中的第 index 个节点。
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return;
  if(index === 0) {
      this._head = this._head.next;
      // 如果删除的这个节点同时是尾节点，要处理尾节点
      if(index === this._size - 1){
          this._tail = this._head
      }
      this._size--;
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);    
  node.next = node.next.next;
  // 处理尾节点
  if(index === this._size - 1) {
      this._tail = node;
  }
  this._size--;
};


let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);
linkedList.get(1);
linkedList.deleteAtIndex(1);
linkedList.get(1);

