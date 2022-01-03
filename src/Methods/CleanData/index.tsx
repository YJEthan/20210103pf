// change type Cell to type string
// return ids of cells
function getId(cells) {
  var temp = [];
  for (let cell of cells) {
    temp.push(cell.id);
  }
  return temp;
}
//return nodes
/*
nodes[id]=attr{
  kind,
  name,
  neighbords,
  fathers,
  childen,
}
*/
export function cleanNodes(graph) {
  var nodes = new Map();
  for (let node of graph.getNodes()) {
    var attr = {
      // id:node.id,
      kind: node.shape,
      name: node.lable,
      neighbors: getId(graph.getNeighbors(node)),
      fathers: getId(graph.getNeighbors(node, { incoming: true })),
      children: getId(graph.getNeighbors(node, { outgoing: true }))
    };
    nodes.set(node.id, attr);
  }
  // for (let node of nodes) {
  //   console.log(node);
  // }
  // console.log("nodes number:", nodes.size);
  return nodes;
}

export function cleanEdges(graph) {
  var edges = new Map();
  for (let edge of graph.getEdges()) {
    edges.set(edge.getSourceCellId(), edge.getTargetCellId());
    edges.set(edge.getTargetCellId(), edge.getSourceCellId());
  }
  return edges;
}
