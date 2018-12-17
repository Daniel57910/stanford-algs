const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]

values = [[`B`, `C`], [`D`, `A`, `C`], [`D`,`A`,`B`], [`B`, `C`]]

for (let i = 0; i < keys.length; i++) {
  let pair = new Pair(keys[i], values[i])
  graph.add_to_graph(pair)
}

var maximum_cuts = Math.pow(2, graph.original_node_pairs.length) - 1
var runs = Math.pow(graph.original_node_pairs.length, 2)

for (let i = 0; i < runs; i++) {
  graph.fuse()
  let current_cut = graph.calculate_num_cuts()
  if (maximum_cuts > current_cut) { maximum_cuts = current_cut }
}

console.log(`minimum cut of the graph = ${maximum_cuts}`)



