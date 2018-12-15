const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)
const readLineSync = require('read-each-line-sync')

var graph = new Graph()
readLineSync('min_cut.txt', 'utf8', function (line) {
  line = line.split("\t")
  pair = new Pair(line[0], line.slice(1, line.length -1))
  graph.add_to_graph(pair)
})

var maximum_cuts = Math.pow(2, graph.original_node_pairs.length) - 1
var runs = Math.pow(graph.original_node_pairs.length, 2)
graph.fuse()

console.log(`minimum cut of the graph = ${maximum_cuts}`)
