/*
plots the vertices on in a 2d matrix. good for dense graphs as 0(n2 space) for all nodes
*/

var all_nodes = [1, 2, 3, 4, 5, 6, 7, 8]
var vertices = [[1, 2, 3, 4], [2, 4, 3, 7], [3, 1, 4, 5] [5, 6, 4, 7], [6, 5], [7, 8, 4, 2, 5], [8, 7]]
let connections = []

develop_matrix(all_nodes, connections)
console.log(connections)


function develop_matrix(all_nodes, connections) {

  for (let col_count = 0; col_count < all_nodes.length; col_count++) {
    let current_row = []
    for (let row_count = 0; row_count < all_nodes.length; row_count++) {
     col_count == 0 || row_count == 0 ? current_row[row_count] = Math.max(row_count, col_count) + 1 : current_row[row_count] = false
    }
    connections.push(current_row)
  }
  
}