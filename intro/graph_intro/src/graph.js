class Graph {

  constructor() {
    this.node_pairs = []
  }

  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
    this.node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]

    if (all_vertices_have_been_fused(this.node_for_fusion.vertices)) {
      this.node_pairs = this.node_pairs.filter((node) => node.node != this.node_for_fusion.node)
    }
    else {
      this.vertex_for_fusion = this.node_for_fusion.vertices[identify_for_fusion(this.node_for_fusion.vertices.length)]
      this.combine_nodes()
    }
    
  }

  combine_nodes() {
    this.remove_opposites()
    this.node_for_fusion.node += this.vertex_for_fusion
    this.node_for_fusion.vertices = this.node_for_fusion.vertices.filter((vertex) => vertex != this.vertex_for_fusion)
  }

  /*first remove opposites to prevent self loops and as the graph is undirectional if AD to be fused then DA need to be fused*/
  
  remove_opposites() {
    let opposite_node = this.node_pairs.find((node) => node.node === this.vertex_for_fusion)
    opposite_node.vertices = opposite_node.vertices.filter((vertex) => vertex != this.node_for_fusion.node)
  }

}

function identify_for_fusion(node_pairs) {
  return Math.floor(Math.random() * node_pairs)
}

function all_vertices_have_been_fused(vertex_length) {
  return vertex_length.length === 0
}

module.exports = Graph