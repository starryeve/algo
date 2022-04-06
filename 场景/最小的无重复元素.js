/*
 * @Author: zengfh
 * @Date: 2022-04-06 15:25:01
 * @LastEditTime: 2022-04-06 18:05:00
 * @Description: 
 */
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

const lines = []
let n = 0
rl.on('line', line => {
    if(n === 0)    {
        lines.push(parseInt( line ))
    }
    if(n === 1)    {
        const num = lines[0], arr = line.split(/\s+/)
        let map = {}
        for(let i = 0; i < arr.length; i++) {
            map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1
        }
        let res = Infinity
        for(const key in map) {
            if(map[key] === 1)    {
                res = parseInt(key) < res ? parseInt(key) : res
            }
        }
        res = res === Infinity ? -1 : res
        console.log(res)
    }
    n ++
})