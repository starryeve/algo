/*
 * @Author: zengfh
 * @Date: 2021-12-29 16:25:36
 * @LastEditTime: 2021-12-29 16:49:21
 * @Description: 先用一个set1保存nums1，再定义一个resSet存放结果集。遍历nums2，判断set1上是否有nums2的元素，有的话，
 * 则加入resSet
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  // 根据数组大小交换操作的数组
  if(nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }

  const set1  = new Set(nums1);
  const resSet = new Set();


  // nums2.forEach(value => {
  //   if(set1.has(value)) resSet.add(value);
  // })
  // for(const value of nums2) {
  //   set1.has(value) && resSet.add(value);
  // }

  for (let i = nums2.length; i >= 0; i--) { // 循环 比 迭代器快
    set1.has(nums2[i]) && resSet.add(nums2[i]);
  }

  return Array.from(resSet);
};



const nums1 = [4,9,5], nums2 = [9,4,9,8,4];

console.log(intersection(nums1, nums2));