const inversion = require('./inversion')

var readLineSync = require('read-each-line-sync')
var inversionCount = inversion.inversion

var array = []
readLineSync('int_file.txt', 'utf8', function(line) {
  array.push(parseInt(line))
})

console.log(inversionCount(array))

