const Pair = require("./pair")

class Graph {

  constructor() {
    this.node_pairs = []
    this.current_array = []
  }

  add_to_graph(pair) {
    this.node_pairs.push(pair)
  }

  fuse() {
    var count = 1
    this.create_current_array()
    // print_debug(this.current_array, `before beginning execution`)
    /*used to ensure the original state of the array does not change */
    while (this.current_array.length > 2) {
      this.find_the_nodes()
      this.combine_the_nodes()
      // print_debug(this.current_array, `combine`)
      this.remove_the_vertex()
      // print_debug(this.current_array, `remove vertex`)
      this.remove_fused_node()      
      // print_debug(this.current_array, `remove node from graph`)
      this.update_the_graph()
      // print_debug(this.current_array, `after round ${count}`)
      count++
    }

    return this.current_array[0].vertices.length
  }

  find_the_nodes() {
    this.node = pick(this.current_array)
    this.vertex = pick(this.node.vertices)
    // console.log(`for fusion => ${this.node.node} & ${this.vertex}`  )
  }

  combine_the_nodes() {
    this.node.vertices = this.node.vertices.concat(find(this.current_array, this.vertex))
  }

  remove_the_vertex() {
    this.node.vertices = [...(new Set(this.node.vertices.map((vertex => vertex))))].
    filter(vertex => vertex != this.node.node)
  }
  
  remove_fused_node() {
    this.current_array = this.current_array.filter(node => node.node != this.vertex)
  }

  update_the_graph() {
    for (let current of this.current_array) {
      current.vertices = update(current.vertices, this.node.node, this.vertex)
      /*removes self loops to prevent nodes pointing to themselves*/
      current.vertices = current.vertices.filter(vertex => vertex != current.node)
    }
  }
  
  create_current_array() {
    this.current_array = []
     for (let current of this.node_pairs) {
       this.current_array.push(new Pair(current.node, current.vertices.map(vertex => vertex)))
     }
  }
  
} 



function update(vertex_array, fused_node, fused_vertex) {
  for (let i in vertex_array) {
    if (vertex_array[i] === fused_vertex) {
       vertex_array[i] = fused_node
    }
  }
  return vertex_array
}


function print_debug(node_array, status) {
  console.log(status)
  node_array.map((node) => console.log(`node = ${node.node} => ${node.vertices}`))
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function find(node_array, vertex) {
  return node_array.find(node => node.node === vertex).vertices
} 

module.exports = Graph