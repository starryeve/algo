"use strict";
exports.__esModule = true;
/*
 * @Author: zengfh
 * @Date: 2022-03-23 20:27:19
 * @LastEditTime: 2022-03-23 20:35:59
 * @Description:
 */
var maxDuplicate = function (arr) {
    var res = arr[0];
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i];
        map.get(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1);
        if (map.get(e) > map.get(res))
            res = e;
    }
    console.log(map);
    return res;
};
var arr = [1, 3, 3, 2];
console.log(maxDuplicate(arr));
