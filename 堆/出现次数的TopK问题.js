/*
 * @Author: zengfh
 * @Date: 2022-04-07 11:10:56
 * @LastEditTime: 2022-04-08 09:28:36
 * @Description: 来自 https://www.nowcoder.com/questionTerminal/3e58544f1cb74600b0e54984769bbbcf，思路没问题，测试用例一直过不了....
 */
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0, k = 0
let arr = []

function buildHeap(arr, validSize) {
    let cur = Math.floor((validSize - 1 - 1) / 2)
    while(cur >= 0) {
        heapify(arr, cur, validSize)
        cur--
    }
}
function heapify(arr, i, validSize) {
    while(true) {
        let minI = i
        let c = arr[i][1], // 当前节点的计数
            lI = 2*i + 1, rI = 2*i + 2
        if(lI < validSize && arr[lI][1] < c)    minI = lI
        if(rI < validSize && arr[rI][1] < arr[minI][1])    minI = rI 
        if(minI === i)    break
        [arr[i], arr[minI]] = [arr[minI], arr[i]]
        i = minI
    }
}
rl.on('line', line => {
    if(n === 0) {
        let line1 = line.split(' ')
        n = parseInt( line1[0] ), k = parseInt( line1[1] )
    } else {
        arr.push(line)
        if(arr.length === n) {
            let count = {}
            for(let i = 0; i < arr.length; i++) {
                count[arr[i]] ? count[arr[i]]++ : count[arr[i]] = 1
            }
            const countPairs = Object.entries(count)
            // 维护一个长度为 k 的小顶堆
            buildHeap(countPairs, k)

            for(let i = k; i < countPairs.length; i++) {
                if(countPairs[i][1] > countPairs[0][1]) {
                    [countPairs[i], countPairs[0]] =
                    [countPairs[0], countPairs[i]]
                    heapify(countPairs, 0, k)
                }
            }

            const res = countPairs.slice(0,k).reverse()
            res.forEach(i => {
              console.log(i[0] + ' ' + i[1])
            })

        }
    }
})