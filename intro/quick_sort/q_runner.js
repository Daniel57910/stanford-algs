const q_sort = require('./q_sort')

let arr = []
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 10000))
}
console.log(arr)
q_sort(arr)
for (i of arr) {
  console.log(`i is ${i}`)
}