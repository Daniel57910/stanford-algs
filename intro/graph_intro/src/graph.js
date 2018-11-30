class Graph {
  constructor() {
    this.node_pairs = []
  }
  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }
}

module.exports = Graph