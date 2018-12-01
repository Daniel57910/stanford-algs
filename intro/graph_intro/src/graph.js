class Graph {

  constructor() {
    this.node_pairs = []
  }

  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
    this.node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]
    this.vertex_for_fusion = this.node_for_fusion.vertices[identify_for_fusion(this.node_for_fusion.vertices.length)]
    this.combine_nodes()
  }
  combine_nodes() {
    this.remove_opposites()
    this.node_for_fusion.node += this.vertex_for_fusion
    this.node_for_fusion.vertices = this.node_for_fusion.vertices.filter((vertex) => vertex != this.vertex_for_fusion)
    console.log(this.node_pairs)
  }
  remove_opposites() {
    this.opposite_node = this.node_pairs.find((node) => node.node === this.vertex_for_fusion)
    this.opposite_node.node += this.node_for_fusion.node
    this.opposite_node.vertices = this.opposite_node.vertices.filter((vertex) => vertex != this.node_for_fusion.node)
  }
}

function identify_for_fusion(node_pairs) {
  return Math.floor(Math.random() * node_pairs)
}

module.exports = Graph