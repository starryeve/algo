const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (line) => {
	if (line.length === 0) {
		console.log('')
		return
	}
	const arr = line.split(' ')
	let res = ''
	const [target, ...others] = arr
	for (let i = 0; i < target.length; i++) {
		let flag = others.every((item) => item[i] === target[i])

		if (flag) res += target[i]
		else break
	}
	console.log(res)
})
