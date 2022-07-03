/**
 * @description: 设计一个满足 LRU 约束的数据结构
 * LRU 特点如下：
 * 1. 有限的存储空间
 * 2. 存储空间中的数据是有序的
 * 3. 读取/写入/删除数据的时间复杂度为 O(1)
 * 4. 存储空间存满后，添加数据时，自动删除操作时间最长远的数据
 * @solution:
 * 1. 需要一个实例变量n, 记录存储空间大小
 * 2. 考虑使用 Map、Array，因为它们的存取时间复杂度为 O(1)
 * 3. 使用 get / set 读写数据时，该数据需要更新到最前面
 */

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.data = new Map()
	}

	get(key) {
		const data = this.data
		if (!data.has(key)) return -1
		const value = data.get(key) // 获取元素
		data.delete(key) // 删除
		data.set(key, value) // 重新插入

		return value
	}
	put(key, value) {
		const data = this.data
		if (data.has(key)) {
			data.delete(key)
		}
		data.set(key, value)

		// 如果超出了容量，则需要删除最久的数据
		if (data.size > this.capacity) {
			const delKey = data.keys().next().value
			data.delete(delKey)
		}
	}
}
