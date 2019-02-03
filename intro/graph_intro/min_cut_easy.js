const Pair = require(`./src/pair`)
const Graph = require(`./src/graph`)

var graph = new Graph()
keys = [`A`, `B`, `C`, `D`]
values = [[`B`, `C`], [`D`, `A`, `C`], [`D`,`A`,`B`], [`B`, `C`]]

for (let i = 0; i < keys.length; i++) {
  graph.add_to_graph(new Pair(keys[i], values[i]))
}

let current = Number.MAX_SAFE_INTEGER

for (let i = 0; i < 100000; i++) {
  let possible = graph.fuse()
  if (possible < current) current = possible 
}

console.log(`min cut of the graph is ${current}`)
