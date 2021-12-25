/*
 * @Author: zengfh
 * @Date: 2021-12-08 16:59:41
 * @LastEditTime: 2021-12-10 13:58:46
 * @Description: 求最小子串，可以使用滑动窗口的思想，使用fast和slow两个指针，
 * 从fast开始对字符串进行遍历，当[slow, fast]包含子串，则将slow++，
 * 这一步其实是判断左窗口是否有重复值，使得子串不是最小。因为是遍历fast，所以时间复杂度为O(n)，
 * 每次只要判断窗口里是否包含子串
 * 
 * 但这道题还有个问题，怎么判断滑动窗口包含了t的所有元素。可以用一个map结构，维护一个need变量，记录
 * 目标字符串每个元素的数量，举例，目标字符串为ADCD，need初始化为{A:1,D:4,C:1}。每次滑动窗口变更，
 * 都需要判断need里面所有元素是否都小于等于0，是的话，表示满足要求，滑动窗口可从左侧缩短。我们的目的就是要
 * 找到最短的滑动窗口包含的字符子串。上述分析，可以知道时间复杂度为O（n）O（t），这里的O（t）就是每一次判断need
 * 的开销，如果t很大，甚至到了n，那么就会变成O（n^2）。
 * 
 * 其实我们每一次遍历need，都是为了判断每个元素是否都满足了<=0，如果把它们视作整体，还是上面的need{A:1,D:2,C:1}，
 * 我们增加一个needCount = 3，代表满足条件的need元素个数。只要在每次更改need的时候，判断对应的need[key] 是否小于等于0
 * ，若是needCount --
 */

 
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s,t) {
    // const satisfy = function(map) { // map中的所有key对应的value必须小于等于0
    //     for (const [key, value] of map) {
    //         if(value > 0) {
    //             return false;
    //         }
    //     }

    //     return true;
    // }
    const map = new Map();
    let l = 0, r = 0, res = "";
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        map.set(c, map.get(c) ? map.get(c) + 1 : 1);
    }
    let mapSize = map.size; // 代表待满足条件的元素个数


    while(r < s.length) {
        const c1 = s[r];
        if(map.has(c1)) { // 滑动窗口沿右侧拉长，若窗口右侧最新值为need的元素，更新need
            map.set(c1, map.get(c1) - 1);
            if(map.get(c1) === 0) {
                mapSize --;
            }
        }

        // 判断当前窗口是否包含目标子串所有元素，若满足，则更新res，接着沿左侧缩小窗口，试探有无更短的res
        while(mapSize === 0) {
            const curRes = s.substring(l, r + 1);
            if(!res || curRes.length < res.length) {
                res = curRes;
            }

            const c2 = s[l];
            if(map.has(c2)) {
                map.set(c2, map.get(c2) + 1); // 更新need
                if(map.get(c2) === 1) {
                    mapSize ++; // 多了一个元素不满足条件
                }
            }
            l ++; // 左窗口右移 
        }
        r ++; // 右窗口右移 
    }

    return res;
}

const s = "ADOBECODEBANC", t = "ABC";
// const s = "a", t = "aa";
console.log(minWindow(s, t)); 