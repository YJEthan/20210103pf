import ToolBar from "../../Components/ToolBar/index";
export default class Event {
  public static init(graph, view) {
    graph.on("cell:dblclick", ({ cell, e }) => {
      cell.addTools([
        {
          name: cell.isEdge() ? "edge-editor" : "node-editor",
          args: {
            event: e
          }
        }
      ]);
    });
    // graph.on("edge:mouseenter", ({ cell }) => {
    //   cell.addTools([
    //     {
    //       name: "source-arrowhead"
    //     },
    //     {
    //       name: "target-arrowhead",
    //       args: {
    //         attrs: {
    //           fill: "red"
    //         }
    //       }
    //     }
    //   ]);
    // });
    graph.on("edge:added", ({ edge, e }) => {
      const source = graph.getCellById(edge.getSourceCellId());
      var myStokeDasharray = "5,0";
      if (source.shape === "Requirement") {
        myStokeDasharray = "5,5";
      }
      edge.attr({
        line: {
          strokeDasharray: myStokeDasharray,
          targetMarker: ""
        }
      });
    });

    // graph.on("edge:mouseleave", ({ cell }) => {
    //   cell.removeTools();
    // });

    // graph.history.on("change", () => {
    //   ToolBar.handleCanRedoUndo();
    // });
  }
}
