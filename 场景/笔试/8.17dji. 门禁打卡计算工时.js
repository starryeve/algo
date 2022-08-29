/*
上班时间统计
员工经过公司门禁时，需要刷卡记录 进入/离开 时间，统计员工在公司的总时长
给定用例：
6
out 06:00:00
in 08:00:10
out 10:20:30
in 12:00:00
out 13:10:00
out 14:30:00
*/

const { createInterface } = require('readline')

const input = createInterface({
	input: process.stdin,
	output: process.stdout,
})

let count = 0,
	n
const timePoints = []
input.on('line', (str) => {
	if (count === 0) n = Number(str)
	else {
		timePoints.push(str.split(' '))
		n--

		if (n === 0) {
			let workTime = 0
			let isWorking = false
			let startTime = ''
			for (let timePoint of timePoints) {
				const [state, time] = timePoint
				if (state === 'in') {
					startTime = time
					isWorking = true
				}
				if (isWorking && state === 'out') {
					workTime += diffBetweenTwoTime(startTime, time)
					isWorking = false
				}
				if (!isWorking && state === 'out') {
					continue
				}
			}

			console.log(formatTime(workTime))
		}
	}

	count++
})

// 根据两个 hh:mm:ss 时间点，计算秒差值
function diffBetweenTwoTime(start, end) {
	const [h1, m1, s1] = start.split(':').map((i) => parseInt(i, 10)),
		[h2, m2, s2] = end.split(':').map((i) => parseInt(i, 10))

	return h2 * 3600 + m2 * 60 + s2 - (h1 * 3600 + m1 * 60 + s1)
}

// 根据秒数格式化为 hh:mm:ss
function formatTime(time) {
	let h = Math.floor(time / 3600)
	let m = Math.floor((time / 60) % 60)
	let s = Math.floor(time % 60)

	h = h < 10 ? '0' + h : h
	m = m < 10 ? '0' + m : m
	s = s < 10 ? '0' + s : s

	return h + ':' + m + ':' + s
}
