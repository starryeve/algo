/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	intervals.sort((a, b) => a[1] - b[1])

	let notOverLapIntervalsCount = 1
	let end = intervals[0][1]
	for (let i = 1; i < intervals.length; i++) {
		let interval = intervals[i]
		if (interval[0] >= end) {
			end = interval[1]
			notOverLapIntervalsCount++
		}
	}

	return intervals.length - notOverLapIntervalsCount
}
