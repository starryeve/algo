/*
 * @Author: zengfh
 * @Date: 2022-02-06 15:13:54
 * @LastEditTime: 2022-02-06 16:03:50
 * @Description:  后台返回一个扁平的数据结构，换成树
 */


let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

let res = [
  {
      "id": 1,
      "name": "部门1",
      "pid": 0,
      "children": [
          {
              "id": 2,
              "name": "部门2",
              "pid": 1,
              "children": []
          },
          {
              "id": 3,
              "name": "部门3",
              "pid": 1,
              "children": [
                  // 结果 ,,,
              ]
          }
      ]
  }
]


const arrayToTree1 = function(arr, pid) {
  function getChild(arr, result, pid) {
    for (const item of arr) {
      if(item.pid === pid)  {
        const newItem = {...item, children : [] };
        result.push(newItem);
        getChild(arr, newItem.children, newItem.id);
      }
    }
  }

  const result = [];
  getChild(arr, result, pid);

  return result;
}

const arrayToTree2 = function(arr) {
  const result = [];
  const map = new Map();

  for (const item of arr) {
    map.set(item.id, {...item, children:[]});
  }

  console.log(map);

  for (const item of arr) {
    const id = item.id, pid = item.pid;
    if(pid === 0) {
      result.push(map.get(id));
    } else {
      map.get(pid)?.children.push(map.get(id));
    }
  }


  return result;
}


console.log(JSON.stringify( arrayToTree2(arr)))