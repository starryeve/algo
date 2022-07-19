function diffBST(n: number): number {
	const dp = new Array(n + 1).fill(0) // 1 到 n 为节点组成的BST数量
	dp[0] = 1
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			dp[i] += dp[j - 1] * dp[i - j]
		}
	}
	return dp[n]
}

diffBST(5)
export {}
