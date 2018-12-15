const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]

values = [[`B`, `C`], [`D`, `A`, `C`], [`D`,`A`,`B`], [`B`, `C`]]

for (let i = 0; i < keys.length; i++) {
  let pair = new Pair(keys[i], values[i])
  graph.add_to_graph(pair)
}


graph.fuse()
console.log(graph.calculate_num_cuts())
