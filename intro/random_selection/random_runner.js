const random = require(`./random_select`)

let arr = [2, 4, 1, 8, 31, 99]
let a = random(arr, 3)
console.log(arr.sort((a, b) => a - b))
console.log(`nth is ${a}`)