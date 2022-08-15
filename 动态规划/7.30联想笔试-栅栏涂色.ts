/**
小A的门前有n个排成一排的栅栏，编号分别为1,2，...，n。
每个栅栏都是红色或者蓝色的。但小A觉得目前的上色方案看起来有些杂乱，便想要重新对栅栏进行涂色。
具体地，小A认为，如果栅栏的颜色交替次数多于1次，那么就是杂乱的，否则就是整齐的。
换言之，如果栅栏是全红/全蓝/前一段红后一段蓝/前一段蓝后一段红，那么都能符合小A的要求。
请问小A至少需要对几个栅栏进行重新涂色，才能满足他的要求呢？
 */
function colorFence(arr: number[]): number {
	let res: number = 0
	const len: number = arr.length
	if (len <= 1) return res
	if (len === 2) {
		res = arr[0] === arr[1] ? 0 : 1

		return res
	}

	const l0_dp: number[] = new Array(len).fill(0),
		l1_dp: number[] = new Array(len).fill(0)
	const r0_dp: number[] = new Array(len).fill(0),
		r1_dp: number[] = new Array(len).fill(0)

	for (let i = 1; i < len; i++) {
		l0_dp[i] = l0_dp[i - 1] + (arr[i - 1] === 0 ? 0 : 1)
		l1_dp[i] = i - l0_dp[i]
	}

	for (let i = len - 2; i >= 0; i--) {
		r0_dp[i] = r0_dp[i + 1] + (arr[i + 1] === 0 ? 0 : 1)
		r1_dp[i] = len - 1 - i - r0_dp[i]
	}

	const l0r1_min = l0_dp.map((item, index) => item + r1_dp[index]).sort()[0]
	const l1r0_min = l1_dp.map((item, index) => item + r0_dp[index]).sort()[0]

	return Math.min(l0r1_min, l1r0_min)
}

const fence = [0, 0, 0, 1, 1, 1, 0]
console.log(colorFence(fence))
