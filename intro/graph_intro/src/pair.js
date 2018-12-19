class Pair {
  constructor() {
    this.node = []
    this.vertices
  }
  create(node, vertices) {
    this.node.push(node)
    this.vertices = vertices
  }
}

module.exports = Pair