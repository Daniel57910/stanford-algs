const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]
values = [[`B`, `D`], [`D`, `A`, `C`], [`D`, `B`], [`A`, `B`, `C`]]

for (key in keys) {
  graph.add_to_graph(new Pair(keys[key], values[key]))
}

console.log(graph.node_pairs)