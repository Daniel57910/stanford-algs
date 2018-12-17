var readLineSync = require('read-each-line-sync')
const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]
values = [[`B`, `D`], [`D`, `A`, `C`][`D`, `B`], [`A`, `B`, `C`]]


readLineSync('min_cut_test.txt', 'utf8', function (line) {
  line = line.split(" ")
  graph.add_to_graph(new Pair(line[0], line.slice(1, line.length)))
})

var maximum_cuts = Math.pow(2, graph.original_node_pairs.length) - 1
var runs = Math.pow(graph.original_node_pairs.length, 2)

for (let i = 0; i < runs; i++) {
  graph.fuse()
  let current_cut = graph.calculate_num_cuts()
  if (maximum_cuts > current_cut) { maximum_cuts = current_cut }
}

console.log(graph.node_pairs)
console.log(`minimum cut of the graph = ${maximum_cuts}`)

