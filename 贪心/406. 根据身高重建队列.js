/*
 * @Author: zengfh
 * @Date: 2022-03-10 09:15:46
 * @LastEditTime: 2022-03-10 09:23:19
 * @Description: 
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
  const queue = []
  people.sort((a, b) => {
    if(a[0] !== b[0]) {
      return b[0] - a[0]
    } else {
      return a[1] - b[1]
    }
  })
console.log(people);
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  }

  return queue
};

const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
console.log( reconstructQueue(people));