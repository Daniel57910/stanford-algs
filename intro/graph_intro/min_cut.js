var readLineSync = require('read-each-line-sync')
const Pair = require(`./src/pair`)
var test = []
readLineSync('min_cut_test.txt', 'utf8', function (current_line) {
  let line = current_line.split("\t")
  let current_pair = new Pair(parseInt(line[0]), line.slice(1, line.length).map((vertex) => parseInt(vertex)))
  test.push(current_pair)

})

console.log(test)