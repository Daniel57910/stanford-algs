var readLineSync = require('read-each-line-sync')
const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]
values = [[`B`, `D`], [`D`, `A`, `C`][`D`, `B`], [`A`, `B`, `C`]]


// readLineSync('min_cut_test.txt', 'utf8', function (line) {
//   line = line.split("\t")
//   graph.add_to_graph( new Pair(parseInt(line[0]), generate_value_array(line)) )
// })

function generate_value_array(line) {
  return line.slice(1, line.length).map((vertex) => parseInt(vertex))
}

console.log(graph.node_pairs)