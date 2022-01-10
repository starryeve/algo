/*
 * @Author: zengfh
 * @Date: 2022-01-10 14:47:29
 * @LastEditTime: 2022-01-10 14:51:53
 * @Description: 
 */
const MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
}

MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
}

MyQueue.prototype.pop = function(x) {
  if(this.stack2.length > 0) return this.stack2.pop();

  while(this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }

  return this.stack2.pop();
}

MyQueue.prototype.peek = function() {
  const top = this.pop();
  this.stack2.push(top);

  return top;
}

MyQueue.prototype.empty = function() {
  return this.stack1.length <= 0 && this.stack2.length <= 0;
}