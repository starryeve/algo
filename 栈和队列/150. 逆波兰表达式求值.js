/*
 * @Author: zengfh
 * @Date: 2022-01-09 13:34:04
 * @LastEditTime: 2022-01-09 15:26:36
 * @Description: 
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  const stack = [];
  const operate = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b) > 0 ? Math.floor(a / b) : Math.ceil(a / b)
  };
  for (const c of tokens) {
    if (operate.hasOwnProperty(c)) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      if(num1 !==  undefined && num2 !== undefined) {
        const res = operate[c](num2, num1);
        stack.push(res);
      }
    } else {
      stack.push(parseInt(c));
    }
  }



  return stack[0];
};

// const tokens = ["4","13","5","/","+"];
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens));