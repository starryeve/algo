/*
 * @Author: zengfh
 * @Date: 2022-01-10 14:57:49
 * @LastEditTime: 2022-01-10 15:21:55
 * @Description:在将一个元素 x 插入队列时，为了维护原来的后进先出顺序，需要让 x 插入队列首部。
 * 而队列的默认插入顺序是队列尾部，因此在将 x 插入队列尾部之后，需要让除了 x 之外的所有元素出队列，再入队列。
 */
const MyStack = function() {
  this.queue = [];
}

MyStack.prototype.push = function(x) {
  this.queue.push(x)
  let len = this.queue.length
  while(len -- > 1) this.queue.push(this.queue.shift()) // 除了最新插入队列尾的x,其余元素都要先出队列，再入队列
}

MyStack.prototype.pop = function() {
  return this.queue.shift()
}

MyStack.prototype.top = function() {
  const top = this.pop()
  this.push(top)

  return top
}

MyStack.prototype.empty = function() {
  return !this.queue.length
}

const stack = new MyStack();


stack.push(1)

stack.push(2);
console.log(stack.top());

console.log(stack.pop())