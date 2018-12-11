class Graph {

  constructor() {
    this.node_pairs = []
  }

  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
    while (this.node_pairs.length > 2) {
      print_debug(this.node_pairs, "before")
      this.find_the_nodes()
      this.combine_the_nodes()
      this.remove_the_vertex()
      this.remove_fused_node()
      this.update_the_graph()
      print_debug(this.node_pairs, "after")
    }
  }

  find_the_nodes() {
     this.node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]
     this.vertex_for_fusion = this.node_for_fusion.vertices[identify_for_fusion(this.node_for_fusion.vertices.length)]
  }

  remove_the_vertex() {
    this.node_for_fusion.vertices = [...(new Set(this.node_for_fusion.vertices.map((item) => item)))]
    this.node_for_fusion.vertices = this.node_for_fusion.vertices.filter((vertex) => !this.node_for_fusion.node.includes(vertex))
  }

  combine_the_nodes() {
    this.node_for_fusion.node += this.vertex_for_fusion
    this.node_for_fusion.vertices =  this.node_for_fusion.vertices.concat(find_pair_for_fusing(this.node_pairs, this.vertex_for_fusion))
  }

  remove_fused_node() {
    this.node_pairs = this.node_pairs.filter((node) => node.node != this.vertex_for_fusion)
  }

  update_the_graph() {
    for (let i in this.node_pairs) {
      this.node_pairs[i].vertices = update_additional_vertices(this.node_pairs[i].vertices, this.node_for_fusion.node)
    }
  } 
}

function update_additional_vertices(vertex_array, fused_node) {
  for (let i in vertex_array) {
    if (fused_node.includes(vertex_array[i])) {
      vertex_array[i] = fused_node
    }
  }
  return [...(new Set(vertex_array.map((item) => item)))]
}

function print_debug(node_array, status) {
  console.log(status)
  node_array.map((node) => console.log(`node = ${node.node} => ${node.vertices}`))
}

function identify_for_fusion(node_pairs) {
  return Math.floor(Math.random() * node_pairs)
}

function find_pair_for_fusing(node_array, vertex) {
  let node = node_array.find((node) => node.node === vertex)
  return node.vertices
} 

module.exports = Graph