const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (line) => {
	let [n, x, y, k] = line.split(' ').map((item) => BigInt(item))
	xs = k
	ys = n - k + 1n

	if (xs * y < x * ys) {
		console.log('Win')
	} else if (xs * y === x * ys) {
		console.log('Tie')
	} else {
		console.log('Lose')
	}
})
