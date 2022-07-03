/**
 * @description: 给定两个非空链表，表示两个非负整数，逆序方式每个节点存储一位数字
 * 以相同形式返回两个数相加结果
 * @solution:
 * 1. 定义一个虚拟头结点，定义一个进位变量
 * 2. 遍历两个链表，对相同位置的两个节点进行相加，
 * 若某一个链表该位置为空，则为0，同时依据结果更改进位
 * 直到两个链表都达到链尾
 * 3. 依据进位值，判断是否添加多一个节点
 *
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

const addTwoNumbers = function (l1, l2) {
	const res = new ListNode()
	let carry = 0,
		idx = res // 进位

	while (l1 || l2) {
		const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
		const curSum = sum % 10
		carry = sum >= 10 ? 1 : 0

		idx.next = new ListNode(curSum)
		idx = idx.next

		l1 = l1 ? l1.next : l1 // 若链表已遍历到尾部，则指针停止往后移
		l2 = l2 ? l2.next : l2
	}
	carry === 1 && (idx.next = new ListNode(1))

	return res.next
}
