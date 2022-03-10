/*
 * @Author: zengfh
 * @Date: 2022-03-10 07:50:30
 * @LastEditTime: 2022-03-10 08:40:06
 * @Description: 这个题可以类比为走格子游戏，格子中的数字代表着回血
 * 每走一格损失一滴血，边走边掉血，看最终能不能走到终点
 */

const canJump = function(nums) {
  if(nums.length === 1) return true
  let cover = 0 // 记录当前所能跳到的最大范围

  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i) // 更新最大范围
    if(cover >= nums.length - 1)  return true // 如果能够覆盖到终点的话
  }

  return false

}

const nums = 
[3,2,1,0,4]
canJump(nums)