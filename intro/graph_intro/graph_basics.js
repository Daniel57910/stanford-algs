/*
plots the vertices on in a 2d matrix. good for dense graphs as 0(n2 space) for all nodes
*/

var all_nodes = [1, 2, 3, 4, 5, 6, 7, 8]
var vertices = [[1, 2, 3, 4], [2, 4, 3, 7], [3, 1, 4, 5] [5, 6, 4, 7], [6, 5], [7, 8, 4, 2, 5], [8, 7]]
let connections = []

develop_matrix(all_nodes, connections)
console.log(connections)


function develop_matrix(all_nodes, connections) {

  let current_row = []
  for (let i = 0; i < all_nodes.length; i++) {
    current_row.push(i + 1)
  }
  connections.push(current_row)
  for (j = 1; j < all_nodes.length; j++) {
    let current_row = []
    for (let i = 0; i < all_nodes.length; i++) {
      i === 0 ? current_row.push(j + 1) : current_row.push(false)
    }
    connections.push(current_row)
  }
  
}