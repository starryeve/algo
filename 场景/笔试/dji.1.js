const { createInterface } = require('readline')

const input = createInterface({
	input: process.stdin,
	output: process.stdout,
})

let count = 0,
	n
const arr = []
input.on('line', (str) => {
	if (count === 0) n = Number(str)
	else {
		arr.push(str)
		n--

		let min = Infinity
		if (n === 0) {
			for (let i = 0; i < arr.length; i++) {
				for (let j = i + 1; j < arr.length; j++) {
					const [ah, am] = arr[i].split(':').map((item) => Number(item))
					const a = ah * 60 + am

					const [bh, bm] = arr[j].split(':').map((item) => Number(item))
					const b = bh * 60 + bm

					const sub = a < b ? b - a : b + 24 * 60 - a

					if (sub < min) min = sub
				}
			}

			console.log(min)
		}
	}

	count++
})
