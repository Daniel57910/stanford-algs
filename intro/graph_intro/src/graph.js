const Pair = require("./pair")

class Graph {

  constructor() {
    this.original_node_pairs = []
  }

  add_to_graph(pair) {
    this.original_node_pairs.push(pair)
  }

  fuse() {
    /*used to ensure the original state of the array does not change */
    this.node_pairs = this.original_node_pairs.map((a) => new Pair(a.node, [...a.vertices]))
    while (this.node_pairs.length > 2) {
      this.find_the_nodes()
      /*combines the nodes and concatenates their newly shared vertices */
      this.combine_the_nodes()
      // /*removes self loops */
      this.remove_the_vertex()
      // /*as nodes have been fused one of the fused nodes can be removed*/
      this.remove_fused_node()
      // /*updates the rest of the vertices within the graph to reflect newly created nodes, note currently n^2 operation*/
      this.update_the_graph()
    }
  }

  find_the_nodes() {
     this.node_for_fusion = this.node_pairs[identify_for_fusion(this.node_pairs.length)]
     this.vertex_for_fusion = this.node_for_fusion.vertices[identify_for_fusion(this.node_for_fusion.vertices.length)]
  }

  combine_the_nodes() {
    this.node_for_fusion.node += `_${this.vertex_for_fusion}`
    this.node_for_fusion.vertices = this.node_for_fusion.vertices.concat(find_pair_for_fusing(this.node_pairs, this.vertex_for_fusion))
  }

  remove_the_vertex() {
    this.node_for_fusion.vertices = [...(new Set(this.node_for_fusion.vertices.map((item) => item)))]
    .filter((vertex) => !this.node_for_fusion.node.includes(vertex))
  }
  
  remove_fused_node() {
    this.node_pairs = this.node_pairs.filter((node) => node.node != this.vertex_for_fusion)
  }

  update_the_graph() {
    for (let node of this.node_pairs) {
      node.vertices = update_additional_vertices(node.vertices, this.node_for_fusion.node)
    }
    debugger;
  } 

  calculate_num_cuts() {
    let fused_node = this.node_pairs[0].node.split("_"), fused_opposite_node = this.node_pairs[1].node.split("_"), count = 0
    for (let node of fused_node) {
      for (let vertex of fused_opposite_node) {
        if (crosses_the_border(this.original_node_pairs, node, vertex)) {
          count++
        }
      }
    }
    debugger;
    return count
  }
} 

function crosses_the_border(node_array, node, vertex) {
  return node_array.find((node) => node.node === vertex).vertices.includes(node)
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
  let find = node_array.find((node) => node.node === vertex)
  debugger;
  return find.vertices
} 

module.exports = Graph