class Graph {
  constructor() {
    this.node_pairs = []
  }
  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
    let node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]
    let vertex_for_fusion = node_for_fusion.vertices[identify_for_fusion(node_for_fusion.vertices.length)]
    console.log(`node for fusion = ${node_for_fusion.node}`)
    console.log(`vertex for fusion = ${vertex_for_fusion}`)
  }
}

function identify_for_fusion(node_pairs) {
  return Math.floor(Math.random() * node_pairs)
}

module.exports = Graph