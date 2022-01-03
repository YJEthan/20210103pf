import PF from "../../Pages/Graph/Canvas";
import React, { useEffect, useState } from "react";

var mySet = new Set();
function dfs(node, graph) {
  if (mySet.has(node.id)) return;
  mySet.add(node.id);
  var tempNodes = graph.getNeighbors(node);
  for (let tempNode of tempNodes) {
    dfs(tempNode, graph);
  }
}
function isConnected(graph) {
  var nodes = graph.getNodes();
  mySet.clear();
  dfs(nodes[0], graph);

  return mySet.size === nodes.length;
  // var options = {
  //   deep: true
  //   // indirect: true
  //   // incoming: true
  // };
  // tempNodes = graph.getNeighbors(nodes[0], options);
  // console.log("start:", nodes[0].label);
  // for (let node of tempNodes) {
  //   console.log(node.label);
  // }
  // return 1;
}

export default function () {
  const [ringComplexity, setRingComplexity] = useState(0);

  useEffect(() => {
    const { graph } = PF;
    // const { history } = graph;

    graph.on("cell:changed", () => {
      var N = graph.getNodes().length;
      var E = graph.getEdges().length;
      console.log(N);
      if (isConnected(graph)) {
        setRingComplexity(E - N + 2);
      } else {
        setRingComplexity("unconnected");
      }
    });
  });

  return <div>{ringComplexity}</div>;
}
