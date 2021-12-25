/*
 * @Author: zengfh
 * @Date: 2021-12-11 16:24:40
 * @LastEditTime: 2021-12-11 16:46:33
 * @Description: 
 * 1. 暴力O(n^2)
 * 2. 初始化一个map，用来存放nums的值和下标，遍历nums，
 *    检查map中是否有已遍历的值，判断target与nums[i]的差值，是否在map中出现
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
   
      if(map.get(target - num) !== undefined) { // 如果map存在某个key，则key就是两数和的第一个数
        return [map.get(target - num),i];
      }

      map.set(num, i);
    }

    return [];
};

const nums = [2,2,4,3,4], target = 6;
console.log(twoSum(nums, target)); 