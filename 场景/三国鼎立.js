/*
 * @Author: zengfh
 * @Date: 2022-04-06 19:17:55
 * @LastEditTime: 2022-04-06 20:46:50
 * @Description: 
 */
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0, m = 0
let arr = []
rl.on('line', line => {
    if(n === 0) {
      const line1 = line.split(' ')
      n = parseInt( line1[0] ), m = parseInt( line1[1] )
      console.log(n, m);
    }
    else {
          const area = Array.from(line)
        arr.push(area)
    }
    if(arr.length === n) {


      let res = 0,
      visited = new Array(n).fill('').map(_ => new Array(m).fill(0))

      function dfs(arr, i, j, val) {
        if(i < 0 || i >= n || j < 0 || j >= m || visited[i][j] === 1 || arr[i][j] !== val) {
          return
        }
        visited[i][j] = 1

        dfs( arr, i, j-1, val)

        dfs(arr, i, j+1, val)

        dfs(arr, i-1, j, val)

        dfs(arr, i+1, j, val)

      }

      for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(visited[i][j] !== 1){
              res ++
              dfs(arr, i, j, arr[i][j])
            }
        }
      }

      console.log(res)
    }
} )



// let n = 8, m = 6
// let arr = [
//   [3,2,1,1,2,3],
//   [3,3,2,1,2,3],
//   [2,3,1,1,1,1],
//   [3,1,2,2,1,3],
//   [3,3,3,1,3,1],
//   [1,2,3,2,2,1],
//   [3,1,3,1,1,3],
//   [1,2,3,2,3,3]
// ]