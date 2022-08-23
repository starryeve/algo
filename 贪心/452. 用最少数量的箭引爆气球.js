/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
	points.sort((a, b) => a[1] - b[1])
	let minArrow = 1
	let end = points[0][1]

	for (let i = 1; i < points.length; i++) {
		const point = points[i]
		if (point[0] > end) {
			minArrow++
			end = point[1]
		}
	}

	return minArrow
}
