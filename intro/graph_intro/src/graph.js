class Graph {

  constructor() {
    this.node_pairs = []
  }

  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
      this.find_the_nodes()
      this.remove_the_vertex()
      this.combine_the_nodes()
      print_debug(this.node_pairs)
  }

  find_the_nodes() {
     this.node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]
     this.vertex_for_fusion = this.node_for_fusion.vertices[identify_for_fusion(this.node_for_fusion.vertices.length)]
     this.opposite_node_for_fusion = this.node_pairs.find((node) => node.node === this.vertex_for_fusion)
  }

  remove_the_vertex() {
    this.node_for_fusion.vertices = filter_the_vertices(this.node_for_fusion.vertices, this.opposite_node_for_fusion.node)
    this.opposite_node_for_fusion.vertices = filter_the_vertices(this.opposite_node_for_fusion.vertices, this.node_for_fusion.node)
  }

  combine_the_nodes() {
    this.node_for_fusion.node += this.vertex_for_fusion
    this.opposite_node_for_fusion.node = this.node_for_fusion.node
    this.update_the_graph()
  }

  update_the_graph() {
    for (let i = 0; i < this.node_pairs.length; i++)
      if (this.node_pairs[i].node != this.node_for_fusion.node) {
        this.node_pairs[i].vertices = update_additional_vertices(this.node_pairs[i].vertices, this.node_for_fusion.node)
      }
    }
  }

function update_additional_vertices(vertex_array, fused_node) {
  for (let i = 0; i < vertex_array.length; i++) {
    if (fused_node.includes(vertex_array[i])) {
      vertex_array[i] = fused_node
    }
  }
  return [...(new Set(vertex_array.map((item) => item)))]
}

function print_debug(node_array) {
  node_array.map((node) => console.log(`node = ${node.node} => ${node.vertices}`))
}

function filter_the_vertices(vertex_array, node){
  return vertex_array.filter((vertex) => vertex != node)
}

function identify_for_fusion(node_pairs) {
  return Math.floor(Math.random() * node_pairs)
}

function all_vertices_have_been_fused(vertex_length) {
  return vertex_length.length === 0
}

module.exports = Graph