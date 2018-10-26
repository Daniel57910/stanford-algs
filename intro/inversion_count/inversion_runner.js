const inversion = require('./inversion')
var inversion_count = inversion.inversion
let array = [1, 3, 2, 4, 5, 6]

let countSwap = inversion_count(array)
console.log(array)
console.log('countswap is ' + countSwap)
