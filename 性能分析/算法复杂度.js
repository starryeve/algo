// n 1.5 * 10^9
// n^2  3.8 * 10^4
// nlogn 3 * 10^7 本地node14


// O(n)
const nf = function(n) {
  const start_time = new Date();
  let k = 0;
  for (let i = 0; i < n; i++) {
    // console.log(k);
    k++;
  }
  const end_time = new Date();
  console.log(`耗时: ${end_time - start_time}`);
}

// O(n^2)
const n2f = function(n) {
  const start_time = new Date();
  let k = 0;
  for (let i = 0; i < n; i++){
    for(let j = 0; j < n; j ++) {
      // console.log(k);
      k++;
    }
  }
  const end_time = new Date();
  console.log(`耗时: ${end_time - start_time}`);
}

// O(nlogn)
const nlognf = function(n) {
  const start_time = new Date();
  let k = 0;
  for (let i = 0; i < n; i++){
    for(let j = 1; j <= n; j = j * 2) {
      // console.log(k);
      k++;
    }
  }
  const end_time = new Date();
  console.log(`耗时: ${end_time - start_time}`);
}

const testO = function(O, n) {
  
  switch (O) {
    case "n": {
      nf(n);
      break;
    }
     
    case "n2": {
      n2f(n);
      break;
    }
      
    case "nlogn": {
      nlognf(n);
      break;
    }
     
    default: 
      throw new Error("输入非法")
  }

}


// readline 模块提供了用于从可读流中每次一行地读取数据的接口
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("请输入要测试的复杂度O和问题规模n, 中间以空格分割: ");
rl.on("line", (line) => {

  const input = line.split(' '); // 根据空格分割
  const O = input[0];
  const n = parseInt (input[1]);


  testO(O, n);
  // console.log("\n请输入要测试的复杂度O和问题规模n, 中间以空格分割");
})