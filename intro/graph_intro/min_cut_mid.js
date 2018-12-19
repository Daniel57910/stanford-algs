const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)
const readLineSync = require('read-each-line-sync')

var graph = new Graph()
readLineSync('min_cut_test.txt', 'utf8', function (line) {
  line = line.split(" ")
  pair = new Pair()
  pair.create(line[0], line.slice(1, line.length))
  graph.add_to_graph(pair)
})

graph.fuse()
// // var maximum_cuts = Math.pow(2, graph.original_node_pairs.length) - 1
// // var runs = Math.pow(graph.original_node_pairs.length, 2)


// console.log(`minimum cut of the graph = ${maximum_cuts}`)
