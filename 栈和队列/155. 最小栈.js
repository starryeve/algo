/*
 * @Author: zengfh
 * @Date: 2022-01-10 15:22:26
 * @LastEditTime: 2022-01-10 15:43:16
 * @Description: 定义一个辅助栈，在每次push值的时候，同时往辅助栈插入当前栈的最小值
 */
var MinStack = function() {
  this.val_stack = []
  this.min_stack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.val_stack.push(val)
  const length = this.min_stack.length
  this.min_stack.push(val < this.min_stack[length - 1] ? val : this.min_stack[length - 1])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.val_stack.pop()
  this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const val_top = this.val_stack.pop()
  const min_top = this.min_stack.pop()

  this.val_stack.push(val_top)
  this.min_stack.push(min_top)

  return val_top
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const min_top = this.min_stack.pop()


  this.min_stack.push(min_top)

  return min_top
};

const minStack = new MinStack()

minStack.push(1)