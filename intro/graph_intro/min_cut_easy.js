const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`, 'E']
values = [[`B`, `D`], [`D`, `A`, `C`], [`D`, `B`], [`A`, `B`, `C`], []]

for (key in keys) {
  graph.add_to_graph(new Pair(keys[key], values[key]))
}

graph.fuse()