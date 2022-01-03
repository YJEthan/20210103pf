import { Graph, Addon, Shape, View } from "@antv/x6";
import "../Shape/shape";
export default class Canvas {
  public static graph: Graph;

  public static init(container) {
    const graph = new Graph({
      // width: 1000,
      // height: 500,
      container: container,
      grid: true,
      connecting: {
        snap: true,
        allowBlank: false,
        // allowPort: false,
        allowEdge: false,
        highlight: true
      },
      snapline: {
        enabled: true,
        sharp: true
      },
      scroller: {
        enabled: true,
        pageVisible: false,
        pageBreak: false,
        pannable: true
      },
      resizing: true,
      history: true,
      selecting: true,
      keyboard: {
        enabled: true
      }
    });

    this.graph = graph;
    return graph;
  }
}
