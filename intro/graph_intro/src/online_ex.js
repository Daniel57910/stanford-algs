var graph = {1: [2, 3], 2: [1, 3], 3: [2, 1]}

function pick(arr) {
  var idx = (arr.length * Math.random()) | 0;
  return arr[idx];
}

function remove(arr, el) {
  var idx;
  while ((idx = arr.indexOf(el)) > -1)
    arr.splice(idx, 1);
}

function minCut(graph) {
  var node, edge;
  console.log(`before function`)
  console.log(graph)
  while (Object.keys(graph).length > 2) {
    // pick a node
    node = pick(Object.keys(graph));
    console.log(`node = ${node}`)
    // pick an edge
    edge = pick(graph[node]);
    console.log(`edge = ${edge}`)

    graph[node] = graph[node].concat(graph[edge]);
    console.log(`post graph = `)
    console.log(graph)
    // // delete other vertex
    delete graph[edge];
    console.log(graph)

    // // update edges in other lists
    Object.keys(graph).forEach(function (it) {
      var idx;
      while ((idx = graph[it].indexOf(edge)) > -1) graph[it][idx] = node;
    });
    console.log(`graph after updating = `) 
    console.log(graph)

    // // remove self loops
  remove(graph[node], node);
  console.log(graph)
  }
  return graph[Object.keys(graph)[0]].length;
}


minCut(graph)