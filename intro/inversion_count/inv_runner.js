const inversion = require('./inversion')
const readLine = require('readline')
const fs = require('fs')
const readline = require('readline');

var readLineSync = require('read-each-line-sync')
var array = []
readLineSync('int_file.txt', 'utf8', function(line) {
  array.push(parseInt(line))
})
console.log(array)
console.log('done')
