class Heap {
	constructor(compare) {
		this.arr = []
		this.compare = typeof compare === 'function' ? compare : this._defaultCompare
	}

	/**
	 * 将元素添加进堆中
	 * @param {*} item
	 * @return {}
	 */
	push(item) {
		let { arr } = this
		arr.push(item)
		this._up(arr.length - 1)
	}

	/**弹出最高优先级的元素
	 * @return {*} res
	 */
	pop() {
		if (this.size === 0) return null
		let { arr } = this
		this._swap(0, arr.length - 1)
		let res = arr.pop()
		this._down(0)
		return res
	}

	/**
	 * 返回堆顶元素
	 * @param {int} k
	 */
	peek() {
		return this.arr[0]
	}

	/**
	 * 根据可迭代对象生成堆
	 * @param {*} data iterable 对象
	 * @param {*} compare
	 */
	static heapify(data, compare = undefined) {
		let heap = new Heap(compare)
		for (let item of data) {
			heap.push(item)
		}

		return heap
	}

	get size() {
		return this.arr.length
	}

	/**
	 * 上浮第k个元素
	 * @param {int} k
	 */
	_up(k) {
		let { arr, compare, _parent } = this
		while (k > 0 && compare(arr[k], arr[_parent(k)])) {
			this._swap(_parent(k), k)
			k = _parent(k)
		}
	}

	/**
	 * 下沉第k个元素
	 * @param {int} k
	 */
	_down(k) {
		let { arr, compare, _left, _right } = this
		let size = this.size
		while (_left(k) < size) {
			let child = _left(k)
			if (_right(k) < size && compare(arr[_right(k)], arr[child])) {
				child = _right(k)
			}

			if (compare(arr[k], arr[child])) return

			this._swap(k, child)
			k = child
		}
	}
	_left(k) {
		return k * 2 + 1
	}
	_right(k) {
		return k * 2 + 2
	}
	_parent(k) {
		return Math.floor((k - 1) / 2)
	}

	/**
	 * 交换位置
	 * @param {int} i
	 * @param {int} j
	 */
	_swap(i, j) {
		let arr = this.arr
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}

	/**
	 * a是否比b更接近堆顶，默认为小顶堆
	 * @param {*} a
	 * @param {*} b
	 * @return {boolean}
	 */
	_defaultCompare(a, b) {
		return a < b
	}
}

module.exports = Heap

const nums = [399, 908, 648, 357, 693, 502, 331, 649, 596, 698]
const heap = Heap.heapify(nums)

console.log(heap)
